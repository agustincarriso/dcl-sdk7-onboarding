import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { GameController } from '../controllers/gameController'
import { Animator, engine, pointerEventsSystem } from '@dcl/sdk/ecs'
import { BubbleDynamic, BubbleTalk } from '../imports/bubble'
import { NPC } from '../npc.class'
import { openDialogWindow } from 'dcl-npc-toolkit'

export class QuestPortal {
  tobor: NPC
  bubbleTalk: BubbleTalk
  bubbleDynamic: BubbleDynamic
 gameController: GameController
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.tobor = new NPC(
      Vector3.create(117.2279, 80.72495, 113.0214),
      Vector3.create(1.1, 1.1, 1.1),
      Quaternion.create(0, 0.2834864, 0, 0.9589763),
      'assets/scene/models/unity_assets/s0_NPC_Robot_Art_1__01.glb',
      14,
      () => {
        console.log('npc activated')
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
    this.tobor.activateBillBoard(true)
    this.bubbleTalk = new BubbleTalk(this.tobor.npcChild)

    this.bubbleTalk.closeBubbleInTime()
    this.bubbleDynamic = new BubbleDynamic(this.tobor.entity)
    engine.addSystem(this.bubbleDynamic.respSystem)
  }
  loadTagData() {}
  startQuestPortal() {
    this.robotPortal()
    this.setUpClaim()
  }
  setUpClaim() {}
  robotToPortal() {}
  robotPortal() {
    this.bubbleDynamic.closeBubbleInTime()
    openDialogWindow(this.tobor.entity, this.gameController.dialogs.toborDialog, 0)
  }
  givereward() {}
  onCloseRewardUI() {}
  async displayEvents() {}
  setupFinalDialog() {}
  remindPlayerOfReward() {}
  tellPlayerToGoThroughPortal() {}
}
