import { MainInstace } from '../instance/mainInstance'
import { Dialogs } from '../jsonData/npc_dialogs'
import { QuestEmote } from '../quest/questEmote'
import { QuestMaterials } from '../quest/questMaterials'
import { QuestPortal } from '../quest/questPortals'
import { QuestPuzzle } from '../quest/questPuzzle'
import { SpawnIsland } from '../quest/questStartIsland'
import { setPlayerTime } from '../utils/setPlayerTime'
import { UIController } from './uiController'

export class GameController {
  mainInstance: MainInstace
  uiController: UIController
  spawnIsland: SpawnIsland
  questEmote: QuestEmote
  questMaterial: QuestMaterials
  questPortal: QuestPortal
  dialogs: Dialogs
  timeStamp: number
  questPuzzle: QuestPuzzle
  constructor() {
    this.mainInstance = new MainInstace(this)
    this.spawnIsland = new SpawnIsland(this)
    this.uiController = new UIController(this)
    this.dialogs = new Dialogs(this)
    this.questEmote = new QuestEmote(this)
    this.questPuzzle = new QuestPuzzle(this)
    this.questMaterial = new QuestMaterials(this)
    this.questPortal = new QuestPortal(this)
    this.timeStamp = setPlayerTime()
  }
}
