import { getRealm } from '~system/Runtime'
import { signedFetch } from '~system/SignedFetch'

import * as utils from '@dcl-sdk/utils'
import { getPlayer } from '@dcl/sdk/src/players'
import { GameController } from '../controllers/gameController'
import { ClaimConfigInstType, ClaimTokenRequestArgs, USE_CAPTCHA, configEmote } from './config'
import * as ui from 'dcl-ui-toolkit'

export class ClaimTokenRequest {
  inTimeOut: boolean = false
  alreadyClaimed: string[] = []
  userData: any
  gameController: GameController
  campaign: ClaimTokenRequestArgs
  campaign_key: string
  claimServer: string
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.campaign = configEmote
    this.campaign_key = configEmote.campaign_key
    this.claimServer = configEmote.claimServer
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
      //   this.gameController.ui.errorUI(
      //     json.error ? this.gameController.ui.breakLines(json.error, 20) : 'Invalid response'
      //   )
      return false
    }

    this.alreadyClaimed.push(campaign_key)
  }

  createCaptchaUI(image: string, id: string, campaing: string, campaingKey: string): void {}
}
