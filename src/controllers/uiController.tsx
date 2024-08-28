import { GameController } from './gameController'
import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { NpcUtilsUi, openDialogWindow } from 'dcl-npc-toolkit'
import Canvas from '../uis/canvas/Canvas'
import { UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import { WidgetTasksBox } from '../uis/widgetTasks'

export class UIController {
  public gameController: GameController
  public widgetTasksBox:WidgetTasksBox
  uiComponent: () => ReactEcs.JSX.Element[]
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.widgetTasksBox = new WidgetTasksBox(this)
    this.uiComponent = () => (
        [
            NpcUtilsUi(),
            this.gameController.keyBoardUI.mainUi(),
            this.widgetTasksBox.initialize()
        ]
    )
    ReactEcsRenderer.setUiRenderer(this.uiComponent)
    this.widgetTasksBox.setText(0,0)
    this.widgetTasksBox.showTasks(true)
  }
}
