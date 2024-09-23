import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { ClaimEmoteTokenRequest } from '../claim/claimEmote'
import { configVest } from '../claim/config'
import { GameController } from '../controllers/gameController'
import {
  Animator,
  Entity,
  GltfContainer,
  InputAction,
  MeshCollider,
  MeshRenderer,
  PointerEvents,
  Transform,
  engine,
  pointerEventsSystem
} from '@dcl/sdk/ecs'
import { AudioManager } from '../imports/components/audio/audio.manager'
import * as utils from '@dcl-sdk/utils'
import { closeDialogWindow, openDialogWindow } from 'dcl-npc-toolkit'
import { IndicatorState, QuestIndicator } from '../imports/components/questIndicator'
import { ArrowTargeter, FloorCircleTargeter } from '../imports/components/targeter'
import { sideBubbleTalk } from '../imports/bubble'
import { HELP_KIT, ZONE_3_COLLECT_0 } from '../jsonData/textsTutorialBubble'
import { closeDialog } from 'dcl-npc-toolkit/dist/dialog'
import { ClaimWearableRequest } from '../claim/claimWearable'
import { POPUP_STATE } from '../uis/popupUI'
import { TaskType } from '../uis/widgetTask'
import { sendTrak } from '../utils/segment'
import { NPC } from '../imports/components/npc.class'
export class QuestMaterials {
  gameController: GameController
  mat: NPC
  targeterCircle: FloorCircleTargeter
  questIndicator: QuestIndicator
  bubbleTalk: sideBubbleTalk
  quest3Started: boolean = false
  materialsCollected: number = 0
  walletConected: boolean = false
  claim: ClaimWearableRequest
  firstTimeClosingRewardUI: boolean = true
  hasReward: boolean = false
  blocker: Entity
  arrow1: ArrowTargeter
  arrow2: ArrowTargeter
  pilarActivate: boolean = false
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.blocker = engine.addEntity()
    this.claim = new ClaimWearableRequest(
      this.gameController,
      configVest,
      configVest.campaign_key,
      configVest.claimServer
    )
    this.mat = new NPC(
      Vector3.create(0, -0.91, 0),
      Vector3.create(2.213552, 1.280694, 2.213552),
      Quaternion.create(0, 0.6327581, 0, -0.7743495),
      'assets/scene/models/unity_assets/s0_NPC_Raccoon_Art_01.glb',
      14,
      () => {
        console.log('npc activated')
        Animator.getClip(this.mat.entity, 'Idle').playing = true
      },
      () => {
        pointerEventsSystem.removeOnPointerDown(this.mat.npcChild)
        this.startQuest()
      }
    )

    Transform.getMutable(this.mat.entity).parent = this.gameController.mainInstance.s0_En_Npc2_01
    Animator.createOrReplace(this.mat.entity, {
      states: [
        {
          clip: 'Idle',
          playing: false
        },
        {
          clip: 'Talk',
          playing: false
        },
        {
          clip: 'Hi',
          playing: false
        },
        {
          clip: 'Celebrate',
          playing: false
        },
        {
          clip: 'Bye',
          playing: false
        }
      ]
    })
    this.mat.activateBillBoard(true)
    this.mat.setChildScaleYAxis(3.1)
    this.questIndicator = new QuestIndicator(this.mat.entity)
    this.bubbleTalk = new sideBubbleTalk(this.mat.bubbleAttach)
    this.bubbleTalk.closeBubbleInTime()
    this.targeterCircle = new FloorCircleTargeter(
      Vector3.create(0, 0, 0),
      Vector3.create(0, 0, 0),
      Quaternion.create(0, 0, 0),
      this.mat.entity
    )
    this.targeterCircle.showCircle(true)
    this.targeterCircle.setCircleScale(0.4)
    this.arrow1 = new ArrowTargeter(
      Vector3.create(0, 0, 0),
      Vector3.create(4, 4, 4),
      Quaternion.create(0, 0, 0),
      this.gameController.mainInstance.s0_Z3_Quest_BoxMat_art_3__01
    )
    this.arrow1.showArrow(false)
    this.arrow1.setArrowHeight(2)
    this.arrow2 = new ArrowTargeter(
      Vector3.create(0, 0, 0),
      Vector3.create(4, 4, 4),
      Quaternion.create(0, 0, 0),
      this.gameController.mainInstance.s0_Z3_Quest_BoxTri_art_3__01
    )
    this.arrow2.showArrow(false)
    this.arrow2.setArrowHeight(2)
    this.setUpTriggerHi()
    this.loadTagData()
    this.walletConected = this.claim.setUserData()
  }
  loadTagData() {
    this.spawnBlockToNextIsalnd()
    this.activeCables(false)
  }
  startQuest() {
    this.setQuestStartDialog()
    sendTrak('z2_quest2_00', this.gameController.timeStamp)
  }
  spawnBlockToNextIsalnd() {
    Transform.createOrReplace(this.blocker, {
      position: Vector3.create(149.93, 72.45, 156.78),
      scale: Vector3.create(3, 5, 9)
    })
    MeshCollider.setBox(this.blocker)
    pointerEventsSystem.onPointerDown(
      {
        entity: this.blocker,
        opts: {
          button: InputAction.IA_POINTER,
          hoverText: 'Talk to Mat'
        }
      },
      () => {}
    )
  }
  deleteBlocker() {
    engine.removeEntity(this.blocker)
    engine.removeEntity(this.gameController.mainInstance.s0_Fence_Art_01)
  }
  setUpTriggerHi() {
    let triggerHi = engine.addEntity()
    Transform.create(triggerHi, {
      position: Transform.get(this.gameController.mainInstance.s0_En_Npc2_01).position
    })
    utils.triggers.addTrigger(
      triggerHi,
      1,
      1,
      [{ type: 'box', scale: Vector3.create(15, 5, 15) }],
      () => {
        AudioManager.instance().playOnce('npc_2_salute', {
          volume: 1,
          parent: this.gameController.mainInstance.s0_En_Npc2_01
        })
        Animator.stopAllAnimations(this.mat.entity)
        Animator.playSingleAnimation(this.mat.entity, 'Hi')
        utils.timers.setTimeout(() => {
          Animator.stopAllAnimations(this.mat.entity)
          Animator.playSingleAnimation(this.mat.entity, 'Idle')
        }, 5000)
        engine.removeEntity(triggerHi)
      },
      () => {
        Animator.playSingleAnimation(this.mat.entity, 'Idle')
      }
    )
  }
  setQuestStartDialog() {
    AudioManager.instance().playOnce('npc_2_salute', { volume: 0.6, parent: this.mat.entity })
    this.gameController.uiController.widgetTasks.showTick(true, 0)
    utils.timers.setTimeout(() => {
      this.gameController.uiController.widgetTasks.showTick(false, 0)
      this.gameController.uiController.widgetTasks.setText(6, 0)
      this.gameController.uiController.widgetTasks.showTasks(true, TaskType.Simple)
    }, 1500)
    openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 0)
    Animator.stopAllAnimations(this.mat.entity)
    Animator.getClip(this.mat.entity, 'Talk').playing = true
    this.targeterCircle.showCircle(false)
    this.questIndicator.hide()
  }
  accetpQuest() {
    this.bubbleTalk.openBubble(ZONE_3_COLLECT_0, true)
    Animator.stopAllAnimations(this.mat.entity)
    Animator.getClip(this.mat.entity, 'Idle').playing = true
    this.startQuestCollectMaterials()
    this.arrow1.showArrow(true)
    this.arrow2.showArrow(true)
  }
  startQuestCollectMaterials() {
    if (this.quest3Started == false) {
      this.quest3Started = true
      this.onclickMaterial()
      this.onclickTriangles()
    }
  }
  onclickMaterial() {
    const collider = engine.addEntity()
    Transform.create(collider, {
      scale: Vector3.create(8, 8, 8),
      position: Vector3.create(0, -1, 0),
      parent: this.gameController.mainInstance.s0_Z3_Quest_BoxMat_art_3__01
    })

    MeshCollider.setBox(collider)

    pointerEventsSystem.onPointerDown(
      {
        entity: collider,
        opts: {
          button: InputAction.IA_PRIMARY,
          hoverText: 'Grab'
        }
      },
      () => {
        console.log('clicked entity')
        this.pickPiece()

        AudioManager.instance().playOnce('pickup_box', {
          volume: 0.8,
          parent: this.gameController.mainInstance.s0_Z3_Quest_BoxMat_art_3__01
        })
        Animator.playSingleAnimation(this.gameController.mainInstance.s0_Z3_Quest_BoxMat_art_3__01, 'Box_02_Anim')
        engine.removeEntity(collider)
        utils.timers.setTimeout(() => {
          engine.removeEntity(this.gameController.mainInstance.s0_Z3_Quest_BoxMat_art_3__01)
        }, 3500)
      }
    )
  }
  onclickTriangles() {
    console.log('triangles')

    const collider = engine.addEntity()
    Transform.create(collider, {
      scale: Vector3.create(8, 8, 8),
      position: Vector3.create(0, -1, 0),
      parent: this.gameController.mainInstance.s0_Z3_Quest_BoxTri_art_3__01
    })

    MeshCollider.setBox(collider)

    pointerEventsSystem.onPointerDown(
      {
        entity: collider,
        opts: {
          button: InputAction.IA_PRIMARY,
          hoverText: 'Grab'
        }
      },
      () => {
        console.log('clicked entity')
        this.pickPiece()
        AudioManager.instance().playOnce('pickup_box', {
          volume: 0.8,
          parent: this.gameController.mainInstance.s0_Z3_Quest_BoxTri_art_3__01
        })
        Animator.playSingleAnimation(this.gameController.mainInstance.s0_Z3_Quest_BoxTri_art_3__01, 'Box_01_Anim')
        engine.removeEntity(collider)
        utils.timers.setTimeout(() => {
          engine.removeEntity(this.gameController.mainInstance.s0_Z3_Quest_BoxTri_art_3__01)
        }, 3500)
      }
    )
  }
  pickPiece() {
    this.materialsCollected++
    if (this.materialsCollected == 2) {
      this.pickedAllPieces()
      this.bubbleTalk.closeBubbleInTime()
      sendTrak('z2_quest2_02', this.gameController.timeStamp)
    } else {
      openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 4)
      sendTrak('z2_quest2_01', this.gameController.timeStamp)
      utils.timers.setTimeout(() => {
        closeDialog(this.mat.entity)
      }, 3000)
    }
  }
  pickedAllPieces() {
    this.gameController.uiController.widgetTasks.showTick(true, 0)
    utils.timers.setTimeout(() => {
      this.gameController.uiController.widgetTasks.showTick(false, 0)
      this.gameController.uiController.widgetTasks.setText(7, 0)
      this.gameController.uiController.widgetTasks.showTasks(true, TaskType.Simple)
    }, 1500)
    openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 5)
    utils.timers.setTimeout(() => {
      closeDialog(this.mat.entity)
      this.deliverAllPiecesClick()
    }, 3000)
    this.questIndicator.updateStatus(IndicatorState.INTERROGATION)
  }

  spawnparticles() {
    const particle = engine.addEntity()
    GltfContainer.create(particle, { src: 'assets/scene/models/glb_assets/CheckParticles_Art.glb' })
    const positionY = Transform.getMutable(this.mat.entity).position.y + 2.5
    Transform.create(particle, {
      position: Vector3.create(
        Transform.getMutable(this.mat.entity).position.x,
        positionY,
        Transform.getMutable(this.mat.entity).position.z
      ),
      scale: Vector3.create(2.5, 2.5, 2.5)
    })
    utils.timers.setTimeout(() => {
      engine.removeEntity(particle)
    }, 1000)
  }
  deliverAllPiecesClick() {
    pointerEventsSystem.onPointerDown(
      {
        entity: this.mat.npcChild,
        opts: {
          button: InputAction.IA_POINTER,
          hoverText: 'Talk'
        }
      },
      () => {
        this.questIndicator.hide()
        this.talkNpcCompleteQuest()
        pointerEventsSystem.removeOnPointerDown(this.mat.npcChild)
      }
    )
  }
  talkNpcCompleteQuest() {
    this.gameController.uiController.widgetTasks.showTick(true, 0)
    this.gameController.uiController.widgetTasks.showTick(true, 2)
    utils.timers.setTimeout(() => {
      this.gameController.uiController.widgetTasks.showTick(false, 0)
      this.gameController.uiController.widgetTasks.setText(8, 0)
      this.gameController.uiController.widgetTasks.showTasks(true, TaskType.Simple)
    }, 1500)
    this.spawnparticles()
    Animator.stopAllAnimations(this.mat.entity)
    Animator.playSingleAnimation(this.mat.entity, 'Celebrate')
    sendTrak('z2_quest2_03', this.gameController.timeStamp)
    openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 6)
    utils.timers.setTimeout(() => {
      Animator.stopAllAnimations(this.mat.entity)
      Animator.getClip(this.mat.entity, 'Idle').playing = true
    }, 1500)
  }

  setWalletConnection() {
    console.log('wallet connected:' + this.walletConected)
    if (this.walletConected === false) {
      utils.timers.setTimeout(() => {
        openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 8)
      }, 200)
      this.activatePilar()
    } else {
      utils.timers.setTimeout(() => {
        openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 9)
      }, 200)
    }
  }

  setRewardTrue() {
    this.hasReward = true
    this.afterEndQuestClick()
  }
  showWearableUI() {
    this.gameController.uiController.popUpUI.show(POPUP_STATE.Vest)
  }
  giveReward() {
    this.claim.claimToken()
    if (this.firstTimeClosingRewardUI) {
      this.activatePilar()
      this.firstTimeClosingRewardUI = false
    }
  }
  activatePilar() {
    if (this.pilarActivate === true){
      return
    }
    this.pilarActivate = true
    AudioManager.instance().playTowerCharge(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_1__01)
    Animator.getClip(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_1__01, 'Pillar_Anim').speed = 3
    Animator.getClip(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_1__01, 'Pillar_Anim').shouldReset = false
    Animator.getClip(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_1__01, 'Pillar_Anim').loop = false
    Animator.playSingleAnimation(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_1__01, 'Pillar_Anim')
    this.deleteBlocker()
    utils.timers.setTimeout(() => {
      AudioManager.instance().playTowerActivated(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_1__01)
      this.activeCables(true)
    }, 3000)
  }
  activeCables(bActive: boolean) {
    if (bActive === true) {
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_03_ON_01).src =
        'assets/scene/models/unity_assets/s0_Cable_03_ON_01.glb'
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_03_OFF_01).src = ''
    } else if (bActive === false) {
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_03_ON_01).src = ''
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_03_OFF_01).src =
        'assets/scene/models/unity_assets/s0_Cable_03_OFF_01.glb'
    }
  }
  afterEndQuestClick() {
    console.log('QuestEnd')
    this.bubbleTalk.openBubble(HELP_KIT, true)
    pointerEventsSystem.onPointerDown(
      {
        entity: this.mat.npcChild,
        opts: {
          button: InputAction.IA_POINTER,
          hoverText: 'Talk'
        }
      },
      () => {
        console.log(this.walletConected, ' this   ', this.hasReward)
        if (!this.walletConected) {
          this.dialogEndQuest()
        }
        if (this.walletConected && !this.hasReward) {
          console.log('Case Wallet connected but no collect the reward not reward')
          this.playerForgotRewardDialog()
          this.bubbleTalk.closeBubbleInTime()
        } else if (this.walletConected && this.hasReward) {
          console.log('Case Wallet connected and reward connected  ')
          this.dialogEndQuest()
        }
      }
    )
  }
  playerForgotRewardDialog() {
    pointerEventsSystem.removeOnPointerDown(this.mat.npcChild)
    openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 12)
  }
  dialogEndQuest() {
    this.bubbleTalk.closeBubbleInTime()
    Animator.stopAllAnimations(this.mat.entity)
    Animator.getClip(this.mat.entity, 'Idle').playing = true
    openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 11)
  }
}
