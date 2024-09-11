import * as utils from '@dcl-sdk/utils'
import {
  Entity,
  engine,
  Transform,
  MeshCollider,
  pointerEventsSystem,
  InputAction,
  Billboard,
  BillboardMode
} from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import * as npc from 'dcl-npc-toolkit'
export class NPC {
  entity: Entity = engine.addEntity()
  npcChild: Entity = engine.addEntity()
  bubbleAttach: Entity = engine.addEntity()
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
        model: GLTF,
        faceUser: true,
        onActivate: () => {},
        onWalkAway: () => {}
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

    Transform.create(this.bubbleAttach, { parent: this.entity })
    Transform.getMutable(this.bubbleAttach).scale = Vector3.create(2, 2, 2)

    Transform.create(this.npcChild, { parent: this.entity })
    Transform.getMutable(this.npcChild).scale = Vector3.create(1, 3.1, 1)
    MeshCollider.setBox(this.npcChild)

    pointerEventsSystem.onPointerDown(
      {
        entity: this.npcChild,
        opts: {
          button: InputAction.IA_POINTER,
          hoverText: 'Talk'
        }
      },
      () => {
        onClick()
      }
    )
  }
  setChildScaleYAxis(number: number) {
    Transform.getMutable(this.npcChild).scale = Vector3.create(0.8, number, 0.8)
  }
  activateBillBoard(faceUser: boolean) {
    if (faceUser === true) {
      Billboard.create(this.entity, { billboardMode: BillboardMode.BM_Y })
    } else {
      Billboard.deleteFrom(this.entity)
    }
  }
}
