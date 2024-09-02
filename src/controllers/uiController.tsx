import { GameController } from './gameController'
import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { NpcUtilsUi, openDialogWindow } from 'dcl-npc-toolkit'
import Canvas from '../uis/canvas/Canvas'
import { PointerLock, UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import { PopUpControls } from '../uis/popUpControls'
import { KeyBoardUI } from '../uis/keyboardUI'
import { Popup } from '../uis/popupUI'
import { WidgetTasks } from '../uis/widgetTask'

export class UIController {
  public gameController: GameController
  public popUpControls: PopUpControls
  public keyBoardUI: KeyBoardUI
  public popUpUI: Popup
  public pointerLock: boolean = false
  public widgetTasks: WidgetTasks
  uiComponent: () => ReactEcs.JSX.Element[]
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.popUpControls = new PopUpControls(this)
    this.keyBoardUI = new KeyBoardUI(this)
    this.popUpUI = new Popup(this)
    this.widgetTasks = new  WidgetTasks(this)
    // this.uiComponent = () => [NpcUtilsUi(),this.popUpControls.spaceUI(),this.keyBoardUI.mainUi(),this.popUpUI.popupUI(),this.popUpUI.controlUI(), this.widgetTasks.widgetTask()]
    this.uiComponent = () => [this.popUpUI.popupUIEmote()]
    ReactEcsRenderer.setUiRenderer(this.uiComponent)
    this.keyBoardUI.isVisible = true
  }
}
