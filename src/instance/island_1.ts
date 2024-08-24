import { Animator, engine, Entity, MeshCollider, Transform } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import * as npc from 'dcl-npc-toolkit'
import { GameController } from '../controllers/gameController'
import { openDialogWindow } from 'dcl-npc-toolkit'

export class Island_1 {
  s0_NPC_Robot_Art_1__01: Entity = engine.addEntity()
  gameController: GameController
  npcChild: Entity = engine.addEntity()
  constructor(gameController: GameController) {
    this.gameController = gameController
    Animator.createOrReplace(this.s0_NPC_Robot_Art_1__01, {
      states: [
        {
          clip: 'Robot_On',
          playing: false,
          loop: false
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
          loop: false
        }
      ]
    })

    this.s0_NPC_Robot_Art_1__01 = npc.create(
      {
        position: Vector3.create(218.95, 68.67, 127.08),
        rotation: Quaternion.create(0, 0.5733939, 0, -0.8192798),
        scale: Vector3.create(1, 1, 1)
      },
      {
        type: npc.NPCType.CUSTOM,
        model: 'assets/scene/models/unity_assets/s0_NPC_Robot_Art_1__01.glb',
        onActivate: () => {
          console.log('npc activated')
          openDialogWindow(this.s0_NPC_Robot_Art_1__01, this.gameController.dialogs.toborDialog, 0)
          Animator.playSingleAnimation(this.s0_NPC_Robot_Art_1__01, 'Talk')
        },
        onWalkAway: () => {
          console.log('walked away')
        },
        hoverText: 'Talk',
        idleAnim: 'Robot_Idle',
        faceUser: true,
        portrait: 'assets/ui/portraits/UI_NPC_Character_Robot_Idle.png',
        reactDistance: 14,
        onlyClickTrigger: true
      }
    )
    MeshCollider.setBox(this.s0_NPC_Robot_Art_1__01)
  }
}
