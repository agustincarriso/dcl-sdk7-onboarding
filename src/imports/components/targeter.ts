import { engine, Entity, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

export class ArrowTargeter {
  arrowEntity: Entity
  constructor(position: Vector3, scale: Vector3, rotation: Quaternion, parent?: Entity, arrowHeight?: number) {
    this.arrowEntity = engine.addEntity()
    Transform.create(this.arrowEntity, {
      position,
      scale,
      rotation
    })
    GltfContainer.create(this.arrowEntity, { src: '' })
    Transform.getMutable(this.arrowEntity).parent = parent
  }
  translate(position: Vector3) {
    Transform.getMutable(this.arrowEntity).position = position
  }

  setArrowHeight(height: number) {
    Transform.getMutable(this.arrowEntity).position.y = height
  }

  showArrow(bShow: boolean) {
    GltfContainer.getMutable(this.arrowEntity).src = 'assets/scene/models/glb_assets/target_arrow.glb'
  }
  delete() {
    engine.removeEntity(this.arrowEntity)
  }
}
export class FloorCircleTargeter {
  floorCircleEntity: Entity
  constructor(position: Vector3, scale: Vector3, rotation: Quaternion, parent?: Entity, arrowHeight?: number) {
    this.floorCircleEntity = engine.addEntity()
    Transform.create(this.floorCircleEntity, {
      position,
      scale,
      rotation
    })
    GltfContainer.create(this.floorCircleEntity, { src: '' })
    Transform.getMutable(this.floorCircleEntity).parent = parent
  }
  translate(position: Vector3) {
    Transform.getMutable(this.floorCircleEntity).position = position
  }
  setCircleScale(scale: number) {
    const adjustedScale = scale * 100
    Transform.getMutable(this.floorCircleEntity).scale = Vector3.create(adjustedScale, adjustedScale, adjustedScale)
  }
  showCircle(bShow: boolean) {
    if (bShow === true) {
      GltfContainer.getMutable(this.floorCircleEntity).src = 'assets/scene/models/glb_assets/target_position.glb'
    } else {
      GltfContainer.getMutable(this.floorCircleEntity).src = ''
    }
  }
  delete() {
    engine.removeEntity(this.floorCircleEntity)
  }
}
