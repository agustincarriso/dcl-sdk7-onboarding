import { movePlayerTo } from '~system/RestrictedActions'
import { cleanUpScene } from '../utils/cleanupScene'
import { MainInstace } from '../instance/mainInstance'
import { Vector3 } from '@dcl/sdk/math'

export class GameController {
  mainInstance: MainInstace
  constructor() {
    this.mainInstance = new MainInstace(this)
    this.preloadScene()
  }
  preloadScene() {
    cleanUpScene()
    this.mainInstance = new MainInstace(this)
    movePlayerTo({
      newRelativePosition: Vector3.create(224.127, 69.7368, 124.0051),
      cameraTarget: Vector3.create(219.13, 70.73, 125.91)
    })
  }
}
