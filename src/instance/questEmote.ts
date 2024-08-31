import {
  Animator,
  AvatarEmoteCommand,
  BackgroundTextureMode,
  EasingFunction,
  engine,
  Entity,
  GltfContainer,
  InputAction,
  inputSystem,
  PointerEvents,
  PointerEventType,
  PointerLock,
  Rotate,
  Transform,
  Tween,
  TweenSequence,
  tweenSystem
} from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import * as npc from 'dcl-npc-toolkit'
import { GameController } from '../controllers/gameController'
import { openDialogWindow } from 'dcl-npc-toolkit'
import { ArrowTargeter, FloorCircleTargeter } from '../imports/components/targeter'
import { NPC } from '../npc.class'
import * as utils from '@dcl-sdk/utils'
import { movePlayerTo } from '~system/RestrictedActions'
import { addInPlace } from '../utils/addInPlace'
import { BubbleTalk, sideBubbleTalk } from '../imports/bubble'
import { FollowPathData } from 'dcl-npc-toolkit/dist/types'
import { pathArray2, point2, point3 } from '../jsonData/npc_dialogs'
import { IndicatorState, QuestIndicator } from '../imports/components/questIndicator'
import { AudioManager } from '../imports/components/audio/audio.manager'
import { activateSoundPillar1 } from '../imports/components/audio/sounds'
import { ZONE_1_EMOTE_0, ZONE_1_EMOTE_1 } from '../jsonData/textsTutorialBubble'

export class SecondIsland {
  bezier: NPC
  gameController: GameController
  targeterCircle: FloorCircleTargeter
  questIndicator: QuestIndicator
  bubbleTalk: sideBubbleTalk
  emoteMoves: number = 0
  lastState: boolean = false
  tick1: Entity
  // tick2: Entity
  // tick3: Entity
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.tick1 = engine.addEntity()
    engine.removeEntity(this.tick1)
    // this.tick2 = this.gameController.mainInstance.s0_tick_2_01
    // this.tick3 = this.gameController.mainInstance.s0_tick_3_01
    this.bezier = new NPC(
      Vector3.create(160.0233, 65.64076, 104.139),
      Vector3.create(1, 1, 1),
      Quaternion.create(0, 0.3281288, 0, 0.944633),
      'assets/scene/models/unity_assets/s0_NPC_FoxAnim_Art_01.glb',
      14,
      () => {
        console.log('npc activated')
        Animator.getClip(this.bezier.entity, 'Idle').playing = true
      },
      () => {
        PointerEvents.deleteFrom(this.bezier.npcChild)
        this.startInteract()
      }
    )
    Animator.createOrReplace(this.bezier.entity, {
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
        },
        {
          clip: 'Dance',
          playing: false
        }
      ]
    })
    this.bezier.activateBillBoard(true)
    this.bubbleTalk = new sideBubbleTalk(this.bezier.npcChild)
    this.bubbleTalk.closeBubbleInTime()
    this.targeterCircle = new FloorCircleTargeter(
      Vector3.create(0, 0, 0),
      Vector3.create(0, 0, 0),
      Quaternion.create(0, 0, 0),
      this.bezier.entity
    )
    this.questIndicator = new QuestIndicator(this.bezier.entity)
    this.questIndicator.hide()
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

    this.activeCables(false)
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
  startInteract() {
    // AudioManager.instance().playOnce('tobor_talk', { volume: 0.6, parent: this.bezier.entity })
    openDialogWindow(this.bezier.entity, this.gameController.dialogs.bezierDialog, 0)
    Animator.stopAllAnimations(this.bezier.entity)
    Animator.getClip(this.bezier.entity, 'Talk').playing = true
    this.targeterCircle.showCircle(false)
    this.questIndicator.hide()
  }
  startEmoteQuest() {
    this.gameController.uiController.emoteUI.spaceContainerVisible = true
    this.emoteQuest()
  }
  emoteQuest() {
    console.log('emoteQuest')
    engine.addSystem(() => {
      let emoteDetected = false

      for (const [entity] of engine.getEntitiesWith(AvatarEmoteCommand)) {
        emoteDetected = true
        break
      }

      if (emoteDetected && !this.lastState) {
        this.emoteMoves += 1
        console.log('PLAYER played an emote')
        this.checkEmoteMoves()
      }

      this.lastState = emoteDetected
    })
  }

  checkEmoteMoves() {
    if (this.emoteMoves === 1) {
      console.log('First emote detected')
      this.bubbleTalk.openBubble(ZONE_1_EMOTE_1, false)
      this.addTicks(1)
    } else if (this.emoteMoves === 2) {
      console.log('Second emote detected')
    } else if (this.emoteMoves === 3) {
      console.log('Third emote detected')

      this.emoteMoves = 0
    }
  }
  addTicks(number: number) {
    if (number === 1) {
      this.tick1 = engine.addEntity()
      GltfContainer.create(this.tick1, { src: 'assets/scene/models/unity_assets/s0_tick_1_01.glb' })
      Transform.create(this.tick1, {
        position: Vector3.create(157.366, 66.76084, 104.8572),
        rotation: Quaternion.create(5.825006e-17, -0.0475723, 5.825006e-17, -0.9988678),
        scale: Vector3.create(2.017242, 0.1470411, 0.06610861)
      })
      Transform.getMutable(this.tick1).parent = this.gameController.mainInstance.s0_Z3_Str_Dancing_Station_Art_01
    } else if ((number = 2)) {
    } else {
    }
  }
  completeEmoteQuest() {}

  onCloseRewardUI() {}

  activateBridge() {}

  followPath(): void {}
}
