import { Vector3 } from '@dcl/sdk/math'
import { engine } from '@dcl/sdk/ecs'
import { GameController } from './controllers/gameController'
import * as utils from '@dcl-sdk/utils'
import { movePlayerTo } from '~system/RestrictedActions'
export function main() {
    const gameController = new GameController()
    utils.timers.setTimeout(() => {
        void movePlayerTo({
          // 117.37,124.0051,85.24 4.89,0.88,252.67
          newRelativePosition: Vector3.create(181.89,69.53,150.97),
          cameraTarget: Vector3.create(31.12, 1.06, 53.56)
        })
      }, 2000)
}
