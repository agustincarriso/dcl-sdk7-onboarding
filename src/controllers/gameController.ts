import { movePlayerTo } from '~system/RestrictedActions'
import { cleanUpScene } from '../utils/cleanupScene'
import * as utils from '@dcl-sdk/utils'
import { MainInstace } from '../instance/mainInstance'
import { Dialogs } from '../npc_dialogs'
import { UIController } from './uiController'
import { Vector3 } from '@dcl/sdk/math'

export class GameController {
  mainInstance: MainInstace
  dialog: Dialogs
  ui: UIController
  constructor() {
    this.mainInstance = new MainInstace(this)
    this.dialog = new Dialogs(this)
    this.ui = new UIController(this)
    this.preloadScene()
  }
  preloadScene() {
    utils.timers.setTimeout(() => {
      movePlayerTo({
        newRelativePosition: Vector3.create(224.127, 69.7368, 124.0051),
        cameraTarget: Vector3.create(219.13, 70.73, 125.91)
      })
    }, 4000)
  }
}
