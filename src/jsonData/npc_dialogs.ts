import { type Dialog } from 'dcl-npc-toolkit'
import { GameController } from '../controllers/gameController'
import { CLICKME } from './textsTutorialBubble'
import {
  IdleTrebor,
  Racoon2Talking,
  happyBezier,
  happyMat,
  happyTrebor,
  idleBezier,
  idleMat,
  racoon2Idle,
  racoon2Sourprised,
  surprisedBezier,
  surprisedMat,
  talkingBezier,
  talkingTrebor
} from './npcData'
import {
  PORTAL_ISLAND_0,
  PORTAL_ISLAND_1,
  PORTAL_ISLAND_2,
  PORTAL_ISLAND_3,
  PORTAL_ISLAND_4,
  PORTAL_ISLAND_5,
  FOURTH_ISLAND_0,
  FOURTH_ISLAND_1,
  FOURTH_ISLAND_2,
  FOURTH_ISLAND_3,
  FOURTH_ISLAND_4,
  FOURTH_ISLAND_5,
  FOURTH_ISLAND_6,
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
  THIRD_ISLAND_10,
  THIRD_ISLAND_11,
  THIRD_ISLAND_12,
  THIRD_ISLAND_2,
  THIRD_ISLAND_3,
  THIRD_ISLAND_4,
  THIRD_ISLAND_5,
  THIRD_ISLAND_6,
  THIRD_ISLAND_7,
  THIRD_ISLAND_8,
  THIRD_ISLAND_9
} from './textsTutorialPopups'
import { POPUP_STATE } from '../uis/popupUI'

export class Dialogs {
  public toborDialog: Dialog[]
  public bezierDialog: Dialog[]
  public matDialog: Dialog[]
  public toborBubbles: Dialog[]
  public toborEndDialog: Dialog[]
  public kitDialog: Dialog[]
  typeSpeed: number = 45
  gameController: GameController
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.toborDialog = [
      {
        text: START_ISLAND_0,
        fontSize: 18,
        portrait: IdleTrebor,
        typeSpeed: this.typeSpeed
      },
      {
        text: START_ISLAND_1,
        portrait: IdleTrebor,
        typeSpeed: this.typeSpeed
      },
      {
        text: START_ISLAND_2,
        portrait: talkingTrebor,
        typeSpeed: this.typeSpeed,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.spawnIsland.startMoveQuest()
        }
      },

      {
        text: START_ISLAND_3,
        portrait: talkingTrebor,
        typeSpeed: this.typeSpeed
      },
      {
        text: START_ISLAND_4,
        portrait: talkingTrebor,
        typeSpeed: this.typeSpeed
      },
      {
        text: START_ISLAND_5,
        portrait: happyTrebor,
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed,
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
        typeSpeed: this.typeSpeed
      },
      {
        text: SECOND_ISLAND_1,
        portrait: talkingBezier,
        typeSpeed: this.typeSpeed
      },
      {
        text: SECOND_ISLAND_2,
        typeSpeed: this.typeSpeed,
        portrait: surprisedBezier,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.questEmote.startEmoteQuest()
        }
      },
      {
        text: SECOND_ISLAND_3,
        portrait: surprisedBezier,
        typeSpeed: this.typeSpeed
      },
      {
        text: SECOND_ISLAND_4,
        portrait: happyBezier,
        typeSpeed: this.typeSpeed
      },
      {
        text: SECOND_ISLAND_5,
        portrait: happyBezier,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.questEmote.setWalletConnection()
        },
        typeSpeed: this.typeSpeed
      },
      {
        text: SECOND_ISLAND_6,
        portrait: talkingBezier,
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed
      },
      {
        text: SECOND_ISLAND_7,
        portrait: talkingBezier,
        typeSpeed: this.typeSpeed
      },
      {
        text: SECOND_ISLAND_8,
        portrait: talkingBezier,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.questEmote.setWalletConnection()
        },
        typeSpeed: this.typeSpeed
      }
    ]
    this.matDialog = [
      {
        text: THIRD_ISLAND_0,
        portrait: idleMat,
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_1,
        portrait: happyMat,
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_2,
        portrait: surprisedMat,
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_3,
        portrait: happyMat,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.questMaterial.accetpQuest()
        },
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_4,
        portrait: idleMat,
        triggeredByNext: () => {
          this.gameController.questMaterial.accetpQuest()
        },
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_5,
        portrait: idleMat,
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_6,
        portrait: idleMat,
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_7,
        portrait: idleMat,
        isEndOfDialog: true,
        triggeredByNext: () => {
          this.gameController.questMaterial.setWalletConnection()
        },
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_8,
        portrait: idleMat,
        triggeredByNext: () => {
          this.gameController.questMaterial.afterEndQuestClick()
        },
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_9,
        portrait: idleMat,
        triggeredByNext: () => {
          this.gameController.questMaterial.showWearableUI()
        },
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed
      },
      {
        text: THIRD_ISLAND_10,
        portrait: idleMat,
        typeSpeed: this.typeSpeed
      },
      { text: THIRD_ISLAND_11, portrait: idleMat, isEndOfDialog: true, typeSpeed: this.typeSpeed },
      {
        text: THIRD_ISLAND_12,
        portrait: idleMat,
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed,
        triggeredByNext: () => {
          this.gameController.questMaterial.giveReward()
        }
      }
    ]
    this.toborEndDialog = [
      {
        text: PORTAL_ISLAND_0,
        fontSize: 18,
        portrait: IdleTrebor,
        typeSpeed: 30
      },
      {
        text: PORTAL_ISLAND_1,
        portrait: talkingTrebor,
        typeSpeed: 30
      },
      {
        text: PORTAL_ISLAND_2,
        portrait: IdleTrebor,
        typeSpeed: 30,
        triggeredByNext: () => {
          this.gameController.questPortal.setWalletConnection()
        },
        isEndOfDialog: true
      },

      {
        text: PORTAL_ISLAND_3,
        portrait: talkingTrebor,
        typeSpeed: 30,
        isEndOfDialog: true
      },
      {
        text: PORTAL_ISLAND_4,
        portrait: talkingTrebor,
        typeSpeed: 30,
        triggeredByNext: () => {
          this.gameController.questPortal.giveReward()
        },
        isEndOfDialog: true
      },
      {
        text: PORTAL_ISLAND_5,
        portrait: happyTrebor,
        isEndOfDialog: true,
        typeSpeed: 30
      }
    ]
    this.kitDialog = [
      {
        text: FOURTH_ISLAND_0,
        portrait: racoon2Idle,
        isEndOfDialog: false,
        typeSpeed: this.typeSpeed
      },
      {
        text: FOURTH_ISLAND_1,
        portrait: racoon2Sourprised,
        isEndOfDialog: false,
        typeSpeed: this.typeSpeed
      },
      {
        text: FOURTH_ISLAND_2,
        portrait: Racoon2Talking,
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed,
        triggeredByNext: () => {
          this.gameController.questPuzzle.accetpQuest()
          this.gameController.questPuzzle.cameraModeAngleCheck()
        }
      },
      {
        text: FOURTH_ISLAND_3,
        portrait: Racoon2Talking,
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed
      },
      {
        text: FOURTH_ISLAND_4,
        portrait: racoon2Sourprised,
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed
      },
      {
        text: FOURTH_ISLAND_5,
        portrait: racoon2Sourprised,
        isEndOfDialog: false,
        typeSpeed: this.typeSpeed
      },
      {
        text: FOURTH_ISLAND_6,
        portrait: Racoon2Talking,
        isEndOfDialog: true,
        typeSpeed: this.typeSpeed,
        triggeredByNext: () => {
          this.gameController.questPuzzle.dialogQuestFinished()
        }
      }
    ]
  }
}
