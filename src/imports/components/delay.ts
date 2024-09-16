import * as utils from '@dcl-sdk/utils'
import { Callback } from '@dcl/sdk/react-ecs'
export function delay(callback: Callback, time: number) {
  return utils.timers.setTimeout(callback, time)
}
export function clearDelay(timeout: any) {
  utils.timers.clearTimeout(timeout)
}
