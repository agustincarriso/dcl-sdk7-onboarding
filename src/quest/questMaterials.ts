import { ClaimTokenRequest } from '../claim/claim'
import { configVest } from '../claim/config'
import { GameController } from '../controllers/gameController'

export class QuestMaterials {
  gameController: GameController
  private claim: ClaimTokenRequest
  constructor(gameController: GameController) {
    this.gameController = gameController
    this.claim = new ClaimTokenRequest(this.gameController, configVest, configVest.campaign_key, configVest.claimServer)
  }
  loadTagData() {}
  setUpTriggerHi(){}
  startQuest() {}
  setUpClaim() {}
  spawnBlockToNextIsalnd() {}
  deleteBlocker() {}
  setBubbleNpc() {}
  setQuestStartDialog() {}
  accetpQuest() {}
  startQuestCollectMaterials() {}
  onclickMaterial() {}
  onclickTriangles() {}
  pickPiece() {}
  pickedAllPieces() {}
  addParticleEntity() {}
  removeParticleEntity() {}
  spawnparticles(bActive: boolean) {}
  deliverAllPiecesClick() {}
  talkNpcCompleteQuest() {}
  resetClaim() {}
  giveReward() {}
  onCloseRewardUI() {}
  activatePilar() {}
  activeCables(bActive: boolean) {}
  afterEndQuestClick() {}
  playerForgotRewardDialog() {}
  dialogEndQuest() {}
}
