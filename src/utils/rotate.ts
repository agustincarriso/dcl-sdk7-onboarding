import { Vector3Type } from "@dcl/sdk/ecs";
import { Quaternion, Vector3 } from "@dcl/sdk/math";

export function rotate(axis: Vector3Type, angle: number, rotation: Quaternion): Quaternion {
    const normalizedAxis = Vector3.normalize(axis);
    const halfAngle = angle / 2;
    const sinHalfAngle = Math.sin(halfAngle);
    const cosHalfAngle = Math.cos(halfAngle);

    // Crear el cuaternión de rotación
    const q = Quaternion.create(
        normalizedAxis.x * sinHalfAngle,
        normalizedAxis.y * sinHalfAngle,
        normalizedAxis.z * sinHalfAngle,
        cosHalfAngle
    );

    // Multiplicar el cuaternión actual por el cuaternión de rotación
    return Quaternion.multiply(rotation, q);
}
