import { movePlayerTo } from '~system/RestrictedActions'
import { cleanUpScene } from '../utils/cleanupScene'
import { MainInstace } from '../instance/mainInstance'
import { Vector3 } from '@dcl/sdk/math'
import { UIController } from './uiController'
import { KeyBoardUI } from '../uis/keyboardUI'
import * as utils from '@dcl-sdk/utils'
import { SpawnIsland } from '../quest/questStartIsland'
import { Dialogs } from '../jsonData/npc_dialogs'
import { onEnterScene } from '@dcl/sdk/src/players'
import { QuestEmote } from '../quest/questEmote'
import { getUserData } from '~system/UserIdentity'
import { ClaimTokenRequest } from '../claim/claim'

export class GameController {
  mainInstance: MainInstace
  uiController: UIController
  spawnIsland: SpawnIsland
  questEmote: QuestEmote
  dialogs: Dialogs
  claim: ClaimTokenRequest

  constructor() {
    this.mainInstance = new MainInstace(this)
    this.spawnIsland = new SpawnIsland(this)
    this.uiController = new UIController(this)
    this.dialogs = new Dialogs(this)
    this.questEmote = new QuestEmote(this)
    this.claim = new ClaimTokenRequest(this)
  }
}
