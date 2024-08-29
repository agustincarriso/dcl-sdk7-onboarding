import { followPath, type Dialog } from 'dcl-npc-toolkit'
import { FollowPathData, ImageData } from 'dcl-npc-toolkit/dist/types'
import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { Animator, EasingFunction, Transform, Tween } from '@dcl/sdk/ecs'
import { GameController } from '../controllers/gameController'
import { CLICKME, HELP_BEIZER, JUMP } from './textsTutorialBubble'

const talkingTrebor: ImageData = {
  path: 'assets/ui/portraits/UI_NPC_Character_Robot_Talking.png'
}
const happyTrebor: ImageData = {
  path: 'assets/ui/portraits/UI_NPC_Character_Robot_Happy.png'
}
const IdleTrebor: ImageData = {
  path: 'assets/ui/portraits/UI_NPC_Character_Robot_Idle.png'
}
export const point1 = Vector3.create(215.989, 69.987, 131.326)
export const point2 = Vector3.create(208.9, 66.2, 131.11)
export const point3 = Vector3.create(201.87, 64.04, 126.35)

export const pathArray1 = [point1, point2]
export const pathArray2 = [point2, point3]

export class Dialogs {
  public toborDialog: Dialog[]
  public bezierDialog: Dialog[]
  public matDialog: Dialog[]
  public toborBubbles: Dialog[]
  public pathData1: FollowPathData
  gameController: GameController
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.pathData1 = {
      totalDuration: 3,
      path: pathArray1,
      onFinishCallback: () => {
        console.log('Ruta completada')
        this.gameController.spawnIsland.tobor.activateBillBoard(true)
        this.gameController.spawnIsland.bubbleTalk.openBubble(JUMP, true)
      }
    }
    this.toborDialog = [
      {
        text: 'Welcome to Decentraland! The metaverse <b>owned and created</b> by people like you. My name is Tobor.',
        fontSize: 18,
        portrait: IdleTrebor
      },
      {
        text: 'Decentraland is a place to <b>socialise with friends, play games,</b> and <b>so much more!</b>',
        portrait: IdleTrebor
      },
      {
        text: 'Follow me to get started.  It should only take 5 minutes of your time.',
        portrait: talkingTrebor,
        isEndOfDialog: true,
        triggeredByNext: () => {
          followPath(this.gameController.spawnIsland.tobor.entity, this.pathData1), console.log('path on going')
          Tween.createOrReplace(this.gameController.spawnIsland.tobor.entity, {
            mode: Tween.Mode.Rotate({
              start: Quaternion.create(0, 0.5733939, 0, -0.8192798),
              end: Quaternion.fromEulerDegrees(0, -240, 0)
            }),
            duration: 3000,
            easingFunction: EasingFunction.EF_LINEAR
          })
          // Transform.getMutable(this.gameController.spawnIsland.tobor.entity).rotation = Quaternion.fromEulerDegrees(
          //   0,
          //   -240,
          //   0
          // )
          //Animator.stopAllAnimations(this.gameController.spawnIsland.tobor.entity)
          // Animator.getClip(this.gameController.spawnIsland.tobor.entity, 'Walk_Loop').playing = true
          // Animator.getClip(this.gameController.spawnIsland.tobor.entity, 'Walk_Loop').loop = true
          this.gameController.spawnIsland.tobor.activateBillBoard(false)
          this.gameController.spawnIsland.jumpquest()
        }
      },
      {
        text: 'For your first day in the metaverse we have <b>a few quick tasks</b> for you to do so you can get the hang of what Decentraland is all about.',
        portrait: talkingTrebor
      },
      {
        text: '<b>Head over the bridge</b> to meet my friends. They will teach you everything you need to know.',
        portrait: talkingTrebor
      },
      {
        text: 'You might meet other newbies here too! Press <b>enter</b> to chat with them.',
        portrait: happyTrebor,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.spawnIsland.bubbleTalk.openBubble(HELP_BEIZER, false)
        }
      }
    ]
    this.toborBubbles = [
      {
        text: CLICKME
      }
    ]
    this.bezierDialog = [
      {
        text: "I'm Bezier, I love making friends in Decentraland."
      },
      {
        text: 'It’s easy to make friends at Decentraland’s <b>events and parties.</b>'
      },
      {
        text: 'Let me teach you how to express yourself so you can party in Decentraland.'
      },
      {
        text: 'Well done! You really know how to party.',
        isEndOfDialog: true
      },
      {
        text: 'Your next task is to talk to my friend Mat. He’s across the bridge on the next island.'
      },
      {
        text: 'But first, let me give you this NFT emote!'
      },
      {
        text: 'You can find Mat on the next island.'
      }
    ]
    this.matDialog = [
      {
        text: "Hey, I'm Mat. I have a business in the metaverse selling NFT wearables."
      },
      {
        text: 'There are thousands of community created wearables for sale in Decentraland.'
      },
      {
        text: 'I’m running low on materials and meshes. If you find them for me I can make it worth your while.'
      },
      {
        text: 'There are some boxes around here, bring them to me and maybe I can make something for you.'
      },
      {
        text: 'Just one more! We need both, materials and meshes, to craft wearables.'
      },
      {
        text: 'Come back here! That’s everything I need.'
      },
      {
        text: 'Thanks for collecting the materials and meshes, now I can make more wearables.'
      },
      {
        text: 'Your next task is to talk to Kit, find him on the last island.'
      }
    ]
  }
}
