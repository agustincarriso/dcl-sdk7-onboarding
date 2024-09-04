import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { ClaimTokenRequest } from '../claim/claim'
import { configVest } from '../claim/config'
import { GameController } from '../controllers/gameController'
import { NPC } from '../npc.class'
import {
  Animator,
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
import { FloorCircleTargeter } from '../imports/components/targeter'
import { sideBubbleTalk } from '../imports/bubble'
import { ZONE_3_COLLECT_0 } from '../jsonData/textsTutorialBubble'
import { closeDialog } from 'dcl-npc-toolkit/dist/dialog'
export class QuestMaterials {
  gameController: GameController
  mat: NPC
  targeterCircle: FloorCircleTargeter
  questIndicator: QuestIndicator
  bubbleTalk: sideBubbleTalk
  quest3Started: boolean = false
  materialsCollected: number = 0
  //private claim: ClaimTokenRequest
  constructor(gameController: GameController) {
    this.gameController = gameController

    // this.claim = new ClaimTokenRequest(this.gameController, configVest, configVest.campaign_key, configVest.claimServer)
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
    this.questIndicator = new QuestIndicator(this.mat.entity)
    this.bubbleTalk = new sideBubbleTalk(this.mat.npcChild)
    this.bubbleTalk.closeBubbleInTime()
    this.targeterCircle = new FloorCircleTargeter(
      Vector3.create(0, 0, 0),
      Vector3.create(0, 0, 0),
      Quaternion.create(0, 0, 0),
      this.mat.entity
    )
    this.setUpTriggerHi()
  }
  loadTagData() {}
  startQuest() {
    this.setQuestStartDialog()
  }
  setUpClaim() {}
  spawnBlockToNextIsalnd() {}
  deleteBlocker() {}
  setBubbleNpc() {}
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
          button: InputAction.IA_POINTER,
          hoverText: 'Click'
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
        }, 5500)
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
          button: InputAction.IA_POINTER,
          hoverText: 'Click'
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
        }, 5500)
      }
    )
  }
  pickPiece() {
    this.materialsCollected++
    if (this.materialsCollected == 2) {
      this.pickedAllPieces()
      this.bubbleTalk.closeBubbleInTime()
    } else {
      openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 4)
      utils.timers.setTimeout(() => {
        closeDialog(this.mat.entity)
      }, 2000)
    }
  }
  pickedAllPieces() {
    openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 5)
    this.questIndicator.updateStatus(IndicatorState.INTERROGATION)
    this.deliverAllPiecesClick()
  }
  removeParticleEntity() {}
  spawnparticles(bActive: boolean) {
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
    // add onpointerDown on click trigger
    console.log('give all p')
  }
  talkNpcCompleteQuest() {}
  resetClaim() {}
  giveReward() {}
  onCloseRewardUI() {}
  activatePilar() {}
  activeCables(bActive: boolean) {}
  afterEndQuestClick() {}
  playerForgotRewardDialog() {}
  dialogEndQuest() {}
}
