import { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { NpcUtilsUi } from 'dcl-npc-toolkit'
import { GameController } from './gameController'

export class UIController {
  public message: string = ''
  public gameController: GameController
  public announcement: string = ''

  public announcement_visible: boolean = false
  constructor(gameController: GameController) {
    this.gameController = gameController
    const uiComponent = () => [NpcUtilsUi()]
    ReactEcsRenderer.setUiRenderer(uiComponent)
  }
}
