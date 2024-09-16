import { Animator, engine, GltfContainer, InputAction, pointerEventsSystem, TextShape, Transform } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import { GameController } from '../controllers/gameController'
import { FloorCircleTargeter } from '../imports/components/targeter'
import { IndicatorState, QuestIndicator } from '../imports/components/questIndicator'
import { sideBubbleTalk } from '../imports/bubble'
import { GO_TO_PORTAL, ZONE_2_PUZZLE_0 } from '../jsonData/textsTutorialBubble'
import * as utils from '@dcl-sdk/utils'
import { AudioManager } from '../imports/components/audio/audio.manager'
import { openDialogWindow } from 'dcl-npc-toolkit'
import { activatePillarSound4, changeGeneratosSound } from '../imports/components/audio/sounds'
import { TaskType } from '../uis/widgetTask'
import { sendTrak } from '../utils/segment'
import { ConnectMiniGame } from '../imports/components/connectMG'
import { NPC } from '../imports/components/npc.class'

export class QuestPuzzle {
  gameController: GameController
  kit: NPC
  targeterCircle: FloorCircleTargeter
  questIndicator: QuestIndicator
  connect_game: ConnectMiniGame
  bubbleTalk: sideBubbleTalk
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.kit = new NPC(
      Vector3.create(0, -1.07, 0),
      Vector3.create(2.213551, 1.280694, 2.213551),
      Quaternion.create(0, 0.7446296, 0, -0.6674779),
      'assets/scene/models/unity_assets/s0_NPC_Raccoon02_Art_01.glb',
      14,
      () => {},
      () => {
        pointerEventsSystem.removeOnPointerDown(this.kit.npcChild)
        this.startQuestPuzzle()
      }
    )
    Transform.getMutable(this.kit.entity).parent = this.gameController.mainInstance.s0_En_Npc3_01
    Animator.createOrReplace(this.kit.entity, {
      states: [
        {
          clip: 'Idle',
          loop: true
        },
        {
          clip: 'Talk',
          loop: true
        },
        {
          clip: 'Hi'
        },
        {
          clip: 'Celebrate'
        },
        {
          clip: 'Bye'
        },
        {
          clip: 'Dance'
        }
      ]
    })
    this.kit.activateBillBoard(true)
    this.kit.setChildScaleYAxis(3.1)
    this.targeterCircle = new FloorCircleTargeter(
      Vector3.create(0, 0.1, 0),
      Vector3.create(0, 0, 0),
      Quaternion.create(0, 0, 0),
      this.kit.entity
    )
    this.targeterCircle.showCircle(true)
    this.targeterCircle.setCircleScale(0.4)
    this.questIndicator = new QuestIndicator(this.kit.entity)
    Transform.getMutable(this.questIndicator.icon).position = Vector3.create(0, 2.1, 0)
    this.connect_game = new ConnectMiniGame(this.gameController)
    this.bubbleTalk = new sideBubbleTalk(this.kit.bubbleAttach)
    this.bubbleTalk.closeBubbleInTime()
    this.setUpTriggerHi()
    this.loadTagData()
  }
  loadTagData() {
    this.activeCables(false)
  }
  public startQuestPuzzle() {
    this.setBubbleNpc2()
    this.setUpInitQuest()
  }
  private setBubbleNpc2() {
    TextShape.getMutable(this.bubbleTalk.titleEntity).text = '<b>Kit</b>'
    Transform.getMutable(this.bubbleTalk.textEntity).position = Vector3.create(1.6, 0.5, -0.04)
  }
  private setUpTriggerHi() {
    let triggerHi = engine.addEntity()
    Transform.create(triggerHi, {
      position: Transform.get(this.gameController.mainInstance.s0_En_Npc3_01).position
    })
    utils.triggers.addTrigger(
      triggerHi,
      1,
      1,
      [{ type: 'box', scale: Vector3.create(15, 5, 15) }],
      () => {
        AudioManager.instance().playOnce('npc_3_salute', {
          volume: 1,
          pitch: 1,
          parent: this.gameController.mainInstance.s0_En_Npc3_01
        })
        Animator.stopAllAnimations(this.kit.entity)
        Animator.playSingleAnimation(this.kit.entity, 'Hi')
        utils.timers.setTimeout(() => {
          Animator.getClip(this.kit.entity, 'Hi').playing = false
          Animator.playSingleAnimation(this.kit.entity, 'Idle')
        }, 4400)
        engine.removeEntity(triggerHi)
      },
      () => {
        Animator.playSingleAnimation(this.kit.entity, 'Idle')
      }
    )
  }
  private setUpInitQuest() {
    sendTrak('z3_quest3_00', this.gameController.timeStamp)
    this.gameController.uiController.widgetTasks.showTick(true, 0)
    utils.timers.setTimeout(() => {
      this.gameController.uiController.widgetTasks.showTick(false, 0)
      this.gameController.uiController.widgetTasks.setText(9, 0)
      this.gameController.uiController.widgetTasks.showTasks(true, TaskType.Simple)
    }, 1500)
    this.questIndicator.hide()
    this.targeterCircle.showCircle(false)
    openDialogWindow(this.kit.entity, this.gameController.dialogs.kitDialog, 0)
    Animator.getClip(this.kit.entity, 'Talk').playing = true
  }
  accetpQuest() {
    Animator.getClip(this.kit.entity, 'Talk').playing = false
    Animator.getClip(this.kit.entity, 'Idle').playing = true
    this.connect_game.activatePieces()
    this.bubbleTalk.openBubble(ZONE_2_PUZZLE_0, true)
    this.puzzleQuest()
  }
  cameraModeAngleCheck() {
    // engine.addSystem( this.gameController.uiController.popUpControls.checkCameraMode)
    this.gameController.uiController.popUpControls.showPuzzlesUis()
    // this.gameController.uiController.popUpControls.checkCameraMode()
  }
  puzzleQuest() {
    if (this.connect_game.bStarted) return
    this.connect_game.startGame()
    sendTrak('z3_quest3_01', this.gameController.timeStamp)
    this.connect_game.completeEvent2PuzzleCallback = () => {
      this.gameController.uiController.popUpControls.puzzleConnectCablesVisible = false
      this.gameController.uiController.popUpControls.endPuzzle = true
      console.log('complete game')
      changeGeneratosSound()
      this.bubbleTalk.closeBubbleInTime()
      utils.timers.setTimeout(() => {
        openDialogWindow(this.kit.entity, this.gameController.dialogs.kitDialog, 4)
        this.taskTalkSwap()
        this.clicOnNPC2PuzzleCompleted()
        this.questIndicator.updateStatus(IndicatorState.INTERROGATION)
      }, 1000)
    }
  }
  private taskTalkSwap() {
    this.gameController.uiController.widgetTasks.showTick(true, 0)
    utils.timers.setTimeout(() => {
      this.gameController.uiController.widgetTasks.showTick(false, 0)
      this.gameController.uiController.widgetTasks.setText(10, 0)
      this.gameController.uiController.widgetTasks.showTasks(true, TaskType.Simple)
    }, 1500)
  }
  private clicOnNPC2PuzzleCompleted() {
    sendTrak('z3_quest3_02', this.gameController.timeStamp)
    pointerEventsSystem.onPointerDown(
      {
        entity: this.kit.npcChild,
        opts: {
          button: InputAction.IA_POINTER,
          hoverText: 'Talk'
        }
      },
      () => {
        this.gameController.uiController.widgetTasks.showTick(true, 0)
        this.gameController.uiController.widgetTasks.showTick(true, 3)
        utils.timers.setTimeout(() => {
          this.gameController.uiController.widgetTasks.showTick(false, 0)
          this.gameController.uiController.widgetTasks.setText(11, 0)
          this.gameController.uiController.widgetTasks.showTasks(false, TaskType.Multiple)
          this.gameController.uiController.widgetTasks.showTasks(true, TaskType.Simple)
        }, 2000)
        pointerEventsSystem.removeOnPointerDown(this.kit.npcChild)
        this.spawnparticles()
        this.questIndicator.hide()
        Animator.stopAllAnimations(this.kit.entity)
        Animator.playSingleAnimation(this.kit.entity, 'Celebrate')
        utils.timers.setTimeout(() => {
          Animator.getClip(this.kit.entity, 'Celebrate').playing = false
          Animator.getClip(this.kit.entity, 'Idle').playing = true
        }, 2200)
        Animator.getClip(this.kit.entity, 'Idle').playing = false
        Animator.getClip(this.kit.entity, 'Talk').playing = true
        openDialogWindow(this.kit.entity, this.gameController.dialogs.kitDialog, 5)
      }
    )
  }

  private spawnparticles() {
    const particle = engine.addEntity()
    GltfContainer.create(particle, { src: 'assets/scene/models/glb_assets/CheckParticles_Art.glb' })
    const positionY = Transform.getMutable(this.kit.entity).position.y + 2.5
    Transform.create(particle, {
      position: Vector3.create(
        Transform.getMutable(this.kit.entity).position.x,
        positionY,
        Transform.getMutable(this.kit.entity).position.z
      ),
      scale: Vector3.create(2.5, 2.5, 2.5)
    })
    utils.timers.setTimeout(() => {
      engine.removeEntity(particle)
    }, 1000)
  }
  dialogQuestFinished() {
    this.bubbleTalk.openBubble(GO_TO_PORTAL, true)
    Animator.getClip(this.kit.entity, 'Talk').playing = false
    Animator.getClip(this.kit.entity, 'Idle').playing = true
    this.activatePilar()
    this.gameController.questPortal.initQuestPortal()
  }
  activatePilar() {
    AudioManager.instance().playTowerCharge(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_2__01)
    Animator.getClip(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_2__01, 'Pillar_Anim').speed = 3
    Animator.getClip(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_2__01, 'Pillar_Anim').shouldReset = false
    Animator.getClip(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_2__01, 'Pillar_Anim').loop = false
    Animator.playSingleAnimation(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_2__01, 'Pillar_Anim')
    utils.timers.setTimeout(() => {
      AudioManager.instance().playTowerActivated(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_2__01)
      activatePillarSound4(this.gameController.mainInstance.s0_Z3_Quest_Pillar_Art_2__01)
      this.activeCables(true)
    }, 3000)
  }
  private activeCables(bActive: boolean) {
    if (bActive === true) {
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_04_ON_01).src =
        'assets/scene/models/unity_assets/s0_Cable_04_ON_01.glb'
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_04_OFF_01).src = ''
    } else if (bActive === false) {
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_04_ON_01).src = ''
      GltfContainer.getMutable(this.gameController.mainInstance.s0_Cable_04_OFF_01).src =
        'assets/scene/models/unity_assets/s0_Cable_04_OFF_01.glb'
    }
  }
}
