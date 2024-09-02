import { Animator, AvatarEmoteCommand, Entity, GltfContainer, PBAvatarEmoteCommand, PointerEvents, Transform, engine } from '@dcl/sdk/ecs'
import { GameController } from '../controllers/gameController'
import { NPC } from '../npc.class'
import { openDialogWindow } from 'dcl-npc-toolkit'
import { AudioManager } from '../imports/components/audio/audio.manager'
import { QuestIndicator } from '../imports/components/questIndicator'
import { FloorCircleTargeter } from '../imports/components/targeter'
import { ZONE_1_EMOTE_1, ZONE_1_EMOTE_2, ZONE_1_EMOTE_3 } from '../jsonData/textsTutorialBubble'
import { Quaternion, Vector3 } from '@dcl/sdk/math'
import * as utils from '@dcl-sdk/utils'
import { sideBubbleTalk } from '../imports/bubble'

export class QuestEmote {
  gameController: GameController
  bezier: NPC
  targeterCircle: FloorCircleTargeter
  questIndicator: QuestIndicator
  bubbleTalk: sideBubbleTalk
  emoteMoves: number = 0
  currentEmote: string
  lastState: boolean = false
  tick1: Entity
  tick2: Entity
  tick3: Entity
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.tick1 = engine.addEntity()
    this.tick2 = engine.addEntity()
    this.tick3 = engine.addEntity()
    this.bezier = new NPC(
      Vector3.create(0, -1.12, 0),
      Vector3.create(1.76666, 0.915751, 1.756506),
      Quaternion.create(0, 1, 0, -4.371139E-08),
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
    Transform.getMutable(this.bezier.entity).parent = this.gameController.mainInstance.s0_En_Npc1_01
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
    this.currentEmote = ''
    this.bezier.activateBillBoard(true)
    this.bubbleTalk = new sideBubbleTalk(this.bezier.npcChild)
    this.bubbleTalk.closeBubbleInTime()
    this.targeterCircle = new FloorCircleTargeter(
      Vector3.create(0, 0.1, 0),
      Vector3.create(0, 0, 0),
      Quaternion.create(0, 0, 0),
      this.bezier.entity
    )
    this.questIndicator = new QuestIndicator(this.bezier.entity)
    Transform.getMutable(this.questIndicator.icon).position = Vector3.create(0,2.5,0)
    this.targeterCircle.showCircle(true)
    this.targeterCircle.setCircleScale(0.4)
    this.loadTagData()
    this.createEmoteZone()
  }
  loadTagData() {}
  createEmoteZone() {
    const triggerEnt = engine.addEntity()
    Transform.create(triggerEnt, {
      position: Transform.getMutable(this.bezier.entity).position,
      scale: Vector3.create(30, 20, 30)
    })
    utils.triggers.addTrigger(triggerEnt, 1, 1, [{ type: 'box', scale: Vector3.create(15, 5, 15) }], () => {
      AudioManager.instance().playOnce('npc_1_salute', { volume: 0.6, parent: this.bezier.entity })
      console.log('Enter Emote Zone')
    })
  }

  startInteract() {
    AudioManager.instance().playOnce('npc_1_salute', { volume: 0.6, parent: this.bezier.entity })
    openDialogWindow(this.bezier.entity, this.gameController.dialogs.bezierDialog, 0)
    Animator.stopAllAnimations(this.bezier.entity)
    Animator.getClip(this.bezier.entity, 'Talk').playing = true
    this.targeterCircle.showCircle(false)
    this.questIndicator.hide()
  }
  startEmoteQuest() {
    this.gameController.uiController.popUpControls.emoteContainerVisible = true
    this.emoteQuest()
  }
  emoteQuest() {
    console.log('emoteQuest')
    AvatarEmoteCommand.onChange(engine.PlayerEntity, (emote) => {
      if (!emote) return
      if (this.currentEmote === emote.emoteUrn) return
      this.currentEmote = emote?.emoteUrn
      console.log('Emote played: ', emote.emoteUrn)
      this.emoteMoves++
      this.checkEmoteMoves()
    })
  }
  checkEmoteMoves() {
    if (this.emoteMoves === 1) {
      console.log('First emote detected')
      this.bubbleTalk.openBubble(ZONE_1_EMOTE_1, true)
      this.addTicks(1)
      this.spawnParticle()
    } else if (this.emoteMoves === 2) {
      console.log('Second emote detected')
      this.bubbleTalk.closeBubbleInTime()
      this.addTicks(2)
      this.spawnParticle()
      utils.timers.setTimeout(() => {
        this.bubbleTalk.openBubble(ZONE_1_EMOTE_2, true)
      }, 100)
    } else if (this.emoteMoves === 3) {
      console.log('Third emote detected')
      this.bubbleTalk.closeBubbleInTime()
      this.addTicks(3)
      this.spawnParticle()
      utils.timers.setTimeout(() => {
        this.bubbleTalk.openBubble(ZONE_1_EMOTE_3, true)
      }, 100)
      utils.timers.setTimeout(() => {
        this.completeQuestDialog()
      }, 2000)
    }
  }
  addTicks(number: number) {
    if (number === 1) {
      GltfContainer.create(this.tick1, { src: 'assets/scene/models/unity_assets/s0_tick_1_01.glb' })
      Transform.create(this.tick1, {
        position: Vector3.create(157.366, 66.76084, 104.8572),
        rotation: Quaternion.create(5.825006e-17, -0.0475723, 5.825006e-17, -0.9988678),
        scale: Vector3.create(2.017242, 0.1470411, 0.06610861),
        parent: this.gameController.mainInstance.s0_Z3_Str_Dancing_Station_Art_01
      })
    } else if (number === 2) {
      GltfContainer.create(this.tick2, { src: 'assets/scene/models/unity_assets/s0_tick_2_01.glb' })
      Transform.create(this.tick2, {
        position: Vector3.create(157.5212, 66.75648, 105.5075),
        rotation: Quaternion.create(4.757887e-17, -0.2023015, 4.757888e-17, -0.9793233),
        scale: Vector3.create(2.017242, 0.1470411, 0.06610861),
        parent: this.gameController.mainInstance.s0_Z3_Str_Dancing_Station_Art_01
      })
    } else if (number === 3) {
      GltfContainer.create(this.tick3, { src: 'assets/scene/models/unity_assets/s0_tick_3_01.glb' })
      Transform.create(this.tick3, {
        position: Vector3.create(157.8082, 66.75357, 106.1788),
        rotation: Quaternion.create(4.433242e-17, -0.2454148, 4.433243e-17, -0.9694182),
        scale: Vector3.create(2.017242, 0.1470411, 0.06610861),
        parent: this.gameController.mainInstance.s0_Z3_Str_Dancing_Station_Art_01
      })
    }
  }
  completeQuestDialog() {
    this.bubbleTalk.closeBubbleInTime()
    // bezier play celebrate animation
    this.gameController.uiController.popUpControls.emoteContainerVisible = false
    openDialogWindow(this.bezier.entity, this.gameController.dialogs.bezierDialog, 3)
  }
  spawnParticle() {
    const particle = engine.addEntity()
    GltfContainer.create(particle, { src: 'assets/scene/models/glb_assets/CheckParticles_Art.glb' })
    const positionY = Transform.getMutable(this.bezier.entity).position.y + 2.5
    Transform.create(particle, {
      position: Vector3.create(
        Transform.getMutable(this.bezier.entity).position.x,
        positionY,
        Transform.getMutable(this.bezier.entity).position.z
      ),
      scale: Vector3.create(2.5, 2.5, 2.5)
    })
    utils.timers.setTimeout(() => {
      engine.removeEntity(particle)
    }, 1000)
  }
  completeEmoteQuest() {
    this.gameController.uiController.popUpUI.emoteVisible = true
  }

  activateBridge() {}
}
