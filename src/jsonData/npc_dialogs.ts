import { followPath, openDialogWindow, type Dialog } from 'dcl-npc-toolkit'
import { GameController } from '../controllers/gameController'
import { CLICKME, HELP_BEIZER, JUMP } from './textsTutorialBubble'
import {
  IdleTrebor,
  happyBezier,
  happyTrebor,
  idleBezier,
  surprisedBezier,
  talkingBezier,
  talkingTrebor
} from './npcData'
import {
  SECOND_ISLAND_0,
  SECOND_ISLAND_1,
  SECOND_ISLAND_2,
  SECOND_ISLAND_3,
  SECOND_ISLAND_4,
  SECOND_ISLAND_5,
  SECOND_ISLAND_6,
  SECOND_ISLAND_7,
  SECOND_ISLAND_8,
  START_ISLAND_0,
  START_ISLAND_1,
  START_ISLAND_2,
  START_ISLAND_3,
  START_ISLAND_4,
  START_ISLAND_5,
  THIRD_ISLAND_0,
  THIRD_ISLAND_1,
  THIRD_ISLAND_2,
  THIRD_ISLAND_3,
  THIRD_ISLAND_4,
  THIRD_ISLAND_5,
  THIRD_ISLAND_6,
  THIRD_ISLAND_7
} from './textsTutorialPopups'
import { POPUP_STATE } from '../uis/popupUI'

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
        text: START_ISLAND_0,
        fontSize: 18,
        portrait: IdleTrebor,
        typeSpeed: 30
      },
      {
        text: START_ISLAND_1,
        portrait: IdleTrebor,
        typeSpeed: 30
      },
      {
        text: START_ISLAND_2,
        portrait: talkingTrebor,
        typeSpeed: 30,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.spawnIsland.startMoveQuest()
        }
      },

      {
        text: START_ISLAND_3,
        portrait: talkingTrebor,
        typeSpeed: 30
      },
      {
        text: START_ISLAND_4,
        portrait: talkingTrebor,
        typeSpeed: 30
      },
      {
        text: START_ISLAND_5,
        portrait: happyTrebor,
        isEndOfDialog: true,
        typeSpeed: 30,
        triggeredByNext: () => {
          this.gameController.uiController.popUpUI.show(POPUP_STATE.Tasks)
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
        text: SECOND_ISLAND_0,
        portrait: idleBezier,
        typeSpeed: 30
      },
      {
        text: SECOND_ISLAND_1,
        portrait: talkingBezier,
        typeSpeed: 30
      },
      {
        text: SECOND_ISLAND_2,
        typeSpeed: 30,
        portrait: surprisedBezier,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.questEmote.startEmoteQuest()
        }
      },
      {
        text: SECOND_ISLAND_3,
        portrait: surprisedBezier,
        typeSpeed: 30
      },
      {
        text: SECOND_ISLAND_4,
        portrait: happyBezier,
        typeSpeed: 30
      },
      {
        text: SECOND_ISLAND_5,
        portrait: happyBezier,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.questEmote.setWalletConnection()
        },
        typeSpeed: 30
      },
      {
        text: SECOND_ISLAND_6,
        portrait: talkingBezier,
        isEndOfDialog: true,
        typeSpeed: 30
      },
      {
        text: SECOND_ISLAND_7,
        portrait: talkingBezier,
        typeSpeed: 30
      },
      {
        text: SECOND_ISLAND_8,
        portrait: talkingBezier,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.questEmote.setWalletConnection()
        },
        typeSpeed: 30
      },
    ]
    this.matDialog = [
      {
        text: THIRD_ISLAND_0
      },
      {
        text: THIRD_ISLAND_1
      },
      {
        text: THIRD_ISLAND_2
      },
      {
        text: THIRD_ISLAND_3
      },
      {
        text: THIRD_ISLAND_4
      },
      {
        text: THIRD_ISLAND_5
      },
      {
        text: THIRD_ISLAND_6
      },
      {
        text: THIRD_ISLAND_7
      }
    ]
  }
}
