import {
  Animator,
  engine,
  Entity,
  InputAction,
  inputSystem,
  MeshCollider,
  PointerEvents,
  PointerEventType,
  Rotate,
  Transform
} from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import * as npc from 'dcl-npc-toolkit'
import { GameController } from '../controllers/gameController'
import { openDialogWindow } from 'dcl-npc-toolkit'
import { createDialogBubble, next, openBubble } from 'dcl-npc-toolkit/dist/bubble'
import { FloorCircleTargeter } from '../imports/components/targeter'
import { NPC } from '../npc.class'

export class SpawnIsland {
  s0_NPC_Robot_Art_1__01: NPC
  gameController: GameController
  targeterCircle: FloorCircleTargeter
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.s0_NPC_Robot_Art_1__01 = new NPC(
    Vector3.create(218.95, 68.67, 127.08),
    Vector3.create(1.1, 1.1, 1.1),
    Quaternion.create(0, 0.5733939, 0, -0.8192798),
    'assets/scene/models/unity_assets/s0_NPC_Robot_Art_1__01.glb',
    14,
    ()=>{
      console.log('npc activated')
      Animator.getClip(this.s0_NPC_Robot_Art_1__01.entity, 'Robot_Idle').playing = true
      createDialogBubble(this.s0_NPC_Robot_Art_1__01.entity, 2.2)
      openBubble(this.s0_NPC_Robot_Art_1__01.entity, this.gameController.dialogs.toborBubbles, 0)
    },
    ()=>{
      openDialogWindow(this.s0_NPC_Robot_Art_1__01.entity, this.gameController.dialogs.toborDialog, 0)
      Animator.stopAllAnimations(this.s0_NPC_Robot_Art_1__01.entity)
      Animator.getClip(this.s0_NPC_Robot_Art_1__01.entity, 'Talk').playing = true
      npc.closeBubble(this.s0_NPC_Robot_Art_1__01.entity)
      this.targeterCircle.showCircle(false)
    }
    )
    Animator.createOrReplace(this.s0_NPC_Robot_Art_1__01.entity, {
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
    this.s0_NPC_Robot_Art_1__01.activateBillBoard(true)
    this.targeterCircle = new FloorCircleTargeter(
      Vector3.create(0, 0, 0),
      Vector3.create(0, 0, 0),
      Quaternion.create(0, 0, 0),
      this.s0_NPC_Robot_Art_1__01.entity
    )
    this.targeterCircle.showCircle(true)
    this.targeterCircle.setCircleScale(0.4)
  }
}
