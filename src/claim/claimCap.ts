import { getRealm } from '~system/Runtime'
import { signedFetch } from '~system/SignedFetch'
import * as utils from '@dcl-sdk/utils'
import { getPlayer } from '@dcl/sdk/src/players'
import { GameController } from '../controllers/gameController'
import { ClaimTokenRequestArgs, USE_CAPTCHA, configEmote } from './config'
import * as ui from 'dcl-ui-toolkit'
import { Color4 } from '@dcl/sdk/math'
import { openExternalUrl } from '~system/RestrictedActions'
import { PromptInput } from 'dcl-ui-toolkit/dist/ui-entities/prompts/Prompt/components/Input'
import { PromptButton } from 'dcl-ui-toolkit/dist/ui-entities/prompts/Prompt/components/Button'
import { PromptIcon } from 'dcl-ui-toolkit/dist/ui-entities/prompts/Prompt/components/Icon'
import { PromptText } from 'dcl-ui-toolkit/dist/ui-entities/prompts/Prompt/components/Text'

export class ClaimCapRequest {
  inTimeOut: boolean = false
  alreadyClaimed: string[] = []
  userData: any
  gameController: GameController
  campaign: ClaimTokenRequestArgs
  campaign_key: string
  claimServer: string
  claimInProgress: ui.CustomPrompt
  captchaUI: ui.CustomPrompt
  retryUI: ui.CustomPrompt
  onTheWay: ui.CustomPrompt
  walletConnected: boolean = false
  uiMsg: string = 'An unexpected error occurred: \n'
  captchaTitle: PromptText
  captchaImage: PromptIcon
  captchaHelpText: PromptText
  captchaFillInBox: PromptInput
  captchaButtonE: PromptButton
  captchaButtonF: PromptButton
  constructor(
    gameController: GameController,
    campaign: ClaimTokenRequestArgs,
    campaign_key: string,
    claimServer: string
  ) {
    this.gameController = gameController
    this.campaign = campaign
    this.campaign_key = campaign_key
    this.claimServer = claimServer
    this.claimInProgress = ui.createComponent(ui.CustomPrompt, {
      style: ui.PromptStyles.LIGHT,
      height: 350
    })
    this.captchaUI = ui.createComponent(ui.CustomPrompt, {
      style: ui.PromptStyles.LIGHT,
      height: 350
    })
    this.retryUI = ui.createComponent(ui.CustomPrompt, {
      style: ui.PromptStyles.LIGHT,
      height: 350
    })
    this.onTheWay = ui.createComponent(ui.CustomPrompt, {
      style: ui.PromptStyles.LIGHT,
      height: 350
    })
    this.captchaTitle = this.captchaUI.addText({
      value: '',
      size: 0,
      xPosition: 0,
      yPosition: 0
    })
    this.captchaImage = this.captchaUI.addIcon({
      image: '',
      xPosition: 0,
      yPosition: 0,
      width: 0,
      height: 0
    })
    this.captchaHelpText = this.captchaUI.addText({
      value: '<b>Enter the BIG GREEN letters*</b>',
      xPosition: -96,
      yPosition: -10,
      size: 0
    })
    this.captchaFillInBox = this.captchaUI.addTextBox({
      placeholder: '                  Fill In',
      xPosition: 0,
      yPosition: -70,
      onChange: (value) => {}
    })
    this.captchaButtonE = this.captchaUI.addButton({
      style: ui.ButtonStyles.RED,
      text: '',
      xPosition: 0,
      yPosition: 0,
      onMouseDown: () => {}
    })
    this.captchaButtonF = this.captchaUI.addButton({
      style: ui.ButtonStyles.DARK,
      buttonSize: 200,
      text: '',
      xPosition: 0,
      yPosition: 0,
      onMouseDown: () => {}
    })
    this.captchaUI.closeIcon.hide()
    this.createRetryUI()
    this.createInProgressUI()
    this.claimInProgress.hide()
    this.retryUI.hide()
    this.onTheWay.hide()
    this.captchaUI.hide()
  }
  createInProgressUI() {
    const titleonTheWay = this.claimInProgress.addText({
      value: 'Claim in progress',
      size: 30,
      xPosition: -125,
      yPosition: 50
    })
    const promptButtonE = this.claimInProgress.addButton({
      style: ui.ButtonStyles.E,
      text: 'OK',
      xPosition: -10,
      yPosition: -100,
      onMouseDown: () => {}
    })
  }
  createRetryUI() {
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
        this.retryUI.hide()
        this.gameController.questPortal.giveReward()
      }
    })

    const promptButtonF = this.retryUI.addButton({
      style: ui.ButtonStyles.F,
      buttonSize: 200,
      text: 'Cancel',
      xPosition: -100,
      yPosition: -120,
      onMouseDown: () => {
        this.retryUI.hide()
      }
    })
  }
  createOnTheWayUI(image: string, id: string) {
    const titleonTheWay = this.onTheWay.addText({
      value: '<b>This item is on its way!</b>',
      size: 18,
      xPosition: -120,
      yPosition: 150
    })
    let emoteImage = this.onTheWay.addIcon({
      image: image,
      xPosition: 0,
      yPosition: 25,
      width: 120,
      height: 120
    })
    const promptButtonE = this.onTheWay.addButton({
      style: ui.ButtonStyles.E,
      text: 'OK',
      xPosition: 80,
      buttonSize: 180,
      yPosition: -120,
      onMouseDown: () => {
        this.onTheWay.hide()
        this.gameController.questPortal.setRewardTrue()
      }
    })

    const promptButtonF = this.onTheWay.addButton({
      style: ui.ButtonStyles.F,
      buttonSize: 180,
      text: 'DETAILS',
      xPosition: -60,
      yPosition: -120,
      onMouseDown: () => {
        // agregar URL y Data.id
        const baseUrl = 'https://rewards.decentraland.zone'
        openExternalUrl({ url: baseUrl + '/reward/?id=' + id })
      }
    })
  }
  setUserData() {
    this.userData = getPlayer()
    console.log('user data is', this.userData)
    if (!this.userData || this.userData.isGuest) {
      console.log('UI you are not connected') // The ui currently displaying
      return false
    }
    return true
  }
  async claimToken() {
    console.log('Claiming Token')
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
      console.log('Already Claim UI')
      return
    }

    await this.setUserData()

    if (USE_CAPTCHA) {
      const request = await fetch(`https://rewards.decentraland.org/api/captcha`, { method: 'POST' })
      const captcha = await request.json()
      console.log('CAPTCHA DATA: ', captcha)
      this.createCaptchaUI(captcha.data.image, captcha.data.id, this.campaign.campaign, this.campaign_key)
      this.captchaUI.show()
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
    }

    this.alreadyClaimed.push(campaign_key)
  }
  async validateCaptcha(captcha: string, captcha_id: string, campaign: string, campaign_key: string) {
    this.claimInProgress.show()
    const user = await getPlayer()
    let realm = await getRealm({})
    console.log('realm is', realm.realmInfo)
    if (!user || user.isGuest || !realm) {
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
    this.claimInProgress.hide()
    this.captchaUI.hide()
    if (json.ok === false) {
      console.log('ERROR:' + json.error)
      this.uiMsg = 'An unexpected error occurred: \n' + json.error
      this.retryUI.show()
      return false
    } else {
      console.log('dataaa' + json)
      this.createOnTheWayUI(json.data[0].image, json.data[0].id)
      this.onTheWay.show()
      this.alreadyClaimed.push(campaign_key)
    }
  }

  createCaptchaUI(image: string, id: string, campaing: string, campaingKey: string): void {
    let captchaInput = ''
    this.claimInProgress.hide()

    this.captchaTitle.value = '<b>Please complete this captcha</b>'
    this.captchaTitle.size = 18
    this.captchaTitle.xPosition = -140
    this.captchaTitle.yPosition = 150

    this.captchaImage.image = image
    this.captchaImage.xPosition = 0
    this.captchaImage.yPosition = 40
    this.captchaImage.width = 280
    this.captchaImage.height = 100

    this.captchaHelpText.value = '<b>Enter the BIG GREEN letters*</b>'
    this.captchaHelpText.xPosition = -96
    this.captchaHelpText.yPosition = -10
    this.captchaHelpText.color = Color4.create(0.34901960784313724, 0.8274509803921568, 0.5450980392156862, 1)
    this.captchaHelpText.size = 12

    this.captchaFillInBox.placeholder = '                  Fill In'
    this.captchaFillInBox.xPosition = 0
    this.captchaFillInBox.yPosition = -70
    this.captchaFillInBox.onChange = (value) => {
      console.log('textbox changed:', value)
      captchaInput = value
    }

    this.captchaButtonE.imageElement.uiBackground = {
      textureMode: 'center',
      texture: { src: 'assets/ui/UI_button_red_version_2.png'}
    }
    this.captchaButtonE.imageElementEdge.uiBackground= {
      textureMode: 'center',
      texture: { src: 'assets/ui/UI_button_red_version_2.png'}
    }
    this.captchaButtonE.imageElementCorner.uiBackground = {
      textureMode: 'center',
      texture: { src: 'assets/ui/UI_button_red_version_2.png'}
    }
    this.captchaButtonF.imageElement.uiBackground = {
      textureMode: 'center',
      texture: { src: ''},
      color: Color4.Black()
    } 
    this.captchaButtonF.imageElementEdge.uiBackground= {
      textureMode: 'center',
      texture: { src: ''},
      color: Color4.Black()
    }
    this.captchaButtonF.imageElementCorner.uiBackground = {
      textureMode: 'center',
      texture: { src: ''},
      color: Color4.Black()
    }

    this.captchaButtonE.text = 'Submit'
    this.captchaButtonE.xPosition = 90
    this.captchaButtonE.yPosition = -155
    this.captchaButtonE.onMouseDown = () => {
      this.captchaUI.hide()
      this.validateCaptcha(captchaInput, id, campaing, campaingKey)
    }

    this.captchaButtonF.text = 'Cancel'
    this.captchaButtonF.xPosition = -110
    this.captchaButtonF.yPosition = -155
    this.captchaButtonF.onMouseDown = () => {
      this.captchaUI.hide()
      this.gameController.questPortal.onCloseRewardUI()
    }
  }
}
