import { Animator, engine, Entity, GltfContainer, Material, MeshCollider, MeshRenderer, Transform } from '@dcl/sdk/ecs'
import { Vector3, Quaternion, Color4 } from '@dcl/sdk/math'
import { GameController } from '../controllers/gameController'
import { EntityAction } from '~system/EngineApi'

export class MainInstace {
  // Debug Floor
  debugFloor: Entity
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
  s0_NPC_Robot_Art_1__01: Entity
  s0_Puzlemachines_01: Entity
  s0_Cables_01: Entity
  s0_Puzle_machines_01: Entity
  s0_Sign_01_OFF_01: Entity
  s0_Sign_01_ON_01: Entity
  s0_Sign_02_OFF_01: Entity
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
  s0_En_DanceZone_01: Entity
  s0_En_Npc1_01: Entity
  s0_NPC_FoxAnim_Art_01: Entity
  s0_En_Npc2_01: Entity
  s0_NPC_Raccoon_Art_01: Entity
  s0_En_Npc3_01: Entity
  s0_NPC_Raccoon02_Art_01: Entity
  s0_En_Portal_tobor_01: Entity
  s0_En_Tob_end_stairs_01: Entity
  s0_En_Tob_Pillar_01: Entity
  s0_Collider_Jump_01: Entity
  s0_En_Refresh_Button_01: Entity
  s0_En_Tob_Pillar_1__01: Entity
  s0_En_Tob_Pillar_2__01: Entity
  s0_En_PortalTitle_01: Entity
  s0_En_event_portal_01: Entity
  s0_En_event_portal_place_01: Entity
  s0_En_event_portal_gen_01: Entity
  s0_En_PortalTitle_1__01: Entity
  s0_En_PortalTitle_2__01: Entity
  s0_En_Tob_end_stairs_1__01: Entity
  s0_Collider_fix_01: Entity
  s0_En_refresh_buttons_01: Entity
  s0_TP_end_zone_01: Entity
  s0_TP_end_zone_target_01: Entity
  s0_COG_PilarPortal_01: Entity
  s0_Z3_Quest_Pillar_Art_1__01: Entity
  s0_Z3_Quest_Pillar_Art_2__01: Entity
  s0_Z3_Quest_Pillar_Art_3__01: Entity
  s0_Z3_Quest_Portal_Art_01: Entity
  s0_Z3_Quest_Pillar_Art_4__01: Entity
  s0_Z3_COG_01: Entity
  s0_Water_flower_art_01: Entity
  s0_Z3_Rock_1_art_11__01: Entity
  s0_First_island_art_1__01: Entity
  s0_hill_art_01: Entity
  s0_Z3_Rock_1_art_23__01: Entity
  s0_Z3_Env_Ground_Path_Art_01: Entity
  s0_Z3_Spark_Particle_Art_01: Entity
  s0_Z3_Spark_Particle_Art_1__01: Entity
  s0_Z3_Spark_Particle_Art_2__01: Entity
  s0_Z3_Str_Bridge_Art_1__01: Entity
  s0_Z3_Env_Rocks_Source_art_1__01: Entity
  s0_Z3_Env_Rocks_Source_art_2__01: Entity
  s0_Z3_Stones_2_art_1__01: Entity
  s0_Z3_Prop_Fence_Art_1__01: Entity
  s0_Z3_Prop_Fence_Art_2__01: Entity
  s0_Z3_Rock_4_art_3__01: Entity
  s0_Z3_Rock_3_art_1__01: Entity
  s0_Z3_Rock_4_art_5__01: Entity
  s0_Z3_Rock_4_art_4__01: Entity
  s0_WaterFall_01_Art_01: Entity
  s0_Z3_Prop_Fence_Art_3__01: Entity
  s0_Z3_Prop_Fence_Art_4__01: Entity
  s0_tree_03_low_1__01: Entity
  s0_tree_01_low_2__01: Entity
  s0_Z3_Env_Rocks_Source_art_7__01: Entity
  s0_Z3_Env_Rocks_Source_art_8__01: Entity
  s0_Z3_Prop_Fence_Art_5__01: Entity
  s0_Z3_Prop_Fence_Art_6__01: Entity
  s0_Z3_Prop_Fence_Art_7__01: Entity
  s0_Z3_Prop_Fence_Art_8__01: Entity
  s0_Z3_Prop_Fence_Art_9__01: Entity
  s0_Z3_Env_Rocks_Source_art_9__01: Entity
  s0_Z3_Prop_Stairs02_Art_1__01: Entity
  s0_Z3_Env_Rocks_Source_art_10__01: Entity
  s0_Z3_Prop_Fence_Art_10__01: Entity
  s0_Z3_Rock_3_art_4__01: Entity
  s0_Z3_Prop_Stairs02_Art_3__01: Entity
  s0_Z3_Prop_Fence_Art_11__01: Entity
  gameController: GameController
  constructor(gameController: GameController) {
    this.gameController = gameController
    //debug floor
    this.debugFloor = engine.addEntity()
    Transform.create(this.debugFloor, {
      position: Vector3.create(111.18, 90, 82.91),
      scale: Vector3.create(100, 1, 100)
    })
    MeshCollider.setBox(this.debugFloor)
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

    //NPC_Robot_Art (1)
    this.s0_NPC_Robot_Art_1__01 = engine.addEntity()
    Transform.create(this.s0_NPC_Robot_Art_1__01, {
      position: Vector3.create(218.95, 68.67, 127.08),
      rotation: Quaternion.create(0, 0.5733939, 0, -0.8192798),
      scale: Vector3.create(1, 1, 1)
    })
    GltfContainer.create(this.s0_NPC_Robot_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_NPC_Robot_Art_1__01.glb'
    })
    Animator.create(this.s0_NPC_Robot_Art_1__01, {
      states: [
        {
          clip: 'Robot_On'
        },
        {
          clip: 'Robot_off'
        },
        {
          clip: 'Walk_End'
        },
        {
          clip: 'Walk_Loop'
        },
        {
          clip: 'Walk_Start'
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
    this.s0_En_DanceZone_01 = engine.addEntity()
    Transform.create(this.s0_En_DanceZone_01, {
      position: Vector3.create(163.995, 65.3468, 106.1981),
      rotation: Quaternion.create(0, 0.8192798, 0, 0.5733939),
      scale: Vector3.create(1, 1, 1)
    })
    // En_Npc1
    this.s0_En_Npc1_01 = engine.addEntity()
    MeshCollider.setCylinder(this.s0_En_Npc1_01)
    Transform.create(this.s0_En_Npc1_01, {
      position: Vector3.create(160.0233, 66.64076, 104.139),
      rotation: Quaternion.create(0, 0.3281288, 0, 0.944633),
      scale: Vector3.create(0.7227439, 1.299883, 0.7050315)
    })
    Material.setPbrMaterial(this.s0_En_Npc1_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })
    // NPC_FoxAnim_Art
    this.s0_NPC_FoxAnim_Art_01 = engine.addEntity()
    Transform.create(this.s0_NPC_FoxAnim_Art_01, {
      position: Vector3.create(0, -1.12, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1.76666, 0.915751, 1.756506)
    })
    GltfContainer.create(this.s0_NPC_FoxAnim_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_NPC_FoxAnim_Art_01.glb'
    })
    Transform.getMutable(this.s0_NPC_FoxAnim_Art_01).parent = this.s0_En_Npc1_01
    Animator.create(this.s0_NPC_FoxAnim_Art_01, {
      states: [
        {
          clip: 'Idle'
        },
        {
          clip: 'Talk'
        },
        {
          clip: 'Hi'
        },
        {
          clip: 'Celebrate'
        },
        {
          clip: 'Bye'
        },
        {
          clip: 'Dance'
        }
      ]
    })
    // En_Npc2
    this.s0_En_Npc2_01 = engine.addEntity()
    MeshRenderer.setCylinder(this.s0_En_Npc2_01)
    Transform.create(this.s0_En_Npc2_01, {
      position: Vector3.create(170.31, 68.796, 159.06),
      rotation: Quaternion.create(0, -0.8144682, 0, -0.5802083),
      scale: Vector3.create(0.5411959, 0.9242249, 0.5888466)
    })
    Material.setPbrMaterial(this.s0_En_Npc2_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })
    // NPC_Raccoon_Art
    this.s0_NPC_Raccoon_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_NPC_Raccoon_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_NPC_Raccoon_Art_01.glb'
    })
    Animator.create(this.s0_NPC_Raccoon_Art_01, {
      states: [
        {
          clip: 'Idle'
        },
        {
          clip: 'Talk'
        },
        {
          clip: 'Hi'
        },
        {
          clip: 'Celebrate'
        },
        {
          clip: 'Bye'
        },
        {
          clip: 'Dance'
        }
      ]
    })
    Transform.create(this.s0_NPC_Raccoon_Art_01, {
      position: Vector3.create(0, -0.91, 0),
      rotation: Quaternion.create(0, 0.6327581, 0, -0.7743495),
      scale: Vector3.create(2.213552, 1.280694, 2.213552)
    })
    Transform.getMutable(this.s0_NPC_Raccoon_Art_01).parent = this.s0_En_Npc2_01
    // En_Npc3
    this.s0_En_Npc3_01 = engine.addEntity()
    MeshRenderer.setCylinder(this.s0_En_Npc3_01)
    Transform.create(this.s0_En_Npc3_01, {
      position: Vector3.create(111.05, 77.703, 138.8),
      rotation: Quaternion.create(0, 0.1980565, 0, 0.9801906),
      scale: Vector3.create(0.5411959, 0.9242249, 0.5888466)
    })
    Material.setPbrMaterial(this.s0_En_Npc3_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })
    // NPC_Raccoon02_Art
    this.s0_NPC_Raccoon02_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_NPC_Raccoon02_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_NPC_Raccoon02_Art_01.glb'
    })
    Animator.create(this.s0_NPC_Raccoon02_Art_01, {
      states: [
        {
          clip: 'Idle'
        },
        {
          clip: 'Talk'
        },
        {
          clip: 'Hi'
        },
        {
          clip: 'Celebrate'
        },
        {
          clip: 'Bye'
        },
        {
          clip: 'Dance'
        }
      ]
    })
    Transform.create(this.s0_NPC_Raccoon02_Art_01, {
      position: Vector3.create(0, -1.07, 0),
      rotation: Quaternion.create(0, 0.7446296, 0, -0.6674779),
      scale: Vector3.create(2.213551, 1.280694, 2.213551)
    })
    Transform.getMutable(this.s0_NPC_Raccoon02_Art_01).parent = this.s0_En_Npc3_01
    // En_Portal_tobor
    this.s0_En_Portal_tobor_01 = engine.addEntity()
    Transform.create(this.s0_En_Portal_tobor_01, {
      position: Vector3.create(117.2279, 80.72495, 113.0214),
      rotation: Quaternion.create(0, 0.2834864, 0, 0.9589763),
      scale: Vector3.create(1.743759, 1.614883, 1.668972)
    })

    // En_Tob_end_stairs
    this.s0_En_Tob_end_stairs_01 = engine.addEntity()
    Transform.create(this.s0_En_Tob_end_stairs_01, {
      position: Vector3.create(208.9, 66.2, 131.11),
      rotation: Quaternion.create(0, 0.8192798, 0, 0.5733939),
      scale: Vector3.create(1, 1, 1)
    })

    // En_Tob_Pillar
    this.s0_En_Tob_Pillar_01 = engine.addEntity()
    Transform.create(this.s0_En_Tob_Pillar_01, {
      position: Vector3.create(201.87, 64.04, 126.35),
      rotation: Quaternion.create(0, 0.8192798, 0, 0.5733939),
      scale: Vector3.create(1, 1, 1)
    })
    // Collider_Jump
    this.s0_Collider_Jump_01 = engine.addEntity()
    MeshCollider.setBox(this.s0_Collider_Jump_01)
    Transform.create(this.s0_Collider_Jump_01, {
      position: Vector3.create(217.46, 68.982, 132.86),
      rotation: Quaternion.create(0, 0.07401407, 0, 0.9972572),
      scale: Vector3.create(1, 1.1158, 7.276103)
    })
    Material.setPbrMaterial(this.s0_Collider_Jump_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })

    // En_Refresh_Button
    this.s0_En_Refresh_Button_01 = engine.addEntity()
    MeshCollider.setBox(this.s0_En_Refresh_Button_01)
    Transform.create(this.s0_En_Refresh_Button_01, {
      position: Vector3.create(94.673, 81.395, 108.771),
      rotation: Quaternion.create(0, -0.5867376, 0, 0.8097771),
      scale: Vector3.create(0.37496, 0.37496, 0.37496)
    })
    Material.setPbrMaterial(this.s0_En_Refresh_Button_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })
    // En_Tob_Pillar (1)
    this.s0_En_Tob_Pillar_1__01 = engine.addEntity()
    Transform.create(this.s0_En_Tob_Pillar_1__01, {
      position: Vector3.create(202.57, 64.04, 128.48),
      rotation: Quaternion.create(0, 0.8192798, 0, 0.5733939),
      scale: Vector3.create(1, 1, 1)
    })

    // En_Tob_Pillar (2)
    this.s0_En_Tob_Pillar_2__01 = engine.addEntity()
    Transform.create(this.s0_En_Tob_Pillar_2__01, {
      position: Vector3.create(197.67, 64.04, 123.08),
      rotation: Quaternion.create(0, 0.8192798, 0, 0.5733939),
      scale: Vector3.create(1, 1, 1)
    })

    // En_PortalTitle
    this.s0_En_PortalTitle_01 = engine.addEntity()
    Transform.create(this.s0_En_PortalTitle_01, {
      position: Vector3.create(101.57, 88.65, 98.1),
      rotation: Quaternion.create(0, 0.2126057, 0, 0.9771381),
      scale: Vector3.create(7.704423, 7.794932, 7.418799)
    })

    // En_event_portal
    this.s0_En_event_portal_01 = engine.addEntity()
    MeshCollider.setPlane(this.s0_En_event_portal_01)
    Transform.create(this.s0_En_event_portal_01, {
      position: Vector3.create(111.53, 83.78, 95.6),
      rotation: Quaternion.create(0, -0.1771433, 0, 0.984185),
      scale: Vector3.create(6.002286, 6.072799, 5.779765)
    })
    Material.setPbrMaterial(this.s0_En_event_portal_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })
    // En_event_portal_place
    this.s0_En_event_portal_place_01 = engine.addEntity()
    MeshCollider.setPlane(this.s0_En_event_portal_place_01)
    Transform.create(this.s0_En_event_portal_place_01, {
      position: Vector3.create(94, 83.63, 103.94),
      rotation: Quaternion.create(0, 0.6127018, 0, 0.7903143),
      scale: Vector3.create(6.132771, 6.204816, 5.905412)
    })
    Material.setPbrMaterial(this.s0_En_event_portal_place_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })

    // En_event_portal_gen
    this.s0_En_event_portal_gen_01 = engine.addEntity()
    MeshCollider.setPlane(this.s0_En_event_portal_gen_01)
    Transform.create(this.s0_En_event_portal_gen_01, {
      position: Vector3.create(100.92, 84.46, 96.76),
      rotation: Quaternion.create(0, 0.2126057, 0, 0.9771381),
      scale: Vector3.create(7.704423, 7.794932, 7.418799)
    })
    Material.setPbrMaterial(this.s0_En_event_portal_gen_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })

    // En_PortalTitle (1)
    this.s0_En_PortalTitle_1__01 = engine.addEntity()
    Transform.create(this.s0_En_PortalTitle_1__01, {
      position: Vector3.create(111, 87.41, 96.95),
      rotation: Quaternion.create(0, -0.181126, 0, 0.9834599),
      scale: Vector3.create(7.704423, 7.794932, 7.418799)
    })
    Material.setPbrMaterial(this.s0_En_PortalTitle_1__01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })

    // En_PortalTitle (2)
    this.s0_En_PortalTitle_2__01 = engine.addEntity()
    Transform.create(this.s0_En_PortalTitle_2__01, {
      position: Vector3.create(95.16, 87.434, 104.23),
      rotation: Quaternion.create(0, 0.6043715, 0, 0.7967026),
      scale: Vector3.create(7.704423, 7.794932, 7.418799)
    })
    Material.setPbrMaterial(this.s0_En_PortalTitle_2__01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })

    // En_Tob_end_stairs (1)
    this.s0_En_Tob_end_stairs_1__01 = engine.addEntity()
    Transform.create(this.s0_En_Tob_end_stairs_1__01, {
      position: Vector3.create(215.989, 69.987, 131.326),
      rotation: Quaternion.create(0, 0.8192798, 0, 0.5733939),
      scale: Vector3.create(1, 1, 1)
    })
    Material.setPbrMaterial(this.s0_En_Tob_end_stairs_1__01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })

    // Collider_fix
    this.s0_Collider_fix_01 = engine.addEntity()
    MeshCollider.setBox(this.s0_Collider_fix_01)
    Transform.create(this.s0_Collider_fix_01, {
      position: Vector3.create(213.63, 68.55, 128.62),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(7.128148, 8.568233, 1.828106)
    })
    Material.setPbrMaterial(this.s0_Collider_fix_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })
    // En_refresh_buttons
    this.s0_En_refresh_buttons_01 = engine.addEntity()
    MeshCollider.setBox(this.s0_En_refresh_buttons_01)
    Transform.create(this.s0_En_refresh_buttons_01, {
      position: Vector3.create(115.4, 81.423, 99.197),
      rotation: Quaternion.create(0, -0.4024695, 0, 0.9154335),
      scale: Vector3.create(0.4107975, 0.4107975, 0.4107975)
    })
    Material.setPbrMaterial(this.s0_En_refresh_buttons_01, {
      albedoColor: Color4.create(1, 1, 1, 0),
      metallic: 0,
      roughness: 0.5
    })

    // TP_end_zone
    this.s0_TP_end_zone_01 = engine.addEntity()
    Transform.create(this.s0_TP_end_zone_01, {
      position: Vector3.create(75.53, 56.53, 81.92),
      rotation: Quaternion.create(0, 1, 0, 0),
      scale: Vector3.create(1, 1, 1)
    })

    // TP_end_zone_target
    this.s0_TP_end_zone_target_01 = engine.addEntity()
    Transform.create(this.s0_TP_end_zone_target_01, {
      position: Vector3.create(49.28, 51.17, 64.75),
      rotation: Quaternion.create(0, 0.2843479, 0, 0.9587212),
      scale: Vector3.create(1, 1, 1)
    })

    // COG_PilarPortal
    this.s0_COG_PilarPortal_01 = engine.addEntity()
    Transform.create(this.s0_COG_PilarPortal_01, {
      position: Vector3.create(6.7, 13.133, 16.1),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(0.91157, 0.8188, 0.8188)
    })
    // Z3_Quest_Pillar_Art (1)
    this.s0_Z3_Quest_Pillar_Art_1__01 = engine.addEntity()
    Transform.create(this.s0_Z3_Quest_Pillar_Art_1__01, {
      position: Vector3.create(183.3, 66.29, 176.7),
      rotation: Quaternion.create(0, -0.466931, 0, -0.8842939),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Quest_Pillar_Art_1__01).parent = this.s0_COG_PilarPortal_01
    GltfContainer.create(this.s0_Z3_Quest_Pillar_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Quest_Pillar_Art_1__01.glb'
    })
    Animator.create(this.s0_Z3_Quest_Pillar_Art_1__01, {
      states: [
        {
          clip: 'Pillar_Anim'
        },
        {
          clip: 'Pillar_OFF'
        },
        {
          clip: 'Pillar_ON'
        }
      ]
    })
    // Z3_Quest_Pillar_Art (2)
    this.s0_Z3_Quest_Pillar_Art_2__01 = engine.addEntity()
    Transform.create(this.s0_Z3_Quest_Pillar_Art_2__01, {
      position: Vector3.create(104.1551, 77.08, 168.3558),
      rotation: Quaternion.create(0, -0.09689378, 0, 0.9952947),
      scale: Vector3.create(1.6048, 1.6048, 1.6048)
    })
    Transform.getMutable(this.s0_Z3_Quest_Pillar_Art_2__01).parent = this.s0_COG_PilarPortal_01
    GltfContainer.create(this.s0_Z3_Quest_Pillar_Art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Quest_Pillar_Art_1__01.glb'
    })
    Animator.create(this.s0_Z3_Quest_Pillar_Art_2__01, {
      states: [
        {
          clip: 'Pillar_Anim'
        },
        {
          clip: 'Pillar_OFF'
        },
        {
          clip: 'Pillar_ON'
        }
      ]
    })
    // Z3_Quest_Pillar_Art (3)
    this.s0_Z3_Quest_Pillar_Art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Quest_Pillar_Art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Quest_Pillar_Art_1__01.glb'
    })
    Animator.create(this.s0_Z3_Quest_Pillar_Art_3__01, {
      states: [
        {
          clip: 'Pillar_Anim'
        },
        {
          clip: 'Pillar_OFF'
        },
        {
          clip: 'Pillar_ON'
        }
      ]
    })
    Transform.create(this.s0_Z3_Quest_Pillar_Art_3__01, {
      position: Vector3.create(173.39, 62.54, 102.69),
      rotation: Quaternion.create(0, -0.9981871, 0, -0.06018815),
      scale: Vector3.create(1.384564, 1.384564, 1.384564)
    })
    Transform.getMutable(this.s0_Z3_Quest_Pillar_Art_3__01).parent = this.s0_COG_PilarPortal_01
    // Z3_Quest_Portal_Art
    this.s0_Z3_Quest_Portal_Art_01 = engine.addEntity()
    Transform.create(this.s0_Z3_Quest_Portal_Art_01, {
      position: Vector3.create(110.9949, 83.6, 113.4351),
      rotation: Quaternion.create(0, 0.9719909, 0, -0.2350187),
      scale: Vector3.create(1.972255, 1.972255, 1.972255)
    })
    Transform.getMutable(this.s0_Z3_Quest_Portal_Art_01).parent = this.s0_COG_PilarPortal_01
    GltfContainer.create(this.s0_Z3_Quest_Portal_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Quest_Portal_Art_01.glb'
    })
    Animator.create(this.s0_Z3_Quest_Portal_Art_01, {
      states: [
        {
          clip: 'Portal_Activate'
        },
        {
          clip: 'Portal_On'
        }
      ]
    })
    //Z3_Quest_Pillar_Art (4)
    this.s0_Z3_Quest_Pillar_Art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Quest_Pillar_Art_4__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Quest_Pillar_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Quest_Pillar_Art_4__01, {
      position: Vector3.create(215.44, 61.28, 131.09),
      rotation: Quaternion.create(0, -0.9944587, 0, -0.1051282),
      scale: Vector3.create(1.384564, 1.384564, 1.384564)
    })
    Transform.getMutable(this.s0_Z3_Quest_Pillar_Art_4__01).parent = this.s0_COG_PilarPortal_01
    Animator.create(this.s0_Z3_Quest_Pillar_Art_4__01, {
      states: [
        {
          clip: 'Portal_Activate'
        },
        {
          clip: 'Portal_On'
        }
      ]
    })
    // Z3_COG
    this.s0_Z3_COG_01 = engine.addEntity()
    Transform.create(this.s0_Z3_COG_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(1, 1, 1)
    })

    // Water_flower_art
    this.s0_Water_flower_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Water_flower_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Water_flower_art_01.glb'
    })
    Transform.create(this.s0_Water_flower_art_01, {
      position: Vector3.create(223.91, 68.175, 130.12),
      rotation: Quaternion.create(0.334179, 0.6231568, -0.6231568, 0.334179),
      scale: Vector3.create(11.93056, 11.93056, 0.4132324)
    })
    Transform.getMutable(this.s0_Water_flower_art_01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (11)
    this.s0_Z3_Rock_1_art_11__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_11__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_11__01, {
      position: Vector3.create(221.418, 67.998, 129.012),
      rotation: Quaternion.create(0, 0.9412391, 0, 0.3377411),
      scale: Vector3.create(1, 0.40172, 1)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_11__01).parent = this.s0_Z3_COG_01

    // First_island_art (1)
    this.s0_First_island_art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_First_island_art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_First_island_art_1__01.glb'
    })
    Transform.create(this.s0_First_island_art_1__01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_First_island_art_1__01).parent = this.s0_Z3_COG_01

    // hill_art
    this.s0_hill_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_01, {
      position: Vector3.create(86.73, 76.75, 153.24),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(535.7891, 0.5213402, 421.3752)
    })
    Transform.getMutable(this.s0_hill_art_01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (23)
    this.s0_Z3_Rock_1_art_23__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_23__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_23__01, {
      position: Vector3.create(152.04, 69.508, 160.759),
      rotation: Quaternion.create(-0.07405313, 0.8895323, 0.4230936, 0.1556928),
      scale: Vector3.create(0.8902232, 0.8902231, 0.8902232)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_23__01).parent = this.s0_Z3_COG_01

    // Env Ground Path Art
    this.s0_Z3_Env_Ground_Path_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Env_Ground_Path_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Ground_Path_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Env_Ground_Path_Art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Env_Ground_Path_Art_01).parent = this.s0_Z3_COG_01

    // Spark Particle Art
    this.s0_Z3_Spark_Particle_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Spark_Particle_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Spark_Particle_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Spark_Particle_Art_01, {
      position: Vector3.create(66.09074, 56.26, 126.5646),
      rotation: Quaternion.create(0, 0.999676, 0, 0.02545354),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Spark_Particle_Art_01).parent = this.s0_Z3_COG_01

    // Spark Particle Art (1)
    this.s0_Z3_Spark_Particle_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Spark_Particle_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Spark_Particle_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Spark_Particle_Art_1__01, {
      position: Vector3.create(63.66463, 57.079, 136.917),
      rotation: Quaternion.create(0, 0.9982452, 0, -0.05921458),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Spark_Particle_Art_1__01).parent = this.s0_Z3_COG_01
    // Spark Particle Art (2)
    this.s0_Z3_Spark_Particle_Art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Spark_Particle_Art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Spark_Particle_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Spark_Particle_Art_2__01, {
      position: Vector3.create(55.6111, 55.4457, 132.7891),
      rotation: Quaternion.create(0, 0.9982452, 0, -0.05921458),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Spark_Particle_Art_2__01).parent = this.s0_Z3_COG_01
    // Z3_Str_Bridge_Art (1)
    this.s0_Z3_Str_Bridge_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Str_Bridge_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Str_Bridge_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Str_Bridge_Art_1__01, {
      position: Vector3.create(168.97, 64.8, 127.8),
      rotation: Quaternion.create(-0.05043528, 0.6673019, -0.0625742, 0.7404385),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Str_Bridge_Art_1__01).parent = this.s0_Z3_COG_01
    Animator.create(this.s0_Z3_Str_Bridge_Art_1__01, {
      states: [
        {
          clip: 'Bridge On'
        },
        {
          clip: 'Bridge Off'
        },
        { clip: 'Bridge Animation' }
      ]
    })
    // s0_Z3_Env_Rocks_Source_art_1__01
    this.s0_Z3_Env_Rocks_Source_art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Env_Rocks_Source_art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Rocks_Source_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Rocks_Source_art_1__01, {
      position: Vector3.create(215.22, 63.33, 150.98),
      rotation: Quaternion.create(0, 0.930903, 0, 0.3652665),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Env_Rocks_Source_art_1__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Env_Rocks_Source_art_2__01
    this.s0_Z3_Env_Rocks_Source_art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Env_Rocks_Source_art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Rocks_Source_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Rocks_Source_art_2__01, {
      position: Vector3.create(200.21, 61.94, 146.16),
      rotation: Quaternion.create(0, 0.5808504, 0, 0.8140104),
      scale: Vector3.create(0.71268, 0.71268, 0.71268)
    })
    Transform.getMutable(this.s0_Z3_Env_Rocks_Source_art_2__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Stones_2_art_1__01
    this.s0_Z3_Stones_2_art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_1__01, {
      position: Vector3.create(214.49, 63.15, 133.82),
      rotation: Quaternion.create(0.03354913, 0.06380252, -0.03454083, -0.9968002),
      scale: Vector3.create(1.487528, 1.487528, 1.487528)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_1__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Prop_Fence_Art_1__01
    this.s0_Z3_Prop_Fence_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_1__01, {
      position: Vector3.create(178.51, 64.95, 121.37),
      rotation: Quaternion.create(0, 0.4341149, 0, -0.9008575),
      scale: Vector3.create(0.9254594, 0.9254596, 0.9254594)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_1__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Prop_Fence_Art_2__01
    this.s0_Z3_Prop_Fence_Art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_2__01, {
      position: Vector3.create(186.65, 64.95, 109.92),
      rotation: Quaternion.create(0, -0.3092289, 0, -0.9509876),
      scale: Vector3.create(0.9254596, 0.9254596, 0.9254596)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_2__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Rock_4_art_3__01
    this.s0_Z3_Rock_4_art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_4_art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_4_art_3__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_4_art_3__01, {
      position: Vector3.create(170.4319, 67.34, 92.40508),
      rotation: Quaternion.create(0, 0.9749904, 0, 0.2222471),
      scale: Vector3.create(1.9165, 1.9165, 1.9165)
    })
    Transform.getMutable(this.s0_Z3_Rock_4_art_3__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Rock_3_art_1__01
    this.s0_Z3_Rock_3_art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_1__01, {
      position: Vector3.create(166.38, 66.923, 90.871),
      rotation: Quaternion.create(0, 0.5119029, 0, 0.8590434),
      scale: Vector3.create(5.322257, 5.322257, 5.322257)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_1__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Rock_4_art_5__01
    this.s0_Z3_Rock_4_art_5__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_4_art_5__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_4_art_3__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_4_art_5__01, {
      position: Vector3.create(172.2324, 65.8, 93.43739),
      rotation: Quaternion.create(0, 0.5946123, 0, 0.8040127),
      scale: Vector3.create(3.560282, 3.560282, 3.560282)
    })
    Transform.getMutable(this.s0_Z3_Rock_4_art_5__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Rock_4_art_4__01
    this.s0_Z3_Rock_4_art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_4_art_4__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_4_art_3__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_4_art_4__01, {
      position: Vector3.create(163.2195, 66.7, 91.3668),
      rotation: Quaternion.create(0, 0.5609317, 0, 0.8278622),
      scale: Vector3.create(1.9165, 1.9165, 1.9165)
    })
    Transform.getMutable(this.s0_Z3_Rock_4_art_4__01).parent = this.s0_Z3_COG_01

    // // s0_WaterFall_01_Art_01 //out of boundaries
    this.s0_WaterFall_01_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_WaterFall_01_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_WaterFall_01_Art_01.glb'
    })
    Transform.create(this.s0_WaterFall_01_Art_01, {
      position: Vector3.create(-38.5, -48.82, 278.49),
      rotation: Quaternion.create(0, 0.8777911, 0, -0.4790436),
      scale: Vector3.create(1, 1.5479, 1)
    })
    Transform.getMutable(this.s0_WaterFall_01_Art_01).parent = this.s0_Z3_COG_01

    // s0_Z3_Prop_Fence_Art_3__01
    this.s0_Z3_Prop_Fence_Art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_3__01, {
      position: Vector3.create(155.39, 65.32, 108.44),
      rotation: Quaternion.create(0, 0.9415457, 0, -0.3368853),
      scale: Vector3.create(0.8329136, 0.8329136, 0.8329136)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_3__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Rock_2_art_1__01
    this.s0_Z3_Prop_Fence_Art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_4__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_4__01, {
      position: Vector3.create(161.91, 65.3, 119.29),
      rotation: Quaternion.create(0, 0.7264178, 0, -0.6872534),
      scale: Vector3.create(0.8329136, 0.8329136, 0.8329136)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_4__01).parent = this.s0_Z3_COG_01

    // s0_tree_03_low_1__01
    this.s0_tree_03_low_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_tree_03_low_1__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_03_low_1__01.glb'
    })
    Transform.create(this.s0_tree_03_low_1__01, {
      position: Vector3.create(202.54, 62.33, 89.51),
      rotation: Quaternion.create(-0.08595863, 0.7018085, -0.02535971, 0.7067056),
      scale: Vector3.create(0.6700001, 0.67, 0.67)
    })
    Transform.getMutable(this.s0_tree_03_low_1__01).parent = this.s0_Z3_COG_01

    // s0_tree_01_low_2__01
    this.s0_tree_01_low_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_tree_01_low_2__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_01_low_2__01.glb'
    })
    Transform.create(this.s0_tree_01_low_2__01, {
      position: Vector3.create(85.93191, 71.77234, 124.3781),
      rotation: Quaternion.create(-0.1887354, 0.3204681, -0.02042198, -0.9280422),
      scale: Vector3.create(4.458337, 5.161417, 4.458337)
    })
    Transform.getMutable(this.s0_tree_01_low_2__01).parent = this.s0_Z3_COG_01

    // s0_Z3_Env_Rocks_Source_art_7__01
    this.s0_Z3_Env_Rocks_Source_art_7__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Env_Rocks_Source_art_7__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Rocks_Source_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Rocks_Source_art_7__01, {
      position: Vector3.create(78.8, 70.6, 108),
      rotation: Quaternion.create(-0.008075671, -0.04389482, 0.1807627, 0.9825135),
      scale: Vector3.create(1.671406, 2.564438, 1.671406)
    })
    Transform.getMutable(this.s0_Z3_Env_Rocks_Source_art_7__01).parent = this.s0_Z3_COG_01
    // s0_Z3_Env_Rocks_Source_art_8__01
    this.s0_Z3_Env_Rocks_Source_art_8__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Env_Rocks_Source_art_8__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Rocks_Source_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Rocks_Source_art_8__01, {
      position: Vector3.create(85.02691, 72.84566, 85.61805),
      rotation: Quaternion.create(-0.09187576, -0.4993799, 0.1558821, 0.8472776),
      scale: Vector3.create(1.671406, 2.564438, 1.671406)
    })
    Transform.getMutable(this.s0_Z3_Env_Rocks_Source_art_8__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Fence_Art (5)
    this.s0_Z3_Prop_Fence_Art_5__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_5__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_5__01, {
      position: Vector3.create(159.16, 67.49, 142.8),
      rotation: Quaternion.create(0, 0.999782, 0, -0.0208787),
      scale: Vector3.create(1.351069, 1.351069, 1.351069)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_5__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Fence_Art (6)
    this.s0_Z3_Prop_Fence_Art_6__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_6__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_6__01, {
      position: Vector3.create(180.3, 67.31, 145.32),
      rotation: Quaternion.create(0, 0.4008912, 0, 0.9161257),
      scale: Vector3.create(1.242984, 1.242984, 1.242984)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_6__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Fence_Art (7)
    this.s0_Z3_Prop_Fence_Art_7__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_7__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_7__01, {
      position: Vector3.create(161.07, 68.38, 170),
      rotation: Quaternion.create(0, -0.7574033, 0, 0.6529475),
      scale: Vector3.create(1.242984, 1.242984, 1.242984)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_7__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Fence_Art (8)
    this.s0_Z3_Prop_Fence_Art_8__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_8__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_8__01, {
      position: Vector3.create(134.31, 69.17, 164.75),
      rotation: Quaternion.create(0, -0.8056092, 0, 0.5924473),
      scale: Vector3.create(1.251684, 1.251684, 1.251684)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_8__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Fence_Art (9)
    this.s0_Z3_Prop_Fence_Art_9__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_9__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_9__01, {
      position: Vector3.create(147.91, 69.19, 147.64),
      rotation: Quaternion.create(0, 0.7120361, 0, 0.7021429),
      scale: Vector3.create(1.242984, 1.242984, 1.242984)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_9__01).parent = this.s0_Z3_COG_01
    // Z3_Env_Rocks_Source_art (9)
    this.s0_Z3_Env_Rocks_Source_art_9__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Env_Rocks_Source_art_9__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Rocks_Source_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Rocks_Source_art_9__01, {
      position: Vector3.create(123.73, 66.18, 162.49),
      rotation: Quaternion.create(0, -0.3216151, 0, -0.9468705),
      scale: Vector3.create(0.84586, 0.84586, 0.84586)
    })
    Transform.getMutable(this.s0_Z3_Env_Rocks_Source_art_9__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs02_Art (1)
    this.s0_Z3_Prop_Stairs02_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs02_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs02_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs02_Art_1__01, {
      position: Vector3.create(160.4091, 68.32256, 156.3544),
      rotation: Quaternion.create(0.02351463, 0.7664961, 0.02810948, -0.6412027),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs02_Art_1__01).parent = this.s0_Z3_COG_01
    // Z3_Env_Rocks_Source_art (10)
    this.s0_Z3_Env_Rocks_Source_art_10__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Env_Rocks_Source_art_10__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Rocks_Source_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Rocks_Source_art_10__01, {
      position: Vector3.create(116, 70.18, 157.76),
      rotation: Quaternion.create(0, -0.5921, 0, -0.8058645),
      scale: Vector3.create(0.84586, 0.84586, 0.84586)
    })
    Transform.getMutable(this.s0_Z3_Env_Rocks_Source_art_10__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Fence_Art (10)
    this.s0_Z3_Prop_Fence_Art_10__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_10__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_10__01, {
      position: Vector3.create(139.48, 71.66, 123.19),
      rotation: Quaternion.create(0, 0.4260163, 0, 0.9047156),
      scale: Vector3.create(1.242984, 1.242984, 1.242984)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_10__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_3_art (4)
    this.s0_Z3_Rock_3_art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_4__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_4__01, {
      position: Vector3.create(139.56, 70.16, 141.95),
      rotation: Quaternion.create(-0.002405938, -0.1273662, -0.0611503, 0.989966),
      scale: Vector3.create(2.754061, 2.754061, 2.75406)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_4__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs02_Art (3)
    this.s0_Z3_Prop_Stairs02_Art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs02_Art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs02_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs02_Art_3__01, {
      position: Vector3.create(136.0051, 71.21258, 149.773),
      rotation: Quaternion.create(0.008620821, 0.9542052, 0.02762668, -0.29775),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs02_Art_3__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Fence_Art (11)
    this.s0_Z3_Prop_Fence_Art_11__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_11__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_11__01, {
      position: Vector3.create(147.54, 69.12, 167.16),
      rotation: Quaternion.create(0, -0.2778702, 0, 0.9606187),
      scale: Vector3.create(1.251684, 1.272235, 1.210179)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_11__01).parent = this.s0_Z3_COG_01
  }
}
