import { GameController } from './gameController'
import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { NpcUtilsUi } from 'dcl-npc-toolkit'
import Canvas from '../uis/canvas/Canvas'
import { UiCanvasInformation, engine } from '@dcl/sdk/ecs'

export class UIController {
  public gameController: GameController
  uiComponent: () => ReactEcs.JSX.Element[]
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.uiComponent = () => (
        [
            NpcUtilsUi(),
            this.gameController.keyBoardUI.mainUi()
        ]
    )
    ReactEcsRenderer.setUiRenderer(this.uiComponent)
  }
}
