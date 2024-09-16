import { Vector3 } from '~system/EngineApi'

export function addInPlace(baseVector: Vector3, otherVector: Vector3): Vector3 {
  baseVector.x += otherVector.x
  baseVector.y += otherVector.y
  baseVector.z += otherVector.z
  return baseVector
}
