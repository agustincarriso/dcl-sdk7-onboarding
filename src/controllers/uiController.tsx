import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { NpcUtilsUi } from 'dcl-npc-toolkit'
import { Entity } from '@dcl/sdk/ecs'
import * as utils from '@dcl-sdk/utils'
import { GameController } from './gameController'

export class UI {
  public message: string = ''
  public gameController: GameController
  public announcement: string = ''
  public announcement_color: Color4 = Color4.White()
  public announcement_visible: boolean = false
  constructor(gameController: GameController) {
    this.gameController = gameController
    const uiComponent = () => [NpcUtilsUi()]
    ReactEcsRenderer.setUiRenderer(uiComponent)
  }
}
