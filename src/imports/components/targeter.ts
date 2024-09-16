import { engine, Entity, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

export class ArrowTargeter {
  arrowEntity: Entity
  constructor(position: Vector3, scale?: Vector3, rotation?: Quaternion, parent?: Entity, arrowHeight?: number) {
    this.arrowEntity = engine.addEntity()
    Transform.create(this.arrowEntity, {
      position,
      scale: scale || Vector3.create(1, 1, 1),
      rotation: rotation || Quaternion.fromEulerDegrees(0, 0, 0),
      parent
    })
    GltfContainer.create(this.arrowEntity, { src: 'assets/scene/models/glb_assets/target_arrow.glb' })
    console.log('targeter created')
  }
  translate(position: Vector3) {
    Transform.getMutable(this.arrowEntity).position = position
  }

  setArrowHeight(height: number) {
    Transform.getMutable(this.arrowEntity).position.y = height
  }

  showArrow(bShow: boolean) {
    if (bShow === true) {
      console.log('targeter show')
      GltfContainer.getMutable(this.arrowEntity).src = 'assets/scene/models/glb_assets/target_arrow.glb'
    } else {
      console.log('targeter hide')
      GltfContainer.getMutable(this.arrowEntity).src = ''
    }
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
      console.log('circle removed')
      GltfContainer.getMutable(this.floorCircleEntity).src = ''
    }
  }
  delete() {
    engine.removeEntity(this.floorCircleEntity)
  }
}
