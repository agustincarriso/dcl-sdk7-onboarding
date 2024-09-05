import { Transform, engine, CameraMode, CameraType } from "@dcl/sdk/ecs"

export function checkCameraMode() {
    let cameraType = 0
	if (!Transform.has(engine.CameraEntity)) return

	let cameraEntity = CameraMode.get(engine.CameraEntity)

	if (cameraEntity.mode == CameraType.CT_THIRD_PERSON) {
		cameraType = 3
	} else {
		cameraType = 1
	}
    return cameraType
}

engine.addSystem(checkCameraMode) 