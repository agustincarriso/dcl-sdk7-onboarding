import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { GameController } from '../controllers/gameController'
import { Animator, Entity, InputAction, MeshRenderer, Transform, engine, pointerEventsSystem } from '@dcl/sdk/ecs'
import { BubbleDynamic, BubbleTalk } from '../imports/bubble'
import { openDialogWindow } from 'dcl-npc-toolkit'
import { CHOOSE_PORTAL } from '../jsonData/textsTutorialBubble'
import * as utils from '@dcl-sdk/utils'
import { ClaimCapRequest } from '../claim/claimCap'
import { configCap } from '../claim/config'
import { AudioManager } from '../imports/components/audio/audio.manager'
import { getEvents } from '../events/checkApi'
import { activateLoopSoundPortal } from '../imports/components/audio/sounds'
import { PortalEvents } from '../events/eventBoard'
import { delay } from '../imports/components/delay'
import { randomNumbers } from '../utils/globalLibrary'
import { sendTrak } from '../utils/segment'
import { NPC } from '../imports/components/npc.class'

export class QuestPortal {
  tobor: NPC
  bubbleTalk: BubbleTalk
  bubbleDynamic: BubbleDynamic
  gameController: GameController
  walletConected: boolean = false
  hasReward: boolean = false
  claim: ClaimCapRequest
  randomIndex: number[]
  eventpositions: Entity[] = []
  refreshbuttons: Entity[] = []
  titleSpots: Entity[] = []
  portal1: any
  portal2: any
  portal3: any
  portal: Entity = engine.addEntity()
  tobor_portal: Entity = engine.addEntity()
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.claim = new ClaimCapRequest(this.gameController, configCap, configCap.campaign_key, configCap.claimServer)
    this.randomIndex = [0]
    this.tobor = new NPC(
      Vector3.create(117.2279, 80.72495, 113.0214),
      Vector3.create(1.1, 1.1, 1.1),
      Quaternion.create(0, 0.2834864, 0, 0.9589763),
      'assets/scene/models/unity_assets/s0_NPC_Robot_Art_1__01.glb',
      14,
      () => {
        Animator.getClip(this.tobor.entity, 'Robot_Idle').playing = true
      },
      () => {
        pointerEventsSystem.removeOnPointerDown(this.tobor.npcChild)
        this.bubbleTalk.closeBubbleInTime()
        this.startQuestPortal()
      }
    )
    Animator.createOrReplace(this.tobor.entity, {
      states: [
        {
          clip: 'Robot_On',
          playing: false,
          loop: true
        },
        {
          clip: 'Robot_off',
          playing: false,
          loop: false
        },
        {
          clip: 'Walk_End',
          playing: false,
          loop: false
        },
        {
          clip: 'Walk_Loop',
          playing: false,
          loop: false
        },
        {
          clip: 'Walk_Start',
          playing: false,
          loop: false
        },
        {
          clip: 'Robot_Idle',
          playing: true,
          loop: true
        },
        {
          clip: 'Talk',
          playing: false,
          loop: true
        }
      ]
    })
    this.loadTagData()
    this.tobor.activateBillBoard(true)
    this.bubbleTalk = new BubbleTalk(this.tobor.bubbleAttach)
    this.bubbleTalk.closeBubbleInTime()
    this.bubbleDynamic = new BubbleDynamic(this.tobor.entity)
    engine.addSystem(this.bubbleDynamic.respSystem)
    Transform.getMutable(this.tobor.entity).scale = Vector3.create(0, 0, 0)
  }
  initQuestPortal() {
    Transform.getMutable(this.tobor.entity).scale = Vector3.create(1, 1, 1)
  }
  loadTagData() {
    this.portal = this.gameController.mainInstance.s0_Z3_Quest_Portal_Art_01
    this.tobor_portal = this.gameController.mainInstance.s0_En_Portal_tobor_01
    this.eventpositions.push(this.gameController.mainInstance.s0_En_event_portal_01)
    this.eventpositions.push(this.gameController.mainInstance.s0_En_event_portal_place_01)
    this.eventpositions.push(this.gameController.mainInstance.s0_En_event_portal_gen_01)
    this.refreshbuttons.push(this.gameController.mainInstance.s0_En_refresh_buttons_01)
    this.refreshbuttons.push(this.gameController.mainInstance.s0_En_Refresh_Button_01)
    this.titleSpots.push(this.gameController.mainInstance.s0_En_PortalTitle_01)
    this.titleSpots.push(this.gameController.mainInstance.s0_En_PortalTitle_1__01)
    this.titleSpots.push(this.gameController.mainInstance.s0_En_PortalTitle_2__01)
  }
  startQuestPortal() {
    this.robotPortal()
  }

  robotPortal() {
    this.bubbleDynamic.closeBubbleInTime()
    sendTrak('z4_quest4_00', this.gameController.timeStamp)
    engine.removeSystem(this.bubbleDynamic.respSystem)
    AudioManager.instance().playOnce('tobor_talk', { volume: 0.6, parent: this.tobor.entity })
    openDialogWindow(this.tobor.entity, this.gameController.dialogs.toborEndDialog, 0)
  }
  robotToPortalCallBack() {
    Animator.stopAllAnimations(this.gameController.mainInstance.s0_Z3_Quest_Portal_Art_01)
    Animator.playSingleAnimation(this.gameController.mainInstance.s0_Z3_Quest_Portal_Art_01, 'Portal_Activate')
    AudioManager.instance().playMainAmbience(false)
    activateLoopSoundPortal()
    this.displayEvents()
    AudioManager.instance().audio.portal_ambiental.setVolumeSmooth(0, 2000)
  }

  setRewardTrue() {
    this.hasReward = true
    this.onCloseRewardUI()
  }
  setWalletConnection() {
    this.walletConected = this.claim.setUserData()
    console.log('wallet  connected:' + this.walletConected)
    if (this.walletConected === false) {
      this.bubbleTalk.openBubble(CHOOSE_PORTAL, false)
      this.robotToPortalCallBack()
    } else {
      utils.timers.setTimeout(() => {
        this.robotToPortalCallBack()
        openDialogWindow(this.tobor.entity, this.gameController.dialogs.toborEndDialog, 4)
      }, 200)
    }
  }
  giveReward() {
    this.claim.claimToken()
  }
  onCloseRewardUI() {
    this.setupFinalDialog()
  }
  async displayEvents() {
    const event: any = await getEvents('https://events.decentraland.org/api/events/?limit=10')
    const places = await getEvents('https://places.decentraland.org/api/places/?limit=10')
    const genesisPlazas = await getEvents('https://events.decentraland.org/api/events/?limit=0')

    this.randomIndex = randomNumbers(event.length)

    this.randomIndex = randomNumbers(event.length)
    if (event) {
      console.log('events loaded ')
      this.portal1 = new PortalEvents(this.eventpositions[0], event, this.titleSpots[1])
      this.portal1.displayEvent(this.portal1.events, this.randomIndex[0])

      this.portal2 = new PortalEvents(this.eventpositions[2], genesisPlazas, this.titleSpots[0])
      this.portal2.displayEvent(this.portal2.events, 0)

      this.portal3 = new PortalEvents(this.eventpositions[1], places, this.titleSpots[2])
      this.portal3.displayEvent(this.portal3.events, this.randomIndex[2])
    }
    pointerEventsSystem.onPointerDown(
      {
        entity: this.refreshbuttons[0],
        opts: {
          button: InputAction.IA_POINTER,
          hoverText: 'Refresh'
        }
      },
      () => {
        this.randomIndex = randomNumbers(event.length)
        this.portal1.displayEvent(this.portal3.events, this.randomIndex[0])
        AudioManager.instance().playOnce('button_interact', { volume: 0.5, pitch: 1, parent: this.refreshbuttons[1] })
      }
    )
    pointerEventsSystem.onPointerDown(
      {
        entity: this.refreshbuttons[1],
        opts: {
          button: InputAction.IA_POINTER,
          hoverText: 'Refrsesh'
        }
      },
      () => {
        this.randomIndex = randomNumbers(event.length)
        this.portal3.displayEvent(this.portal1.events, this.randomIndex[2])
        AudioManager.instance().playOnce('button_interact', { volume: 0.5, pitch: 1, parent: this.refreshbuttons[0] })
      }
    )

    delay(() => {
      //Show Planeshapes
      this.eventpositions.forEach((e) => {
        MeshRenderer.setPlane(e)
      })
    }, 6000)
  }
  setupFinalDialog() {
    pointerEventsSystem.onPointerDown(
      {
        entity: this.tobor.npcChild,
        opts: {
          button: InputAction.IA_POINTER,
          hoverText: 'Talk'
        }
      },
      () => {
        if (!this.walletConected) {
          this.tellPlayerToGoThroughPortal()
        }
        if (this.walletConected && !this.hasReward) {
          this.remindPlayerOfReward()
        } else if (this.walletConected && this.hasReward) {
          this.tellPlayerToGoThroughPortal()
        }
      }
    )
  }
  remindPlayerOfReward() {
    this.bubbleTalk.closeBubbleInTime()
    Animator.playSingleAnimation(this.tobor.entity, 'Talk')
    openDialogWindow(this.tobor.entity, this.gameController.dialogs.toborEndDialog, 4)
  }
  tellPlayerToGoThroughPortal() {
    this.bubbleTalk.closeBubbleInTime()
    Animator.playSingleAnimation(this.tobor.entity, 'Talk')
    openDialogWindow(this.tobor.entity, this.gameController.dialogs.toborEndDialog, 3)
  }
}
