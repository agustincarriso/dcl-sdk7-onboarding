import { engine, Entity, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

export enum IndicatorState {
  EXCLAMATION,
  INTERROGATION
}

export class QuestIndicator {
  icon: Entity
  constructor(parent: Entity) {
    this.icon = engine.addEntity()
    Transform.create(this.icon, {
      position: Vector3.create(0, 2.2, 0),
      rotation: Quaternion.create(0, 0, 0, 0),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.icon).parent = parent
    GltfContainer.create(this.icon, { src: 'assets/scene/models/glb_assets/QuestExclamation.glb' })
  }

  updateStatus(status: IndicatorState) {
    if (status == IndicatorState.EXCLAMATION) {
      Transform.getMutable(this.icon).scale = Vector3.create(1, 1, 1)
      GltfContainer.getMutable(this.icon).src = 'assets/scene/models/glb_assets/QuestExclamation.glb'
    } else if (status == IndicatorState.INTERROGATION) {
      Transform.getMutable(this.icon).scale = Vector3.create(1, 1, 1)
      GltfContainer.getMutable(this.icon).src = 'assets/scene/models/glb_assets/QuestInterrogation.glb'
    }
  }

  hide() {
    Transform.getMutable(this.icon).scale = Vector3.create(0, 0, 0)
  }
}
