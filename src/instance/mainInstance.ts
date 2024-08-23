import {
  Animator,
  engine,
  Entity,
  GltfContainer,
  InputAction,
  Material,
  MeshCollider,
  MeshRenderer,
  pointerEventsSystem,
  Transform
} from '@dcl/sdk/ecs'
import { Vector3, Quaternion, Color4 } from '@dcl/sdk/math'
import { GameController } from '../controllers/gameController'
import * as npc from 'dcl-npc-toolkit'
import { openDialogWindow } from 'dcl-npc-toolkit'
import { FollowPathData } from 'dcl-npc-toolkit/dist/types'

export class MainInstace {
  s0_Z1_Out_IslandBase2_Art_01: Entity
  s0_Det_Ladybug_code_Art_1__01: Entity
  s0_Det_Ladybug_Art_1__01: Entity
  s0_Det_Ladybug_code_Art_01: Entity
  s0_Dto_Bird_Art_6__01: Entity
  s0_Dto_Bird_Art_5__01: Entity
  s0_Dto_Bird_Art_3__01: Entity
  s0_Dto_Bird_Art_01: Entity
  s0_grass_orange_art_01: Entity
  s0_Z3_Str_Lamp_Art_01: Entity
  s0_Ladybug_Art_01: Entity
  s0_Screen_Portal_Art_01: Entity
  s0_spawnPoint0DCL_1__01: Entity
  s0_Leaf_Anim_Art_01: Entity
  s0_Leaf_Anim_02_Art_1__01: Entity
  s0_Baliza_on_art_01: Entity
  s0_Baliza_off_art_01: Entity
  s0_Cables_Art_01: Entity
  s0_Cable_01_OFF_01: Entity
  s0_Cable_01_ON_01: Entity
  s0_Cable_02_OFF_01: Entity
  s0_Cable_02_ON_01: Entity
  s0_Cable_03_OFF_01: Entity
  s0_Cable_03_ON_01: Entity
  s0_Cable_04_OFF_01: Entity
  s0_Cable_04_ON_01: Entity
  s0_NPC_Robot_Art_1__01 = engine.addEntity()
  s0_Puzlemachines_01: Entity
  s0_Cables_01: Entity
  s0_Puzle_machines_01: Entity
  s0_Sign_01_OFF_01: Entity
  s0_Sign_01_ON_01: Entity
  s0_Sign_02_OFF_01: Entity
  // Entities
  s0_Sign_02_ON_01: Entity
  s0_Sign_03_OFF_01: Entity
  s0_Sign_03_ON_01: Entity
  s0_tube_01_01: Entity
  s0_tube_01_OFF_01: Entity
  s0_tube_01_ON_01: Entity
  s0_tube_02_01: Entity
  s0_tube_02_OFF_01: Entity
  s0_tube_02_ON_01: Entity
  s0_tube_03_01: Entity
  s0_tube_03_OFF_01: Entity
  s0_tube_03_ON_01: Entity

  gameController: GameController
  constructor(gameController: GameController) {
    this.gameController = gameController
    // Z1_Out_IslandBase2_Art
    this.s0_Z1_Out_IslandBase2_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Z1_Out_IslandBase2_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Z1_Out_IslandBase2_Art_01.glb'
    })
    Transform.create(this.s0_Z1_Out_IslandBase2_Art_01, {
      position: Vector3.create(115.46, 67.34, 82.93),
      rotation: Quaternion.create(0, 0.9716263, 0, 0.2365213),
      scale: Vector3.create(0.769531, 0.47, 0.47)
    })
    //s0_Det_Ladybug_code_Art_1__01.glb
    this.s0_Det_Ladybug_code_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Ladybug_code_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Ladybug_code_Art_1__01.glb'
    })
    Transform.create(this.s0_Det_Ladybug_code_Art_1__01, {
      position: Vector3.create(126.94, 75.471, 106.11),
      rotation: Quaternion.create(0, 0.9151527, 0, 0.4031073),
      scale: Vector3.create(1, 1, 1)
    })
    // s0_Det_Ladybug_Art_1__01.glb
    this.s0_Det_Ladybug_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Ladybug_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Ladybug_Art_1__01.glb'
    })
    Transform.create(this.s0_Det_Ladybug_Art_1__01, {
      position: Vector3.create(156.92, 66.949, 152.99),
      rotation: Quaternion.create(0, -0.05407048, 0, 0.9985371),
      scale: Vector3.create(1, 1, 1)
    })
    // s0_Det_Ladybug_code_Art_1__01.glb
    this.s0_Det_Ladybug_code_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Ladybug_code_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Ladybug_code_Art_1__01.glb'
    })
    Transform.create(this.s0_Det_Ladybug_code_Art_01, {
      position: Vector3.create(217.166, 68.557, 129.832),
      rotation: Quaternion.create(0, 0.9875736, 0, -0.1571577),
      scale: Vector3.create(1, 1, 1)
    })
    // s0_Dto_Bird_Art_6__01.glb
    this.s0_Dto_Bird_Art_6__01 = engine.addEntity()
    GltfContainer.create(this.s0_Dto_Bird_Art_6__01, {
      src: 'assets/scene/models/unity_assets/s0_Dto_Bird_Art_6__01.glb'
    })
    Transform.create(this.s0_Dto_Bird_Art_6__01, {
      position: Vector3.create(191.8496, 66.6555, 130.1649),
      rotation: Quaternion.create(-0.3133294, 0.5969802, -0.6338968, -0.3789651),
      scale: Vector3.create(100, 100, 100)
    })
    // s0_Dto_Bird_Art_6__01.glb
    this.s0_Dto_Bird_Art_5__01 = engine.addEntity()
    GltfContainer.create(this.s0_Dto_Bird_Art_5__01, {
      src: 'assets/scene/models/unity_assets/s0_Dto_Bird_Art_6__01.glb'
    })
    Transform.create(this.s0_Dto_Bird_Art_5__01, {
      position: Vector3.create(199.4966, 69.1658, 115.9785),
      rotation: Quaternion.create(0.04210738, 0.8114812, -0.5798733, -0.05892553),
      scale: Vector3.create(100, 100, 100)
    })

    // s0_Dto_Bird_Art_6__01.glb
    this.s0_Dto_Bird_Art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Dto_Bird_Art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Dto_Bird_Art_6__01.glb'
    })
    Transform.create(this.s0_Dto_Bird_Art_3__01, {
      position: Vector3.create(169.468, 74.682, 172.81),
      rotation: Quaternion.create(0.3849188, 0.5193579, -0.4092128, 0.6439331),
      scale: Vector3.create(100, 100, 100)
    })

    // s0_Dto_Bird_Art_6__01.glb
    this.s0_Dto_Bird_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Dto_Bird_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Dto_Bird_Art_6__01.glb'
    })
    Transform.create(this.s0_Dto_Bird_Art_01, {
      position: Vector3.create(145.2302, 75.4587, 151.9807),
      rotation: Quaternion.create(-0.3657602, 0.5390578, -0.6051609, -0.4576205),
      scale: Vector3.create(100, 100, 100)
    })

    // s0_grass_orange_art_01.glb
    this.s0_grass_orange_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_grass_orange_art_01, {
      src: 'assets/scene/models/unity_assets/s0_grass_orange_art_01.glb'
    })
    Transform.create(this.s0_grass_orange_art_01, {
      position: Vector3.create(224.736, 68.396, 126.26),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })

    // s0_Z3_Str_Lamp_Art_01.glb
    this.s0_Z3_Str_Lamp_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Str_Lamp_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Str_Lamp_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Str_Lamp_Art_01, {
      position: Vector3.create(112.07, 75.29, 131.26),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })

    // s0_Det_Ladybug_Art_1__01.glb
    this.s0_Ladybug_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Ladybug_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Ladybug_Art_1__01.glb'
    })
    Transform.create(this.s0_Ladybug_Art_01, {
      position: Vector3.create(224.686, 68.535, 126.371),
      rotation: Quaternion.create(0, 0.7607277, 0, 0.649071),
      scale: Vector3.create(1, 1, 1)
    })

    // s0_Screen_Portal_Art_01.glb
    this.s0_Screen_Portal_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Screen_Portal_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Screen_Portal_Art_01.glb'
    })
    Transform.create(this.s0_Screen_Portal_Art_01, {
      position: Vector3.create(104.98, 81.87, 103.84),
      rotation: Quaternion.create(0, 0.9771972, 0, -0.2123336),
      scale: Vector3.create(1.761024, 1.761024, 1.761024)
    })

    // s0_spawnPoint0DCL (1).glb
    this.s0_spawnPoint0DCL_1__01 = engine.addEntity()
    Transform.create(this.s0_spawnPoint0DCL_1__01, {
      position: Vector3.create(219.2, 69.7368, 127.0201),
      rotation: Quaternion.create(0, 0.2588189, 0, 0.9659259),
      scale: Vector3.create(0, 0, 0)
    })

    // s0_Leaf_Anim_Art_01.glb
    this.s0_Leaf_Anim_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_01, {
      position: Vector3.create(168.2958, 65.22231, 140.32),
      rotation: Quaternion.create(0.04878357, 0.9988093, 2.132398e-9, -4.365934e-8),
      scale: Vector3.create(2.0492, 2.0492, 2.0492)
    })

    // s0_Leaf_Anim_02_Art_1__01.glb
    this.s0_Leaf_Anim_02_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_02_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_02_Art_1__01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_02_Art_1__01, {
      position: Vector3.create(169.6, 62.86, 138.82),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(2.773876, 2.773876, 2.773876)
    })

    // s0_Baliza_on_art_01.glb
    this.s0_Baliza_on_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Baliza_on_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Baliza_on_art_01.glb'
    })
    Transform.create(this.s0_Baliza_on_art_01, {
      position: Vector3.create(220.889, 17.8, 128.883),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(14, 14, 14)
    })

    // Baliza_off_art
    this.s0_Baliza_off_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Baliza_off_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Baliza_off_art_01.glb'
    })
    Transform.create(this.s0_Baliza_off_art_01, {
      position: Vector3.create(219.9794, 18.14, 127.1204),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(14, 14, 14)
    })

    // Cables_Art
    this.s0_Cables_Art_01 = engine.addEntity()
    Transform.create(this.s0_Cables_Art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(1, 1, 1)
    })

    // Cable_01_OFF
    this.s0_Cable_01_OFF_01 = engine.addEntity()
    Transform.create(this.s0_Cable_01_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Cable_01_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_01_OFF_01.glb',
      visibleMeshesCollisionMask: 0 // Disable collisions
    })
    Transform.getMutable(this.s0_Cable_01_OFF_01).parent = this.s0_Cables_Art_01

    // Cable_01_ON
    this.s0_Cable_01_ON_01 = engine.addEntity()
    Transform.create(this.s0_Cable_01_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Cable_01_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_01_ON_01.glb',
      visibleMeshesCollisionMask: 0 // Disable collisions
    })
    Transform.getMutable(this.s0_Cable_01_ON_01).parent = this.s0_Cables_Art_01

    // Cable_02_OFF
    this.s0_Cable_02_OFF_01 = engine.addEntity()
    Transform.create(this.s0_Cable_02_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Cable_02_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_02_OFF_01.glb',
      visibleMeshesCollisionMask: 0 // Disable collisions
    })
    Transform.getMutable(this.s0_Cable_02_OFF_01).parent = this.s0_Cables_Art_01

    // Cable_02_ON
    this.s0_Cable_02_ON_01 = engine.addEntity()
    Transform.create(this.s0_Cable_02_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Cable_02_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_02_ON_01.glb',
      visibleMeshesCollisionMask: 0 // Disable collisions
    })
    Transform.getMutable(this.s0_Cable_02_ON_01).parent = this.s0_Cables_Art_01

    // Cable_03_OFF
    this.s0_Cable_03_OFF_01 = engine.addEntity()
    Transform.create(this.s0_Cable_03_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Cable_03_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_03_OFF_01.glb',
      visibleMeshesCollisionMask: 0 // Disable collisions
    })
    Transform.getMutable(this.s0_Cable_03_OFF_01).parent = this.s0_Cables_Art_01

    // Cable_03_ON
    this.s0_Cable_03_ON_01 = engine.addEntity()
    Transform.create(this.s0_Cable_03_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Cable_03_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_03_ON_01.glb',
      visibleMeshesCollisionMask: 0 // Disable collisions
    })
    Transform.getMutable(this.s0_Cable_03_ON_01).parent = this.s0_Cables_Art_01

    // Cable_04_OFF
    this.s0_Cable_04_OFF_01 = engine.addEntity()
    Transform.create(this.s0_Cable_04_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Cable_04_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_04_OFF_01.glb',
      visibleMeshesCollisionMask: 0 // Disable collisions
    })
    Transform.getMutable(this.s0_Cable_04_OFF_01).parent = this.s0_Cables_Art_01

    // Cable_04_ON
    this.s0_Cable_04_ON_01 = engine.addEntity()
    Transform.create(this.s0_Cable_04_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Cable_04_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_04_ON_01.glb',
      visibleMeshesCollisionMask: 0 // Disable collisions
    })
    Transform.getMutable(this.s0_Cable_04_ON_01).parent = this.s0_Cables_Art_01

    //  NPC_Robot_Art

    this.s0_NPC_Robot_Art_1__01 = npc.create(
      {
        position: Vector3.create(110.37, 0.88, 85.24),
        rotation: Quaternion.create(0, 180, 0, -0.8192798),
        scale: Vector3.create(1, 1, 1)
      },
      {
        type: npc.NPCType.CUSTOM,
        model: 'assets/scene/models/unity_assets/s0_NPC_Robot_Art_1__01.glb',
        onActivate: () => {
          console.log('npc activated')
          openDialogWindow(this.s0_NPC_Robot_Art_1__01, this.gameController.dialog.toborDialog, 0)
        },
        onWalkAway: () => {
          console.log('walked away')
        },
        hoverText: 'Talk',
        idleAnim: 'Robot_Idle',
        faceUser: true,
        portrait: 'images/UI_NPC_Character_Robot_Idle.png',
        reactDistance: 1,
        onlyClickTrigger: true
      }
    )

    MeshCollider.setBox(this.s0_NPC_Robot_Art_1__01)
    Animator.createOrReplace(this.s0_NPC_Robot_Art_1__01, {
      states: [
        {
          clip: 'Robot_On',
          playing: true,
          loop: true
        },
        {
          clip: 'Robot_off',
          playing: true,
          loop: true
        },
        {
          clip: 'Walk_End',
          playing: true,
          loop: true
        },
        {
          clip: 'Walk_Loop',
          playing: true,
          loop: true
        },
        {
          clip: 'Walk_Start',
          playing: true,
          loop: true
        },
        {
          clip: 'Robot_Idle'
        },
        {
          clip: 'Talk'
        }
      ]
    })

    //Puzle machines
    this.s0_Puzlemachines_01 = engine.addEntity()
    Transform.create(this.s0_Puzlemachines_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(1, 1, 1)
    })
    //Cables
    this.s0_Cables_01 = engine.addEntity()
    Transform.create(this.s0_Cables_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Cables_01, {
      src: 'assets/scene/models/unity_assets/s0_Cables_01.glb'
    })
    Transform.getMutable(this.s0_Cables_01).parent = this.s0_Puzlemachines_01
    // Puzle_machines
    this.s0_Puzle_machines_01 = engine.addEntity()
    Transform.create(this.s0_Puzle_machines_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Puzle_machines_01, {
      src: 'assets/scene/models/unity_assets/s0_Puzle_machines_01.glb'
    })
    Transform.getMutable(this.s0_Puzle_machines_01).parent = this.s0_Puzlemachines_01

    // Sign_01_OFF
    this.s0_Sign_01_OFF_01 = engine.addEntity()
    Transform.create(this.s0_Sign_01_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Sign_01_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_Sign_01_OFF_01.glb'
    })
    Transform.getMutable(this.s0_Sign_01_OFF_01).parent = this.s0_Puzlemachines_01

    // Sign_01_ON
    this.s0_Sign_01_ON_01 = engine.addEntity()
    Transform.create(this.s0_Sign_01_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Sign_01_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_Sign_01_ON_01.glb'
    })
    Transform.getMutable(this.s0_Sign_01_ON_01).parent = this.s0_Puzlemachines_01

    // Sign_02_OFF
    this.s0_Sign_02_OFF_01 = engine.addEntity()
    Transform.create(this.s0_Sign_02_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Sign_02_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_Sign_02_OFF_01.glb'
    })
    Transform.getMutable(this.s0_Sign_02_OFF_01).parent = this.s0_Puzlemachines_01

    // Sign_02_ON
    this.s0_Sign_02_ON_01 = engine.addEntity()
    Transform.create(this.s0_Sign_02_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Sign_02_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_Sign_02_ON_01.glb'
    })
    Transform.getMutable(this.s0_Sign_02_ON_01).parent = this.s0_Puzlemachines_01

    // Sign_03_OFF
    this.s0_Sign_03_OFF_01 = engine.addEntity()
    Transform.create(this.s0_Sign_03_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Sign_03_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_Sign_03_OFF_01.glb'
    })
    Transform.getMutable(this.s0_Sign_03_OFF_01).parent = this.s0_Puzlemachines_01

    // Sign_03_ON
    this.s0_Sign_03_ON_01 = engine.addEntity()
    Transform.create(this.s0_Sign_03_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_Sign_03_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_Sign_03_ON_01.glb'
    })
    Transform.getMutable(this.s0_Sign_03_ON_01).parent = this.s0_Puzlemachines_01

    // Tube_01
    this.s0_tube_01_01 = engine.addEntity()
    Transform.create(this.s0_tube_01_01, {
      position: Vector3.create(98.704, 78.82, 140.141),
      rotation: Quaternion.create(0, 0.9999142, 0, -0.01309833),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_tube_01_01, {
      src: 'assets/scene/models/unity_assets/s0_tube_01_01.glb'
    })
    Transform.getMutable(this.s0_tube_01_01).parent = this.s0_Puzlemachines_01

    // Tube_01_OFF
    this.s0_tube_01_OFF_01 = engine.addEntity()
    Transform.create(this.s0_tube_01_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_tube_01_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_tube_01_OFF_01.glb'
    })
    Transform.getMutable(this.s0_tube_01_OFF_01).parent = this.s0_Puzlemachines_01

    // Tube_01_ON
    this.s0_tube_01_ON_01 = engine.addEntity()
    Transform.create(this.s0_tube_01_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_tube_01_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_tube_01_ON_01.glb'
    })
    Transform.getMutable(this.s0_tube_01_ON_01).parent = this.s0_Puzlemachines_01

    // Tube_02
    this.s0_tube_02_01 = engine.addEntity()
    Transform.create(this.s0_tube_02_01, {
      position: Vector3.create(98.704, 78.82, 140.141),
      rotation: Quaternion.create(0, 0.9999142, 0, -0.01309833),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_tube_02_01, {
      src: 'assets/scene/models/unity_assets/s0_tube_02_01.glb'
    })
    Transform.getMutable(this.s0_tube_02_01).parent = this.s0_Puzlemachines_01

    // Tube_02_OFF
    this.s0_tube_02_OFF_01 = engine.addEntity()
    Transform.create(this.s0_tube_02_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_tube_02_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_tube_02_OFF_01.glb'
    })
    Transform.getMutable(this.s0_tube_02_OFF_01).parent = this.s0_Puzlemachines_01

    // Tube_02_ON
    this.s0_tube_02_ON_01 = engine.addEntity()
    Transform.create(this.s0_tube_02_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_tube_02_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_tube_02_ON_01.glb'
    })
    Transform.getMutable(this.s0_tube_02_ON_01).parent = this.s0_Puzlemachines_01

    // Tube_03
    this.s0_tube_03_01 = engine.addEntity()
    Transform.create(this.s0_tube_03_01, {
      position: Vector3.create(98.704, 78.82, 140.141),
      rotation: Quaternion.create(0, 0.9999142, 0, -0.01309833),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_tube_03_01, {
      src: 'assets/scene/models/unity_assets/s0_tube_03_01.glb'
    })
    Transform.getMutable(this.s0_tube_03_01).parent = this.s0_Puzlemachines_01

    // Tube_03_OFF
    this.s0_tube_03_OFF_01 = engine.addEntity()
    Transform.create(this.s0_tube_03_OFF_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_tube_03_OFF_01, {
      src: 'assets/scene/models/unity_assets/s0_tube_03_OFF_01.glb'
    })
    Transform.getMutable(this.s0_tube_03_OFF_01).parent = this.s0_Puzlemachines_01

    // Tube_03_ON
    this.s0_tube_03_ON_01 = engine.addEntity()
    Transform.create(this.s0_tube_03_ON_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_tube_03_ON_01, {
      src: 'assets/scene/models/unity_assets/s0_tube_03_ON_01.glb'
    })
    Transform.getMutable(this.s0_tube_03_ON_01).parent = this.s0_Puzlemachines_01
    // En_DanceZone
    // this.s0_En_DanceZone_01 = engine.addEntity()
    // Transform.create(this.s0_En_DanceZone_01, {
    //   position: Vector3.create(163.995, 65.3468, 106.1981),
    //   rotation: Quaternion.create(0, 0.8192798, 0, 0.5733939),
    //   scale: Vector3.create(1, 1, 1)
    // })
    // // En_Npc1
    // this.s0_En_Npc1_01 = engine.addEntity()
    // MeshCollider.setCylinder(this.s0_En_Npc1_01)
    // Transform.create(this.s0_En_Npc1_01, {
    //   position: Vector3.create(160.0233, 66.64076, 104.139),
    //   rotation: Quaternion.create(0, 0.3281288, 0, 0.944633),
    //   scale: Vector3.create(0.7227439, 1.299883, 0.7050315)
    // })
    // Material.setPbrMaterial(this.s0_En_Npc1_01, {
    //   albedoColor: Color4.create(1, 1, 1, 0),
    //   metallic: 0,
    //   roughness: 0.5
    // })
  }
}
