import { MainInstace } from '../instance/mainInstance'
import { Dialogs } from '../npc_dialogs'
import { UI } from './uiController'

export class GameController {
  mainInstance: MainInstace
  dialog: Dialogs
  ui: UI
  constructor() {
    this.mainInstance = new MainInstace(this)
    this.dialog = new Dialogs(this)
    this.ui = new UI(this)
  }
}
