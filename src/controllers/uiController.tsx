import { GameController } from './gameController'
import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { NpcUtilsUi, openDialogWindow } from 'dcl-npc-toolkit'
import Canvas from '../uis/canvas/Canvas'
import { UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import { WidgetTasksBox } from '../uis/widgetTasks'
import { PopUpControls } from '../uis/popUpControls'
import { KeyBoardUI } from '../uis/keyboardUI'

export class UIController {
  public gameController: GameController
  public widgetTasksBox: WidgetTasksBox
  public popUpControls: PopUpControls
  public keyBoardUI: KeyBoardUI
  uiComponent: () => ReactEcs.JSX.Element[]
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.widgetTasksBox = new WidgetTasksBox(this)
    this.popUpControls = new PopUpControls(this)
    this.keyBoardUI = new KeyBoardUI(this)
    this.uiComponent = () => [NpcUtilsUi(), this.keyBoardUI.mainUi(), this.widgetTasksBox.widgetTask(),this.popUpControls.spaceUI()]
    ReactEcsRenderer.setUiRenderer(this.uiComponent)
    this.keyBoardUI.isVisible = true
    this.widgetTasksBox.setText(0, 0)
  }
}
