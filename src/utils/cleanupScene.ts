import { engine } from '@dcl/sdk/ecs'

export function cleanUpScene(): void {
  for (const component of engine.componentsIter()) {
    for (const [entity] of engine.getEntitiesWith(component)) {
      engine.removeEntity(entity)
    }
  }
}
