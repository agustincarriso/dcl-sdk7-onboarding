import {
  Animator,
  Billboard,
  BillboardMode,
  engine,
  Entity,
  GltfContainer,
  InputAction,
  inputSystem,
  MeshCollider,
  PointerEvents,
  PointerEventType,
  Transform
} from '@dcl/sdk/ecs'
import * as utils from '@dcl-sdk/utils'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import { openDialogWindow } from 'dcl-npc-toolkit'
import * as npc from 'dcl-npc-toolkit'
import { FloorCircleTargeter } from './imports/components/targeter'
export class NPC {
  entity: Entity = engine.addEntity()
  npcChild: Entity = engine.addEntity()
  constructor(
    position: Vector3,
    scale: Vector3,
    rotation: Quaternion, 
    GLTF: string,
    reactDistance: number,
    onActivate: () => void = () => {},
    onClick: () => void = () => {},
    arrow?: boolean,
    floorCircle?: boolean
  ) {
    this.entity = npc.create(
      {
        position,
        scale,
        rotation
      },
      {
        type: npc.NPCType.CUSTOM,
        model : GLTF,
        faceUser: true,
        onActivate: () => {},
        onWalkAway: () => {},
      }
    )
    utils.triggers.addTrigger(
      this.entity,
      1,
      1,
      [{ type: 'box', scale: Vector3.create(reactDistance, 2, reactDistance) }],
      () => {
        onActivate()
      }
    )
    Transform.create(this.npcChild, { parent: this.entity })
    Transform.getMutable(this.npcChild).scale = Vector3.create(2, 2, 2)
    MeshCollider.setBox(this.npcChild)
    PointerEvents.createOrReplace(this.npcChild, {
      pointerEvents: [
        {
          eventType: PointerEventType.PET_DOWN,
          eventInfo: {
            button: InputAction.IA_POINTER,
            showFeedback: true,
            hoverText: 'Talk'
          }
        }
      ]
    })
    engine.addSystem(() => {
      if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, this.npcChild)) {
        onClick()
      }
    })
  }
  activateBillBoard(faceUser: boolean){
    if (faceUser === true){
      Billboard.create(this.entity, {billboardMode: BillboardMode.BM_Y})
    } else {
      Billboard.deleteFrom(this.entity)
    }
  }
}
