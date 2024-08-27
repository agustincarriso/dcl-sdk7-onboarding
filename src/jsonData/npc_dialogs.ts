import { followPath, type Dialog } from 'dcl-npc-toolkit'
import { FollowPathData, ImageData } from 'dcl-npc-toolkit/dist/types'
import { Vector3 } from '@dcl/sdk/math'
import { Animator, Transform } from '@dcl/sdk/ecs'
import { GameController } from '../controllers/gameController'
import { CLICKME } from './textsTutorialBubble'

const talkingTrebor: ImageData = {
  path: 'assets/ui/portraits/UI_NPC_Character_Robot_Talking.png'
}
const happyTrebor: ImageData = {
  path: 'assets/ui/portraits/UI_NPC_Character_Robot_Happy.png'
}
const IdleTrebor: ImageData = {
  path: 'assets/ui/portraits/UI_NPC_Character_Robot_Idle.png'
}
const point1 = Vector3.create(216.93, 70.42, 131.14)
const point2 = Vector3.create(201.84, 64.88, 126.75)

const pathArray = [point1, point2]
let pathData: FollowPathData = {
  totalDuration: 5, 
  path: pathArray,
  onReachedPointCallback: () => { 
    console.log('halfWay')
  },
  onFinishCallback: () => {
    console.log('Ruta completada')
  }
}
export class Dialogs {
  public toborDialog: Dialog[]
  public bezierDialog: Dialog[]
  public matDialog: Dialog[]
  public toborBubbles: Dialog[] 

  gameController: GameController
  constructor(gameController: GameController) {
    this.gameController = gameController
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
          followPath(this.gameController.mainInstance.spawnIsland.s0_NPC_Robot_Art_1__01.entity, pathData),
            console.log('path on going')
          Animator.playSingleAnimation(this.gameController.mainInstance.spawnIsland.s0_NPC_Robot_Art_1__01.entity, 'Walk_Start')
          this.gameController.mainInstance.spawnIsland.s0_NPC_Robot_Art_1__01.activateBillBoard(false)
        }
      },
      {
        text: 'For your first day in the metaverse we have <b>a few quick tasks</b> for you to do so you can get the hang of what Decentraland is all about.',
        isEndOfDialog: true
      },
      {
        text: '<b>Head over the bridge</b> to meet my friends. They will teach you everything you need to know.'
      },
      {
        text: 'You might meet other newbies here too! Press <b>enter</b> to chat with them.',
        portrait: happyTrebor
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
