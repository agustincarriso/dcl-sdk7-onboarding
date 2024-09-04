import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { ClaimTokenRequest } from '../claim/claim'
import { configVest } from '../claim/config'
import { GameController } from '../controllers/gameController'
import { NPC } from '../npc.class'
import { Animator, Transform, engine, pointerEventsSystem } from '@dcl/sdk/ecs'
import { AudioManager } from '../imports/components/audio/audio.manager'
import * as utils from '@dcl-sdk/utils'
import { openDialogWindow } from 'dcl-npc-toolkit'
import { QuestIndicator } from '../imports/components/questIndicator'
import { FloorCircleTargeter } from '../imports/components/targeter'
import { sideBubbleTalk } from '../imports/bubble'
export class QuestMaterials {
  gameController: GameController
  mat: NPC
  targeterCircle: FloorCircleTargeter
  questIndicator: QuestIndicator
  bubbleTalk: sideBubbleTalk
  //private claim: ClaimTokenRequest
  constructor(gameController: GameController) {
    this.gameController = gameController

    // this.claim = new ClaimTokenRequest(this.gameController, configVest, configVest.campaign_key, configVest.claimServer)
    this.mat = new NPC(
      Vector3.create(0, -0.91, 0),
      Vector3.create(2.213552, 1.280694, 2.213552),
      Quaternion.create(0, 0.6327581, 0, -0.7743495),
      'assets/scene/models/unity_assets/s0_NPC_Raccoon_Art_01.glb',
      14,
      () => {
        console.log('npc activated')
        Animator.getClip(this.mat.entity, 'Idle').playing = true
        AudioManager.instance().playOnce('npc_2_salute', { volume: 0.6, parent: this.mat.entity })
      },
      () => {
        pointerEventsSystem.removeOnPointerDown(this.mat.npcChild)
        this.startQuest()
      }
    )

    Transform.getMutable(this.mat.entity).parent = this.gameController.mainInstance.s0_En_Npc2_01
    Animator.createOrReplace(this.mat.entity, {
      states: [
        {
          clip: 'Idle',
          playing: false
        },
        {
          clip: 'Talk',
          playing: false
        },
        {
          clip: 'Hi',
          playing: false
        },
        {
          clip: 'Celebrate',
          playing: false
        },
        {
          clip: 'Bye',
          playing: false
        }
      ]
    })
    this.questIndicator = new QuestIndicator(this.mat.entity)
    this.bubbleTalk = new sideBubbleTalk(this.mat.npcChild)
    this.bubbleTalk.closeBubbleInTime()
    this.targeterCircle = new FloorCircleTargeter(
      Vector3.create(0, 0.1, 0),
      Vector3.create(0, 0, 0),
      Quaternion.create(0, 0, 0),
      this.mat.entity
    )
  }
  loadTagData() {}
  startQuest() {
    this.setQuestStartDialog()
  }
  setUpClaim() {}
  spawnBlockToNextIsalnd() {}
  deleteBlocker() {}
  setBubbleNpc() {}
  setQuestStartDialog() {
    AudioManager.instance().playOnce('npc_2_salute', { volume: 0.6, parent: this.mat.entity })
    openDialogWindow(this.mat.entity, this.gameController.dialogs.matDialog, 0)
    Animator.stopAllAnimations(this.mat.entity)
    Animator.getClip(this.mat.entity, 'Talk').playing = true
    this.targeterCircle.showCircle(false)
    this.questIndicator.hide()
  }
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
