import { Animator, engine, Entity, GltfContainer, Material, MeshCollider, MeshRenderer, Transform } from '@dcl/sdk/ecs'
import { Vector3, Quaternion, Color4 } from '@dcl/sdk/math'
import { GameController } from '../controllers/gameController'
import { EntityAction } from '~system/EngineApi'

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
  // s0_WaterFall_01_Art_01: Entity
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
  s0_Main_Island_art_01: Entity = engine.addEntity()
  s0_Z3_Rock_3_art_12__01: Entity = engine.addEntity()
  s0_Z1_Out_IslandBase_Art_189__01: Entity = engine.addEntity()
  s0_Z3_Str_Lamp_Art_1__01: Entity = engine.addEntity()
  s0_Z3_Rock_1_art_12__01: Entity = engine.addEntity()
  s0_Z3_Rock_2_art_33__01: Entity = engine.addEntity()
  s0_Z3_Prop_Stairs03_Art_14__01: Entity = engine.addEntity()
  s0_Z3_Env_Mountain_Low_Art_10__01: Entity = engine.addEntity()
  s0_Z3_Env_Mountain_Low_Art_9__01: Entity = engine.addEntity()
  s0_Z3_Stones_2_art_28__01: Entity = engine.addEntity()
  s0_Z1_Out_IslandBase_Art_186__01: Entity = engine.addEntity()
  s0_Z3_Stones_2_art_26__01: Entity = engine.addEntity()
  s0_Z3_Stones_2_art_25__01: Entity = engine.addEntity()
  s0_Z3_Stones_2_art_24__01: Entity = engine.addEntity()
  s0_Z3_Rock_1_art_10__01: Entity = engine.addEntity()
  s0_Z3_Rock_2_art_31__01: Entity = engine.addEntity()
  s0_Z3_Env_Mountain_Low_Art_8__01: Entity = engine.addEntity()
  s0_Z3_Prop_Stairs03_Art_16__01: Entity = engine.addEntity()
  s0_Z3_Prop_Stairs03_Art_15__01: Entity = engine.addEntity()
  s0_Z3_Prop_Stairs03_Art_17__01: Entity = engine.addEntity()
  s0_Z3_Prop_Fence_Art_25__01: Entity = engine.addEntity()
  s0_Z3_Rock_1_art_9__01: Entity = engine.addEntity()
  s0_Z3_Rock_4_art_23__01: Entity = engine.addEntity()
  s0_Z3_Rock_2_art_34__01: Entity = engine.addEntity()
  s0_Z3_Rock_4_art_20__01: Entity = engine.addEntity()
  s0_Z3_Rock_2_art_28__01: Entity = engine.addEntity()
  s0_Z3_Prop_Stairs02_Art_10__01: Entity = engine.addEntity()
  s0_Z3_Quest_BoxMat_art_3__01: Entity = engine.addEntity()
  s0_Z3_Rock_4_art_21__01: Entity = engine.addEntity()
  s0_Z3_Stones_2_art_29__01: Entity = engine.addEntity()
  s0_Z3_Rock_2_art_30__01: Entity = engine.addEntity()
  s0_tree_01_low_36__01: Entity = engine.addEntity()
  s0_tree_02_low_72__01: Entity = engine.addEntity()
  s0_tree_02_low_58__01: Entity = engine.addEntity()
  s0_tree_02_low_73__01: Entity = engine.addEntity()
  s0_tree_02_low_59__01: Entity = engine.addEntity()
  s0_tree_02_low_77__01: Entity = engine.addEntity()
  s0_tree_02_low_76__01: Entity = engine.addEntity()
  s0_tree_01_low_43__01: Entity = engine.addEntity()
  s0_tree_01_low_44__01: Entity = engine.addEntity()
  s0_tree_02_low_79__01: Entity = engine.addEntity()
  s0_tree_02_low_78__01: Entity = engine.addEntity()
  s0_tree_02_low_84__01: Entity = engine.addEntity()
  s0_Z3_Stones_2_art_31__01: Entity = engine.addEntity()
  s0_Z3_Rock_4_art_26__01: Entity = engine.addEntity()
  s0_Z3_Rock_4_art_25__01: Entity = engine.addEntity()
  s0_Z3_Quest_BoxTri_art_3__01: Entity = engine.addEntity()
  s0_Z3_Prop_Stairs02_Art_11__01: Entity = engine.addEntity()
  s0_Z3_Rock_2_art_36__01: Entity = engine.addEntity()
  s0_Z3_Rock_2_art_35__01: Entity = engine.addEntity()
  s0_Z3_Stones_2_art_23__01: Entity = engine.addEntity()
  s0_tree_02_low_81__01: Entity = engine.addEntity()
  s0_tree_02_low_80__01: Entity = engine.addEntity()
  s0_tree_01_low_45__01: Entity = engine.addEntity()
  s0_WaterFall_02_Art_01: Entity = engine.addEntity()
  s0_tree_02_low_83__01: Entity = engine.addEntity()
  s0_tree_02_low_82__01: Entity = engine.addEntity()
  s0_tree_01_low_46__01: Entity = engine.addEntity()
  s0_Z3_Str_Dancing_Station_Art_01: Entity = engine.addEntity()
  s0_EmoteZone_01: Entity = engine.addEntity()
  s0_tick_1_01: Entity
  s0_tick_2_01: Entity
  s0_tick_3_01: Entity
  s0_smallislands_01: Entity
  s0_Bridge_Platform_Art_3__01: Entity
  s0_Bridge_Platform_Art_2__01: Entity
  s0_Bridge_Platform_Art_1__01: Entity
  s0_Bridge_Platform_Art_01: Entity
  s0_Z3_Str_Wereable_Station_Art_01: Entity
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
    // this.s0_WaterFall_01_Art_01 = engine.addEntity()
    // GltfContainer.create(this.s0_WaterFall_01_Art_01, {
    //   src: 'assets/scene/models/unity_assets/s0_WaterFall_01_Art_01.glb'
    // })
    // Transform.create(this.s0_WaterFall_01_Art_01, {
    //   position: Vector3.create(-38.5, -48.82, 278.49),
    //   rotation: Quaternion.create(0, 0.8777911, 0, -0.4790436),
    //   scale: Vector3.create(1, 1.5479, 1)
    // })
    // Transform.getMutable(this.s0_WaterFall_01_Art_01).parent = this.s0_Z3_COG_01

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

    //DEFER_LOADING
    console.log('onSceneReadyObservable called. loading non critical values', 'Main_Island_art')
    // Main_Island_art
    GltfContainer.create(this.s0_Main_Island_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Main_Island_art_01.glb'
    })
    Transform.create(this.s0_Main_Island_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Main_Island_art_01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (12)
    GltfContainer.create(this.s0_Z3_Rock_3_art_12__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_12__01, {
      position: Vector3.create(154.62, 68.94, 154.68),
      rotation: Quaternion.create(-0.08939721, 0.8494771, 0.07567111, 0.5144615),
      scale: Vector3.create(1.211787, 1.211787, 1.211787)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_12__01).parent = this.s0_Z3_COG_01
    // Z1_Out_IslandBase_Art (189)¿
    GltfContainer.create(this.s0_Z1_Out_IslandBase_Art_189__01, {
      src: 'assets/scene/models/unity_assets/s0_Z1_Out_IslandBase_Art_189__01.glb'
    })
    Transform.create(this.s0_Z1_Out_IslandBase_Art_189__01, {
      position: Vector3.create(212.1419, 64, 131.2289),
      rotation: Quaternion.create(0, -0.7082617, 0, 0.70595),
      scale: Vector3.create(0.1198232, 0.1442395, 0.1812038)
    })
    Transform.getMutable(this.s0_Z1_Out_IslandBase_Art_189__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_1_art (12)
    GltfContainer.create(this.s0_Z3_Rock_1_art_12__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_12__01, {
      position: Vector3.create(208.3835, 64.28, 132.334),
      rotation: Quaternion.create(0, 0.06130404, 0, 0.9981192),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_12__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_2_art (33)
    GltfContainer.create(this.s0_Z3_Rock_2_art_33__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_2_art_33__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_2_art_33__01, {
      position: Vector3.create(213.0146, 64.77, 127.0058),
      rotation: Quaternion.create(0, -0.9935821, 0, -0.1131134),
      scale: Vector3.create(1.077553, 1.077553, 1.077553)
    })
    Transform.getMutable(this.s0_Z3_Rock_2_art_33__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs03_Art (14)
    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_14__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_14__01, {
      position: Vector3.create(212.3836, 67.383, 132.7915),
      rotation: Quaternion.create(-0.05257276, 0.6781474, 0.04408246, 0.7317168),
      scale: Vector3.create(0.589233, 0.589233, 0.6497013)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_14__01).parent = this.s0_Z3_COG_01
    // Z3_Env_Mountain_Low_Art (10)
    GltfContainer.create(this.s0_Z3_Env_Mountain_Low_Art_10__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Mountain_Low_Art_10__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Mountain_Low_Art_10__01, {
      position: Vector3.create(211.9249, 60.758, 151.3174),
      rotation: Quaternion.create(0, -0.5946434, 0, 0.8039896),
      scale: Vector3.create(0.2456171, 0.245617, 0.2456171)
    })
    Transform.getMutable(this.s0_Z3_Env_Mountain_Low_Art_10__01).parent = this.s0_Z3_COG_01
    // Z3_Env_Mountain_Low_Art (9)
    GltfContainer.create(this.s0_Z3_Env_Mountain_Low_Art_9__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Mountain_Low_Art_10__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Mountain_Low_Art_9__01, {
      position: Vector3.create(235.9233, 64.933, 142.5481),
      rotation: Quaternion.create(0, 0.3518605, 0, 0.9360524),
      scale: Vector3.create(0.1281433, 0.1281433, 0.1281433)
    })
    Transform.getMutable(this.s0_Z3_Env_Mountain_Low_Art_9__01).parent = this.s0_Z3_COG_01
    // Z3_Stones_2_art (28)
    GltfContainer.create(this.s0_Z3_Stones_2_art_28__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_28__01, {
      position: Vector3.create(202.5701, 64.536, 141.6531),
      rotation: Quaternion.create(0, -0.1879164, 0, 0.982185),
      scale: Vector3.create(0.5451291, 0.5451291, 0.5451291)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_28__01).parent = this.s0_Z3_COG_01
    // Z1_Out_IslandBase_Art (186)
    GltfContainer.create(this.s0_Z1_Out_IslandBase_Art_186__01, {
      src: 'assets/scene/models/unity_assets/s0_Z1_Out_IslandBase_Art_189__01.glb'
    })
    Transform.create(this.s0_Z1_Out_IslandBase_Art_186__01, {
      position: Vector3.create(211.4, 63.29, 131.3507),
      rotation: Quaternion.create(0, -0.7082617, 0, 0.70595),
      scale: Vector3.create(0.09153531, 0.1442395, -0.1981825)
    })
    Transform.getMutable(this.s0_Z1_Out_IslandBase_Art_186__01).parent = this.s0_Z3_COG_01
    // Z3_Stones_2_art (26)
    this.s0_Z3_Stones_2_art_26__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_26__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_26__01, {
      position: Vector3.create(201.8501, 64.559, 142.5211),
      rotation: Quaternion.create(0, 0.4932317, 0, 0.869898),
      scale: Vector3.create(0.8476401, 0.84764, 0.8476401)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_26__01).parent = this.s0_Z3_COG_01
    // Z3_Stones_2_art (25)
    this.s0_Z3_Stones_2_art_25__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_25__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_25__01, {
      position: Vector3.create(205.0161, 64.536, 141.7511),
      rotation: Quaternion.create(0, 0.01234137, 0, 0.9999239),
      scale: Vector3.create(0.545129, 0.5451291, 0.545129)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_25__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (24)
    this.s0_Z3_Stones_2_art_24__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_24__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_24__01, {
      position: Vector3.create(206.2241, 64.536, 141.2121),
      rotation: Quaternion.create(0, -0.9774786, 0, 0.2110346),
      scale: Vector3.create(0.5451291, 0.5451291, 0.5451291)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_24__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_1_art (10)

    GltfContainer.create(this.s0_Z3_Rock_1_art_10__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_10__01, {
      position: Vector3.create(204.3261, 64.63499, 142.9231),
      rotation: Quaternion.create(0, 0.2062869, 0, 0.9784916),
      scale: Vector3.create(0.65838, 0.65838, 0.65838)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_10__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_2_art (31)

    GltfContainer.create(this.s0_Z3_Rock_2_art_31__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_2_art_33__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_2_art_31__01, {
      position: Vector3.create(202.7241, 64.845, 142.7541),
      rotation: Quaternion.create(0, -0.9900247, 0, -0.1408944),
      scale: Vector3.create(-0.484333, 0.41538, 0.4153799)
    })
    Transform.getMutable(this.s0_Z3_Rock_2_art_31__01).parent = this.s0_Z3_COG_01
    // Z3_Env_Mountain_Low_Art (8)

    GltfContainer.create(this.s0_Z3_Env_Mountain_Low_Art_8__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Mountain_Low_Art_10__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Mountain_Low_Art_8__01, {
      position: Vector3.create(214.368, 63.41, 143.4479),
      rotation: Quaternion.create(0, -0.6470218, 0, 0.7624714),
      scale: Vector3.create(0.1710182, 0.1710182, 0.1710182)
    })
    Transform.getMutable(this.s0_Z3_Env_Mountain_Low_Art_8__01).parent = this.s0_Z3_COG_01

    // Z3_Prop_Stairs03_Art (16)

    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_16__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_16__01, {
      position: Vector3.create(213.8911, 68.073, 132.8966),
      rotation: Quaternion.create(-0.05257276, 0.6781474, 0.04408246, 0.7317168),
      scale: Vector3.create(0.589233, 0.589233, 0.6497013)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_16__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs03_Art (15)

    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_15__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_15__01, {
      position: Vector3.create(209.2941, 66, 132.565),
      rotation: Quaternion.create(-0.05257276, 0.6781474, 0.04408246, 0.7317168),
      scale: Vector3.create(0.589233, 0.589233, 0.6497013)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_15__01).parent = this.s0_Z3_COG_01

    // Z3_Prop_Stairs03_Art (17)

    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_17__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_17__01, {
      position: Vector3.create(210.8017, 66.68799, 132.6701),
      rotation: Quaternion.create(-0.05257276, 0.6781474, 0.04408246, 0.7317168),
      scale: Vector3.create(0.589233, 0.589233, 0.6497013)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_17__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Fence_Art (25)

    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_25__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_25__01, {
      position: Vector3.create(218.04, 68.77, 125.87),
      rotation: Quaternion.create(-0.01471912, 0.8331946, 0.003384584, 0.5527737),
      scale: Vector3.create(0.740853, 0.740853, -0.6122104)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_25__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (9)

    GltfContainer.create(this.s0_Z3_Rock_1_art_9__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_9__01, {
      position: Vector3.create(208.5201, 64.28, 129.5102),
      rotation: Quaternion.create(0, 0.7691315, 0, 0.6390904),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_9__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_4_art (23)

    GltfContainer.create(this.s0_Z3_Rock_4_art_23__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_4_art_3__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_4_art_23__01, {
      position: Vector3.create(155.5343, 65.757, 110.3461),
      rotation: Quaternion.create(0, 0.6233831, 0, 0.7819167),
      scale: Vector3.create(0.7139001, 0.57482, 1)
    })
    Transform.getMutable(this.s0_Z3_Rock_4_art_23__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_2_art (34)

    GltfContainer.create(this.s0_Z3_Rock_2_art_34__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_2_art_33__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_2_art_34__01, {
      position: Vector3.create(158.74, 65.45, 112.98),
      rotation: Quaternion.create(0, -0.8600142, 0, 0.5102703),
      scale: Vector3.create(0.3594771, 0.3594771, 0.3594771)
    })
    Transform.getMutable(this.s0_Z3_Rock_2_art_34__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_4_art (20)

    GltfContainer.create(this.s0_Z3_Rock_4_art_20__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_4_art_3__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_4_art_20__01, {
      position: Vector3.create(157.2419, 66.41599, 116.034),
      rotation: Quaternion.create(0, -0.1962901, 0, 0.9805459),
      scale: Vector3.create(0.7139001, 0.57482, 1)
    })
    Transform.getMutable(this.s0_Z3_Rock_4_art_20__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_2_art (28)

    GltfContainer.create(this.s0_Z3_Rock_2_art_28__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_2_art_33__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_2_art_28__01, {
      position: Vector3.create(158.4294, 65.45, 112.3735),
      rotation: Quaternion.create(0, -0.7429489, 0, -0.6693481),
      scale: Vector3.create(0.3594771, 0.3594771, 0.3594771)
    })
    Transform.getMutable(this.s0_Z3_Rock_2_art_28__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs02_Art (10)

    GltfContainer.create(this.s0_Z3_Prop_Stairs02_Art_10__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs02_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs02_Art_10__01, {
      position: Vector3.create(179.3299, 67.77914, 146.2965),
      rotation: Quaternion.create(0.02742634, -0.905489, 0.07525457, 0.4167424),
      scale: Vector3.create(0.756205, 1.012941, -0.75151)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs02_Art_10__01).parent = this.s0_Z3_COG_01
    // Z3_Quest_BoxMat_art (3)

    GltfContainer.create(this.s0_Z3_Quest_BoxMat_art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Quest_BoxMat_art_3__01.glb'
    })
    Animator.create(this.s0_Z3_Quest_BoxMat_art_3__01, {
      states: [{ clip: 'Box_02_Anim' }, { clip: 'Box_02_Static' }]
    })
    Transform.create(this.s0_Z3_Quest_BoxMat_art_3__01, {
      position: Vector3.create(181.981, 69.778, 151.457),
      rotation: Quaternion.create(0.01691751, -0.5336378, 0.0008390199, -0.8455436),
      scale: Vector3.create(0.1720035, 0.1720035, 0.1720035)
    })
    Transform.getMutable(this.s0_Z3_Quest_BoxMat_art_3__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_4_art (21)

    GltfContainer.create(this.s0_Z3_Rock_4_art_21__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_4_art_3__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_4_art_21__01, {
      position: Vector3.create(178.09, 67.9, 151.71),
      rotation: Quaternion.create(0.006462086, -0.9924242, 0.01565726, 0.1216853),
      scale: Vector3.create(0.68929, 0.68929, 0.68929)
    })
    Transform.getMutable(this.s0_Z3_Rock_4_art_21__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (29)

    GltfContainer.create(this.s0_Z3_Stones_2_art_29__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_29__01, {
      position: Vector3.create(176.8049, 67.9, 151.4244),
      rotation: Quaternion.create(-0.004560137, -0.9577522, 0.01631288, 0.2870956),
      scale: Vector3.create(0.67779, 0.67779, 0.67779)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_29__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_2_art (30)

    GltfContainer.create(this.s0_Z3_Rock_2_art_30__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_2_art_33__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_2_art_30__01, {
      position: Vector3.create(177.7684, 68.14859, 150.3806),
      rotation: Quaternion.create(0.001589979, 0.820996, -0.01686352, -0.5706827),
      scale: Vector3.create(0.3594771, 0.3594771, 0.3594771)
    })
    Transform.getMutable(this.s0_Z3_Rock_2_art_30__01).parent = this.s0_Z3_COG_01

    // tree_01_low (36)

    GltfContainer.create(this.s0_tree_01_low_36__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_01_low_2__01.glb'
    })
    Transform.create(this.s0_tree_01_low_36__01, {
      position: Vector3.create(152.5932, 73.987, 175.4607),
      rotation: Quaternion.create(-0.04839908, 0.2493305, 0.03204292, 0.9666774),
      scale: Vector3.create(0.423418, 0.423418, 0.423418)
    })
    Transform.getMutable(this.s0_tree_01_low_36__01).parent = this.s0_Z3_COG_01
    // tree_02_low (72)

    GltfContainer.create(this.s0_tree_02_low_72__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_72__01, {
      position: Vector3.create(153.2513, 74.337, 177.0125),
      rotation: Quaternion.create(0, -0.8815752, 0, -0.4720436),
      scale: Vector3.create(0.7356974, 0.7356974, 0.7356974)
    })
    Transform.getMutable(this.s0_tree_02_low_72__01).parent = this.s0_Z3_COG_01

    // tree_02_low (58)

    GltfContainer.create(this.s0_tree_02_low_58__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_58__01, {
      position: Vector3.create(151.38, 74.08, 176.81),
      rotation: Quaternion.create(0, 0.1712118, 0, -0.9852343),
      scale: Vector3.create(0.5340133, 0.5340133, 0.5340133)
    })
    Transform.getMutable(this.s0_tree_02_low_58__01).parent = this.s0_Z3_COG_01
    // tree_02_low (73)

    GltfContainer.create(this.s0_tree_02_low_73__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_73__01, {
      position: Vector3.create(141.4435, 80.69, 87.32304),
      rotation: Quaternion.create(0, -0.885258, 0, 0.4651004),
      scale: Vector3.create(0.5261371, 0.5261371, 0.5261371)
    })
    Transform.getMutable(this.s0_tree_02_low_73__01).parent = this.s0_Z3_COG_01

    // tree_02_low (59)

    GltfContainer.create(this.s0_tree_02_low_59__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_59__01, {
      position: Vector3.create(141.2173, 80.506, 88.41279),
      rotation: Quaternion.create(0, -0.7196492, 0, -0.694338),
      scale: Vector3.create(0.3819018, 0.3819018, 0.3819018)
    })
    Transform.getMutable(this.s0_tree_02_low_59__01).parent = this.s0_Z3_COG_01
    // tree_02_low (77)

    GltfContainer.create(this.s0_tree_02_low_77__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_77__01, {
      position: Vector3.create(185.6171, 72.67031, 89.53943),
      rotation: Quaternion.create(-0.002946104, -0.01354656, -0.01588215, -0.9997778),
      scale: Vector3.create(0.5340133, 0.5340133, 0.5340134)
    })
    Transform.getMutable(this.s0_tree_02_low_77__01).parent = this.s0_Z3_COG_01

    // tree_02_low (76)

    GltfContainer.create(this.s0_tree_02_low_76__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_76__01, {
      position: Vector3.create(187.4253, 72.98783, 89.05113),
      rotation: Quaternion.create(0.0141527, -0.953422, -0.007786125, -0.3012069),
      scale: Vector3.create(0.7356975, 0.7356974, 0.7356974)
    })
    Transform.getMutable(this.s0_tree_02_low_76__01).parent = this.s0_Z3_COG_01
    // tree_01_low (43)

    GltfContainer.create(this.s0_tree_01_low_43__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_01_low_2__01.glb'
    })
    Transform.create(this.s0_tree_01_low_43__01, {
      position: Vector3.create(186.2607, 72.60842, 87.84151),
      rotation: Quaternion.create(-0.04549899, 0.4226004, 0.05607864, 0.9034346),
      scale: Vector3.create(0.423418, 0.423418, 0.423418)
    })
    Transform.getMutable(this.s0_tree_01_low_43__01).parent = this.s0_Z3_COG_01

    // tree_01_low (44)

    GltfContainer.create(this.s0_tree_01_low_44__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_01_low_2__01.glb'
    })
    Transform.create(this.s0_tree_01_low_44__01, {
      position: Vector3.create(102.43, 78.73, 169.28),
      rotation: Quaternion.create(-0.04549899, 0.4226004, 0.05607864, 0.9034346),
      scale: Vector3.create(0.423418, 0.423418, -0.3921994)
    })
    Transform.getMutable(this.s0_tree_01_low_44__01).parent = this.s0_Z3_COG_01
    // tree_02_low (79)

    GltfContainer.create(this.s0_tree_02_low_79__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_79__01, {
      position: Vector3.create(100.847, 79.02801, 169.49),
      rotation: Quaternion.create(0.0141527, -0.953422, -0.007786125, -0.3012069),
      scale: Vector3.create(-0.6814545, 0.7356974, 0.7356974)
    })
    Transform.getMutable(this.s0_tree_02_low_79__01).parent = this.s0_Z3_COG_01

    // tree_02_low (78)

    GltfContainer.create(this.s0_tree_02_low_78__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_78__01, {
      position: Vector3.create(101.83, 78.79301, 170.99),
      rotation: Quaternion.create(-0.002946104, -0.01354656, -0.01588215, -0.9997778),
      scale: Vector3.create(-0.4946405, 0.5340133, 0.5340134)
    })
    Transform.getMutable(this.s0_tree_02_low_78__01).parent = this.s0_Z3_COG_01

    // tree_02_low (84)

    GltfContainer.create(this.s0_tree_02_low_84__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_84__01, {
      position: Vector3.create(144.38, 78.28, 90.9),
      rotation: Quaternion.create(0, -0.994014, 0, 0.1092531),
      scale: Vector3.create(1.1883, 1.1883, 1.1883)
    })
    Transform.getMutable(this.s0_tree_02_low_84__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (31)

    GltfContainer.create(this.s0_Z3_Stones_2_art_31__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_31__01, {
      position: Vector3.create(166.2518, 67.97604, 169.0748),
      rotation: Quaternion.create(0.001622778, 0.4854141, 0.01004922, 0.8742252),
      scale: Vector3.create(0.67779, 0.6777899, 0.67779)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_31__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_4_art (26)

    GltfContainer.create(this.s0_Z3_Rock_4_art_26__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_4_art_3__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_4_art_26__01, {
      position: Vector3.create(165.9962, 68.01357, 170.774),
      rotation: Quaternion.create(0.01017501, -0.7671711, 0.0002987393, 0.6413618),
      scale: Vector3.create(0.68929, 0.68929, 0.6892899)
    })
    Transform.getMutable(this.s0_Z3_Rock_4_art_26__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_4_art (25)

    GltfContainer.create(this.s0_Z3_Rock_4_art_25__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_4_art_3__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_4_art_25__01, {
      position: Vector3.create(161.4029, 67.99108, 166.7252),
      rotation: Quaternion.create(0.01017501, -0.7671711, 0.0002987393, 0.6413618),
      scale: Vector3.create(0.68929, 0.68929, 0.6892899)
    })
    Transform.getMutable(this.s0_Z3_Rock_4_art_25__01).parent = this.s0_Z3_COG_01
    // Z3_Quest_BoxTri_art (3)

    GltfContainer.create(this.s0_Z3_Quest_BoxTri_art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Quest_BoxTri_art_3__01.glb'
    })
    Animator.create(this.s0_Z3_Quest_BoxTri_art_3__01, {
      states: [
        {
          clip: 'Box_01_Anim'
        },
        {
          clip: 'Box_01_Static'
        }
      ]
    })
    Transform.create(this.s0_Z3_Quest_BoxTri_art_3__01, {
      position: Vector3.create(161.35, 70.48, 171.47),
      rotation: Quaternion.create(-0.08285215, -0.3634197, -0.006515909, 0.9279113),
      scale: Vector3.create(0.1720034, 0.1720035, 0.1720034)
    })
    Transform.getMutable(this.s0_Z3_Quest_BoxTri_art_3__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs02_Art (11)

    GltfContainer.create(this.s0_Z3_Prop_Stairs02_Art_11__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs02_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs02_Art_11__01, {
      position: Vector3.create(166.3977, 68.32661, 168.2689),
      rotation: Quaternion.create(0.02096506, 0.9395424, -0.09750051, 0.3275887),
      scale: Vector3.create(0.756205, 1.012941, -0.7515101)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs02_Art_11__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_2_art (36)

    GltfContainer.create(this.s0_Z3_Rock_2_art_36__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_2_art_33__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_2_art_36__01, {
      position: Vector3.create(165.6915, 68.31629, 169.6171),
      rotation: Quaternion.create(-0.003915887, -0.2687367, -0.009396045, -0.9631599),
      scale: Vector3.create(0.3594771, 0.3594771, 0.3594771)
    })
    Transform.getMutable(this.s0_Z3_Rock_2_art_36__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_2_art (35)

    GltfContainer.create(this.s0_Z3_Rock_2_art_35__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_2_art_33__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_2_art_35__01, {
      position: Vector3.create(162.2049, 68.29691, 166.7295),
      rotation: Quaternion.create(-0.008128874, 0.9997261, 0.006127074, -0.02107305),
      scale: Vector3.create(0.3594771, 0.3594771, 0.3594771)
    })
    Transform.getMutable(this.s0_Z3_Rock_2_art_35__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (23)

    GltfContainer.create(this.s0_Z3_Stones_2_art_23__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_23__01, {
      position: Vector3.create(162.4607, 67.95438, 165.9784),
      rotation: Quaternion.create(-0.0003536752, 0.6454959, 0.01017322, 0.7636958),
      scale: Vector3.create(0.67779, 0.6777899, 0.67779)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_23__01).parent = this.s0_Z3_COG_01
    // tree_02_low (81)

    GltfContainer.create(this.s0_tree_02_low_81__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_81__01, {
      position: Vector3.create(228.47, 77.30701, 131.68),
      rotation: Quaternion.create(0, 0.7649515, 0, -0.644088),
      scale: Vector3.create(0.2490197, 0.2490197, 0.2490197)
    })
    Transform.getMutable(this.s0_tree_02_low_81__01).parent = this.s0_Z3_COG_01

    // tree_02_low (80)

    GltfContainer.create(this.s0_tree_02_low_80__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_80__01, {
      position: Vector3.create(228.52, 77.426, 132.55),
      rotation: Quaternion.create(0, -0.371183, 0, -0.9285598),
      scale: Vector3.create(0.3430684, 0.3430684, 0.3430684)
    })
    Transform.getMutable(this.s0_tree_02_low_80__01).parent = this.s0_Z3_COG_01

    // tree_01_low (45)

    GltfContainer.create(this.s0_tree_01_low_45__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_01_low_2__01.glb'
    })
    Transform.create(this.s0_tree_01_low_45__01, {
      position: Vector3.create(229.18, 77.26301, 132.13),
      rotation: Quaternion.create(-0.05766755, -0.4310675, -0.006608698, 0.9004509),
      scale: Vector3.create(0.1974471, 0.1974471, 0.1974471)
    })
    Transform.getMutable(this.s0_tree_01_low_45__01).parent = this.s0_Z3_COG_01

    // WaterFall_02_Art

    GltfContainer.create(this.s0_WaterFall_02_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_WaterFall_02_Art_01.glb'
    })
    Transform.create(this.s0_WaterFall_02_Art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_WaterFall_02_Art_01).parent = this.s0_Z3_COG_01

    // tree_02_low (83)

    GltfContainer.create(this.s0_tree_02_low_83__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_83__01, {
      position: Vector3.create(198.29, 71.233, 158.5),
      rotation: Quaternion.create(-0.002946104, -0.01354656, -0.01588215, -0.9997778),
      scale: Vector3.create(-0.4946405, 0.5340133, 0.5340134)
    })
    Transform.getMutable(this.s0_tree_02_low_83__01).parent = this.s0_Z3_COG_01
    // tree_02_low (82)

    GltfContainer.create(this.s0_tree_02_low_82__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_82__01, {
      position: Vector3.create(197.307, 71.468, 157),
      rotation: Quaternion.create(0.0141527, -0.953422, -0.007786125, -0.3012069),
      scale: Vector3.create(-0.6814545, 0.7356974, 0.7356974)
    })
    Transform.getMutable(this.s0_tree_02_low_82__01).parent = this.s0_Z3_COG_01

    // tree_01_low (46)

    GltfContainer.create(this.s0_tree_01_low_46__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_01_low_2__01.glb'
    })
    Transform.create(this.s0_tree_01_low_46__01, {
      position: Vector3.create(198.89, 71.17, 156.79),
      rotation: Quaternion.create(-0.04549899, 0.4226004, 0.05607864, 0.9034346),
      scale: Vector3.create(0.423418, 0.423418, -0.3921994)
    })
    Transform.getMutable(this.s0_tree_01_low_46__01).parent = this.s0_Z3_COG_01

    // Z3_Str_Dancing_Station_Art

    Transform.create(this.s0_Z3_Str_Dancing_Station_Art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Str_Dancing_Station_Art_01).parent = this.s0_Z3_COG_01

    //DEFER_LOADING
    console.log('onSceneReadyObservable called. loading non critical values', 'EmoteZone')
    // EmoteZone
    GltfContainer.create(this.s0_EmoteZone_01, { src: 'assets/scene/models/unity_assets/s0_EmoteZone_01.glb' })
    Transform.create(this.s0_EmoteZone_01, {
      position: Vector3.create(160.517, 66.56356, 104.0188),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_EmoteZone_01).parent = this.s0_Z3_Str_Dancing_Station_Art_01
    // tick_1
    this.s0_tick_1_01 = engine.addEntity()
    GltfContainer.create(this.s0_tick_1_01, { src: 'assets/scene/models/unity_assets/s0_tick_1_01.glb' })
    Transform.create(this.s0_tick_1_01, {
      position: Vector3.create(157.366, 66.76084, 104.8572),
      rotation: Quaternion.create(5.825006e-17, -0.0475723, 5.825006e-17, -0.9988678),
      scale: Vector3.create(2.017242, 0.1470411, 0.06610861)
    })
    Transform.getMutable(this.s0_tick_1_01).parent = this.s0_Z3_Str_Dancing_Station_Art_01

    // tick_2
    this.s0_tick_2_01 = engine.addEntity()
    GltfContainer.create(this.s0_tick_2_01, { src: 'assets/scene/models/unity_assets/s0_tick_2_01.glb' })
    Transform.create(this.s0_tick_2_01, {
      position: Vector3.create(157.5212, 66.75648, 105.5075),
      rotation: Quaternion.create(4.757887e-17, -0.2023015, 4.757888e-17, -0.9793233),
      scale: Vector3.create(2.017242, 0.1470411, 0.06610861)
    })
    Transform.getMutable(this.s0_tick_2_01).parent = this.s0_Z3_Str_Dancing_Station_Art_01
    // tick_3
    this.s0_tick_3_01 = engine.addEntity()
    GltfContainer.create(this.s0_tick_3_01, { src: 'assets/scene/models/unity_assets/s0_tick_3_01.glb' })
    Transform.create(this.s0_tick_3_01, {
      position: Vector3.create(157.8082, 66.75357, 106.1788),
      rotation: Quaternion.create(4.433242e-17, -0.2454148, 4.433243e-17, -0.9694182),
      scale: Vector3.create(2.017242, 0.1470411, 0.06610861)
    })
    Transform.getMutable(this.s0_tick_3_01).parent = this.s0_Z3_Str_Dancing_Station_Art_01
    // smallislands
    this.s0_smallislands_01 = engine.addEntity()
    GltfContainer.create(this.s0_smallislands_01, { src: 'assets/scene/models/unity_assets/s0_smallislands_01.glb' })
    Transform.create(this.s0_smallislands_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_smallislands_01).parent = this.s0_Z3_COG_01
    // Bridge_Platform_Art (3)
    this.s0_Bridge_Platform_Art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Bridge_Platform_Art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Bridge_Platform_Art_3__01.glb'
    })
    Transform.create(this.s0_Bridge_Platform_Art_3__01, {
      position: Vector3.create(168.26, 66.849, 134.67),
      rotation: Quaternion.create(0, 0.7432014, 0, -0.6690679),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Bridge_Platform_Art_3__01).parent = this.s0_Z3_COG_01

    // Bridge_Platform_Art (2)
    this.s0_Bridge_Platform_Art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_Bridge_Platform_Art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Bridge_Platform_Art_3__01.glb'
    })
    Transform.create(this.s0_Bridge_Platform_Art_2__01, {
      position: Vector3.create(169.719, 64.919, 120.528),
      rotation: Quaternion.create(-0.02635495, 0.6681669, -0.02930534, 0.7429668),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Bridge_Platform_Art_2__01).parent = this.s0_Z3_COG_01
    // Bridge_Platform_Art (1)
    this.s0_Bridge_Platform_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Bridge_Platform_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Bridge_Platform_Art_3__01.glb'
    })
    Transform.create(this.s0_Bridge_Platform_Art_1__01, {
      position: Vector3.create(183.5, 64.579, 116.67),
      rotation: Quaternion.create(-0.01036501, 0.9585552, -0.004272395, 0.2846865),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Bridge_Platform_Art_1__01).parent = this.s0_Z3_COG_01

    // Bridge_Platform_Art
    this.s0_Bridge_Platform_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Bridge_Platform_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Bridge_Platform_Art_3__01.glb'
    })
    Transform.create(this.s0_Bridge_Platform_Art_01, {
      position: Vector3.create(195.492, 63.979, 124.528),
      rotation: Quaternion.create(0.00123994, 0.2876681, 0.01104244, -0.9576657),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Bridge_Platform_Art_01).parent = this.s0_Z3_COG_01
    // Z3_Str_Wereable_Station_Art
    this.s0_Z3_Str_Wereable_Station_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Str_Wereable_Station_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Str_Wereable_Station_Art_01.glb'
    })
    Animator.create(this.s0_Z3_Str_Wereable_Station_Art_01, {
      states: [{ clip: 'TakeWEA' }]
    })
    Transform.create(this.s0_Z3_Str_Wereable_Station_Art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Str_Wereable_Station_Art_01).parent = this.s0_Z3_COG_01
  }
}
