import { movePlayerTo } from '~system/RestrictedActions'
import { cleanUpScene } from '../utils/cleanupScene'
import { MainInstace } from '../instance/mainInstance'
import { Vector3 } from '@dcl/sdk/math'
import { UIController } from './uiController'
import { KeyBoardUI } from '../uis/keyboardUI'
import * as utils from '@dcl-sdk/utils'
import { Island_1 } from '../instance/island_1'
import { Dialogs } from '../jsonData/npc_dialogs'

export class GameController {
  mainInstance: MainInstace
  uiController: UIController
  keyBoardUI: KeyBoardUI
  dialogs: Dialogs
  constructor() {
    this.mainInstance = new MainInstace(this)
    this.uiController = new UIController(this)
    this.keyBoardUI = new KeyBoardUI(this) 
    this.dialogs = new Dialogs(this)
    this.keyBoardUI.isVisible = true
    utils.timers.setTimeout(() => {
      movePlayerTo({
        newRelativePosition: Vector3.create(224.127, 69.7368, 124.0051),
        cameraTarget: Vector3.create(219.13, 70.73, 125.91)
      })
    }, 5000)
}
}
