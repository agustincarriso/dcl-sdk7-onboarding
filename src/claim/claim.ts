import { getRealm } from '~system/Runtime'
import { signedFetch } from '~system/SignedFetch'

import * as utils from '@dcl-sdk/utils'
import { getPlayer } from '@dcl/sdk/src/players'
import { GameController } from '../controllers/gameController'
import { ClaimConfigInstType, ClaimTokenRequestArgs, USE_CAPTCHA, configEmote } from './config'
import * as ui from 'dcl-ui-toolkit'
import { Color4 } from '@dcl/sdk/math'
import { openExternalUrl } from '~system/RestrictedActions'

export class ClaimTokenRequest {
  inTimeOut: boolean = false
  alreadyClaimed: string[] = []
  userData: any
  gameController: GameController
  campaign: ClaimTokenRequestArgs
  campaign_key: string
  claimServer: string
  claimInProgress: ui.OkPrompt
  captchaUI: ui.CustomPrompt
  retryUI: ui.CustomPrompt
  onTheWay: ui.CustomPrompt
  walletConnected: boolean = false
  uiMsg : string = 'An unexpected error occurred: \n'
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.campaign = configEmote
    this.campaign_key = configEmote.campaign_key
    this.claimServer = configEmote.claimServer
    this.claimInProgress = ui.createComponent(ui.OkPrompt, {
      text: "Claim in progress",
      onAccept: () => {
        console.log('accepted')
      },
      acceptLabel: 'Ok',
      useDarkTheme: false,
      width: 450,
      height: 500,
      startHidden: false,
    })
    this.claimInProgress.hide()
    this.captchaUI = ui.createComponent(ui.CustomPrompt, {
      style: ui.PromptStyles.LIGHT,
      height: 350,
    })
    this.retryUI = ui.createComponent(ui.CustomPrompt, {
      style: ui.PromptStyles.LIGHT,
      height: 350,
    })
    this.onTheWay = ui.createComponent(ui.CustomPrompt, {
      style: ui.PromptStyles.LIGHT,
      height: 350,
    })
  }
  createRetryUI(){
    this.retryUI.show()
    const titleRetryUi = this.retryUI.addText({
      value: this.uiMsg,
      xPosition: -140,
      yPosition: 80,
      color: Color4.Black(),
      size: 20
    })
    const promptButtonE = this.retryUI.addButton({
      style: ui.ButtonStyles.E,
      text: 'Retry',
      xPosition: 100,
      yPosition: -120,
      onMouseDown: () => {
        console.log('Yeah clicked')
      },
    })
    
    const promptButtonF = this.retryUI.addButton({
      style: ui.ButtonStyles.F,
      buttonSize: 200,
      text: 'Cancel',
      xPosition: -100,
      yPosition: -120,
      onMouseDown: () => {
        console.log('Nope clicked')
      },
    })
  }
  createOnTheWayUI(){
    this.onTheWay.show()
    const titleonTheWay = this.onTheWay.addText({
      value: '<b>This item is on its way!</b>',
      size: 18,
      xPosition: -120,
      yPosition: 150
    })
    let emoteImage = this.onTheWay.addIcon({
      image: 'assets/ui/emote_icon.png',
      xPosition: 0,
      yPosition: 25,
      width:  120,
      height:  120
    })
    const promptButtonE = this.onTheWay.addButton({
      style: ui.ButtonStyles.E,
      text: 'OK',
      xPosition: 80,
      buttonSize: 180,
      yPosition: -120,
      onMouseDown: () => {
        console.log('Yeah clicked')
      },
    })
    
    const promptButtonF = this.onTheWay.addButton({
      style: ui.ButtonStyles.F,
      buttonSize: 180,
      text: 'DETAILS',
      xPosition: -60,
      yPosition: -120,
      onMouseDown: () => {
        // agregar URL y Data.id
        // openExternalUrl({ url: baseUrl + '/reward/?id=' + data.id})
      },
    })
  }
  setUserData() {
    this.userData = getPlayer()
    console.log('user data is', this.userData)
    if (!this.userData || this.userData.isGuest) {
      this.walletConnected = false
      console.log('UI you are not connected') // The ui currently displaying
      return false
    }
    this.walletConnected = true
    return true
  }
  async claimToken() {
    this.claimInProgress.show()
    // prevent more than 1 request per second
    if (this.inTimeOut) return

    this.inTimeOut = true
    utils.timers.setTimeout(() => {
      this.inTimeOut = false
    }, 1000)

    // check if this same wearable was already claimed in this session
    const isClaimed = this.alreadyClaimed.find((item) => item === this.campaign_key)

    if (isClaimed) {
      //this.gameController.ui.alreadyClaimedUI()
      console.log('Already Claim UI')
      return
    }

    await this.setUserData()

    if (USE_CAPTCHA) {
      const request = await fetch(`https://rewards.decentraland.org/api/captcha`, { method: 'POST' })
      const captcha = await request.json()
      console.log('CAPTCHA DATA: ', captcha)
      this.createCaptchaUI(captcha.data.image, captcha.data.id, this.campaign.campaign, this.campaign_key)
    } else {
      this.requestToken(this.campaign_key)
    }
  }
  async requestToken(campaign_key: string) {
    await this.setUserData()
    console.log('Requesting Emote')
    let METHOD_NAME = 'claimToken'
    const url = this.claimServer + '/api/campaigns/' + this.campaign.campaign + '/rewards'
    console.log(METHOD_NAME, 'sending req to: ', url)

    let realm = await getRealm({})
    console.log('realm is', realm.realmInfo)
    console.log('userData is: ', this.userData)
    let body = JSON.stringify({
      campaign_key: campaign_key,
      catalyst: realm.realmInfo ? realm.realmInfo.baseUrl : '',
      beneficiary: !this.userData.isGuest ? this.userData.userId : ''
    })

    try {
      let response: any = null
      console.log(METHOD_NAME, 'signedFetch')
      response = await signedFetch({
        url: url,
        init: {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body
        }
      })

      console.log(METHOD_NAME, 'Reward received resp body: ', response)

      await this.processResponse(response, campaign_key)
    } catch (error) {
      console.log(METHOD_NAME, 'error fetching from token server ', url)
      console.log(METHOD_NAME, 'error', error)
    }
  }
  async processResponse(response: any, campaign_key: string) {
    if (!response || !response.body) {
      throw new Error('Invalid response')
    }
    let json = await JSON.parse(response.body)
    console.log('Reward received json: ', json)

    if (json.ok === false) {
      console.log('ERROR:' + json.error)
      //   this.gameController.ui.errorUI(
      //     json.error ? this.gameController.ui.breakLines(json.error, 20) : 'Invalid response'
      //   )
    }

    this.alreadyClaimed.push(campaign_key)

    // this.gameController.ui.confirmationUI(json.data[0].image, json.data[0].token)
  }
  async validateCaptcha(captcha: string, captcha_id: string, campaign: ClaimConfigInstType, campaign_key: string) {
    const user = await getPlayer()
    let realm = await getRealm({})
    console.log('realm is', realm.realmInfo)
    if (!user || user.isGuest || !realm) {
      // this.gameController.ui.errorUI('You must be\nconnected with an Ethereum wallet\nto claim rewards.')
      return
    }

    const response = await signedFetch({
      url: 'https://rewards.decentraland.org/api/rewards',
      init: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          campaign_key: campaign_key,
          catalyst: realm.realmInfo ? realm.realmInfo.baseUrl : '',
          beneficiary: !this.userData.isGuest ? this.userData.userId : '',
          captcha_id: captcha_id,
          captcha_value: captcha
        })
      }
    })

    if (!response || !response.body) {
      return false
    }
    let json = await JSON.parse(response.body)
    console.log(json)

    if (json.ok === false) {
      console.log('ERROR:' + json.error)
      this.uiMsg = 'An unexpected error occurred: \n' + json.error
      return false
    }

    this.alreadyClaimed.push(campaign_key)
  }

  createCaptchaUI(image: string, id: string, campaing: string, campaingKey: string): void {
    this.claimInProgress.hide()
    const title = this.captchaUI.addText({
      value: '<b>Please complete this captcha</b>',
      size: 18,
      xPosition: -140,
      yPosition: 150
    })
    let captchaImage = this.captchaUI.addIcon({
      image: image,
      xPosition: 0,
      yPosition: 40,
      width:  280,
      height:  100
    })
    const helpText = this.captchaUI.addText({
      value: '<b>Enter the BIG GREEN letters*</b>',
      xPosition: -96,
      yPosition: -10,
      color: Color4.create(0.34901960784313724, 0.8274509803921568, 0.5450980392156862, 1),
      size: 12
    })
    const fillInBox = this.captchaUI.addTextBox({
      placeholder: '                  Fill In',
      xPosition: 0,
      yPosition: -70,
      onChange: (value) => {
        console.log('textbox changed:', value)
      },
    })
    const promptButtonE = this.captchaUI.addButton({
      style: ui.ButtonStyles.E,
      text: 'Submit',
      xPosition: 100,
      yPosition: -160,
      onMouseDown: () => {
        console.log('Yeah clicked')
      },
    })
    
    const promptButtonF = this.captchaUI.addButton({
      style: ui.ButtonStyles.F,
      buttonSize: 200,
      text: 'Cancel',
      xPosition: -100,
      yPosition: -160,
      onMouseDown: () => {
        console.log('Nope clicked')
      },
    })
  }
}