import { movePlayerTo } from '~system/RestrictedActions'
import { cleanUpScene } from '../utils/cleanupScene'
import { MainInstace } from '../instance/mainInstance'
import { Vector3 } from '@dcl/sdk/math'
import { UIController } from './uiController'
import { KeyBoardUI } from '../uis/keyboardUI'
import * as utils from '@dcl-sdk/utils'
import { SpawnIsland } from '../instance/spawnIsland'
import { Dialogs } from '../jsonData/npc_dialogs'
import { WidgetTasksBox } from '../uis/widgetTasks'

export class GameController {
  mainInstance: MainInstace
  uiController: UIController
  spawnIsland: SpawnIsland
  keyBoardUI: KeyBoardUI
  dialogs: Dialogs
  constructor() {
    this.mainInstance = new MainInstace(this)
    this.spawnIsland = new SpawnIsland(this)
    this.uiController = new UIController(this)
    this.keyBoardUI = new KeyBoardUI(this)
    this.dialogs = new Dialogs(this)
    this.keyBoardUI.isVisible = true
  }
}
