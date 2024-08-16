import { MainInstace } from '../instance/mainInstance'

export class GameController {
  mainInstance: MainInstace
  constructor() {
    this.mainInstance = new MainInstace(this)
  }
}
