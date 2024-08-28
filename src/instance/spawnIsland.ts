import {
  Animator,
  BackgroundTextureMode,
  engine,
  Entity,
  GltfContainer,
  InputAction,
  inputSystem,
  MeshCollider,
  PBPointerEvents_Info,
  PointerEvents,
  pointerEventsSystem,
  PointerEventType,
  Rotate,
  Transform
} from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import * as npc from 'dcl-npc-toolkit'
import { GameController } from '../controllers/gameController'
import { openDialogWindow } from 'dcl-npc-toolkit'
import { createDialogBubble, next, openBubble } from 'dcl-npc-toolkit/dist/bubble'
import { ArrowTargeter, FloorCircleTargeter } from '../imports/components/targeter'
import { NPC } from '../npc.class'
import * as utils from '@dcl-sdk/utils'
import { movePlayerTo } from '~system/RestrictedActions'
import { addInPlace } from '../utils/addInPlace'

export class SpawnIsland {
  tobor: NPC
  gameController: GameController
  targeterCircle: FloorCircleTargeter
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.tobor = new NPC(
      Vector3.create(218.95, 68.67, 127.08),
      Vector3.create(1.1, 1.1, 1.1),
      Quaternion.create(0, 0.5733939, 0, -0.8192798),
      'assets/scene/models/unity_assets/s0_NPC_Robot_Art_1__01.glb',
      14,
      () => {
        console.log('npc activated')
        Animator.getClip(this.tobor.entity, 'Robot_Idle').playing = true
        createDialogBubble(this.tobor.entity, 2.2)
        openBubble(this.tobor.entity, this.gameController.dialogs.toborBubbles, 0)
      },
      () => {
        PointerEvents.deleteFrom(this.tobor.npcChild)
        this.startInteractQuest()
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
    this.tobor.activateBillBoard(true)
    this.targeterCircle = new FloorCircleTargeter(
      Vector3.create(0, 0, 0),
      Vector3.create(0, 0, 0),
      Quaternion.create(0, 0, 0),
      this.tobor.entity
    )
    this.targeterCircle.showCircle(true)
    this.targeterCircle.setCircleScale(0.4)
    this.loadTagData()
  }
  loadTagData() {
    PointerEvents.createOrReplace(this.gameController.mainInstance.s0_Fence_Art_02, {
      pointerEvents: [
        {
          eventType: PointerEventType.PET_DOWN,
          eventInfo: {
            button: InputAction.IA_POINTER,
            showFeedback: true,
            hoverText: 'Talk to Tobor First'
          }
        }
      ]
    })
    PointerEvents.createOrReplace(this.gameController.mainInstance.s0_Z3_Str_Bridge_Art_01, {
      pointerEvents: [
        {
          eventType: PointerEventType.PET_DOWN,
          eventInfo: {
            button: InputAction.IA_POINTER,
            showFeedback: true,
            hoverText: 'Talk to Tobor Before Crossing'
          }
        }
      ]
    })
    engine.addSystem(() => {
      if (
        inputSystem.isTriggered(
          InputAction.IA_POINTER,
          PointerEventType.PET_DOWN,
          this.gameController.mainInstance.s0_Fence_Art_02
        )
      ) {
      }
      if (
        inputSystem.isTriggered(
          InputAction.IA_POINTER,
          PointerEventType.PET_DOWN,
          this.gameController.mainInstance.s0_Z3_Str_Bridge_Art_01
        )
      ) {
      }
    })
    this.respawnTrigger()
    this.activeCables(false)
  }
  respawnTrigger() {
    const triggerPos = Vector3.create(160, 10, 160)
    const triggerEnt = engine.addEntity()
    Transform.create(triggerEnt, {
      position: triggerPos,
      scale: Vector3.create(300, 20, 300)
    })
    utils.triggers.addTrigger(triggerEnt, 1, 1, [{ type: 'box', scale: Vector3.create(300, 20, 300) }], () => {
      movePlayerTo({
        newRelativePosition: Vector3.create(224.127, 69.7368, 124.0051),
        cameraTarget: Vector3.create(219.13, 70.73, 125.91)
      })
    })
  }
  activeCables(bActive: boolean) {
    if (bActive === true) {
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_01_ON_01).src =
        'assets/scene/models/unity_assets/s0_Cable_01_ON_01.glb'
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_01_OFF_01).src = ''
    } else if (bActive === false) {
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_01_ON_01).src = ''
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_01_OFF_01).src =
        'assets/scene/models/unity_assets/s0_Cable_01_OFF_01.glb'
    }
  }
  startInteractQuest() {
    openDialogWindow(this.tobor.entity, this.gameController.dialogs.toborDialog, 0)
    Animator.stopAllAnimations(this.tobor.entity)
    Animator.getClip(this.tobor.entity, 'Talk').playing = true
    npc.closeBubble(this.tobor.entity)
    this.targeterCircle.showCircle(false)
    this.gameController.uiController.widgetTasksBox.showTick(true)
  }
  startMoveQuest() {}
  jumpquest() {
    this.gameController.uiController.widgetTasksBox.setText(1,0)
    this.gameController.uiController.widgetTasksBox.showTasks(true)
    Transform.getMutable(this.gameController.mainInstance.s0_Fence_Art_02).scale = Vector3.create(0, 0, 0)
    Transform.getMutable(this.gameController.mainInstance.s0_Fence_Art_02).position = Vector3.create(0, 0, 0)
    let obstacletrigger = engine.addEntity()
    let triggerPosition = Transform.get(this.gameController.mainInstance.s0_tree_fall_art_01).position
    Transform.create(obstacletrigger, {
      position: addInPlace(triggerPosition, Vector3.create(-2, 0, 3))
    })
    utils.triggers.addTrigger(obstacletrigger, 1, 1, [{ type: 'box', scale: Vector3.create(3, 9, 10) }], () => {
      engine.removeEntity(obstacletrigger)
      this.completeJumpQuest()
      console.log('jump tree')
    })
  }
  completeJumpQuest() {
    this.gameController.uiController.widgetTasksBox.showTick(true)
  }
}
