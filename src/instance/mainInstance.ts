import {
  Animator,
  engine,
  Entity,
  GltfContainer,
  Material,
  MeshCollider,
  MeshRenderer,
  TextureWrapMode,
  Transform
} from '@dcl/sdk/ecs'
import { Vector3, Quaternion, Color4 } from '@dcl/sdk/math'
import { GameController } from '../controllers/gameController'

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
  s0_tree_fall_art_01: Entity
  s0_Main_Island_02_art_01: Entity
  s0_tree_01_low_1__01: Entity
  s0_tree_01_low_01: Entity
  s0_tree_03_low_01: Entity
  s0_Z3_veg_BigTrees_Art_01: Entity
  s0_BigTree_01_01: Entity
  s0_BigTree_02_01: Entity
  s0_Z3_Stones_2_art_01: Entity
  s0_Z3_Env_Rocks_Source_art_01: Entity
  s0_Z3_Str_Bridge_Art_01: Entity
  s0_Chunk_03_grass_art_01: Entity
  s0_Chunk_03_trees_art_01: Entity
  s0_Chunk_02_trees_art_01: Entity
  s0_Chunk_02_art_01: Entity
  s0_Chunk_01_art_01: Entity
  s0_Chunk_02_entrance_art_01: Entity
  s0_Chunk_04_grass_02_art_01: Entity
  s0_Chunk_04_grass_art_01: Entity
  s0_Chunk_04_trees_art_01: Entity
  s0_Chunk_04_art_01: Entity
  s0_Chunk_05_02_art_01: Entity
  s0_Chunk_05_03_art_01: Entity
  s0_Chunk_05_art_01: Entity
  s0_Z3_Rock_1_art_14__01: Entity
  s0_Z3_Stones_2_art_12__01: Entity
  s0_Z3_Stones_2_art_13__01: Entity
  s0_Z3_Rock_1_art_17__01: Entity
  s0_Z3_Stones_2_art_14__01: Entity
  s0_Z3_Stones_2_art_17__01: Entity
  s0_Z3_Rock_3_art_19__01: Entity
  s0_Z3_Stones_2_art_47__01: Entity
  s0_Z3_Rock_3_art_30__01: Entity
  s0_Z3_Rock_3_art_32__01: Entity
  // s0_WaterFall_01_Art_1__01: Entity //out of boundaries
  // s0_WaterFall_01_Art_2__01: Entity
  s0_Z3_Prop_Stairs03_Art_1__01: Entity
  s0_Z3_Prop_Stairs03_Art_2__01: Entity
  s0_Z3_Rock_3_art_33__01: Entity
  s0_Z3_Rock_2_art_37__01: Entity
  s0_Z3_Prop_Stairs03_Art_5__01: Entity
  s0_Z3_Prop_Stairs02_Art_4__01: Entity
  s0_Z3_Prop_Stairs03_Art_6__01: Entity
  s0_Z3_Prop_Stairs03_Art_7__01: Entity
  s0_Z3_Prop_Stairs03_Art_8__01: Entity
  s0_Z3_Rock_3_art_36__01: Entity
  s0_Z3_Rock_1_art_24__01: Entity
  s0_Z3_Rock_3_art_37__01: Entity
  s0_Z3_Rock_3_art_38__01: Entity
  s0_hill_art_8__01: Entity
  s0_hill_art_15__01: Entity
  s0_hill_art_32__01: Entity
  s0_hill_art_33__01: Entity
  s0_hill_art_34__01: Entity
  s0_hill_art_35__01: Entity
  s0_hill_art_45__01: Entity
  s0_Z3_Rock_3_art_39__01: Entity
  s0_Z3_Rock_3_art_40__01: Entity
  s0_Z3_Rock_3_art_41__01: Entity
  s0_Z3_Stones_2_art_27__01: Entity
  s0_Z3_Prop_Fence_Art_27__01: Entity
  s0_Z3_Rock_1_art_13__01: Entity
  s0_Z3_Rock_1_art_15__01: Entity
  s0_Z3_Rock_1_art_16__01: Entity
  s0_Z3_Rock_1_art_18__01: Entity
  s0_Z3_Rock_1_art_19__01: Entity
  s0_Z3_Rock_1_art_25__01: Entity
  s0_Z3_Rock_1_art_26__01: Entity
  s0_Z3_Stones_2_art_30__01: Entity
  s0_Z3_Stones_2_art_32__01: Entity
  s0_hill_art_1__01: Entity
  s0_Z3_Rock_3_art_6__01: Entity
  s0_hill_art_2__01: Entity
  s0_hill_art_3__01: Entity
  s0_Z3_Rock_3_art_42__01: Entity
  s0_Z3_Stones_2_art_33__01: Entity
  s0_Z3_Stones_2_art_34__01: Entity
  s0_tree_02_low_85__01: Entity
  s0_tree_02_low_60__01: Entity
  s0_Z3_Rock_1_art_27__01: Entity
  s0_hill_art_36__01: Entity
  s0_Z3_Prop_Stairs02_Art_5__01: Entity
  s0_Z3_Rock_3_art_43__01: Entity
  s0_Z3_Rock_1_art_28__01: Entity
  s0_Z3_Stones_2_art_35__01: Entity
  s0_Z3_Rock_3_art_44__01: Entity
  s0_Det_Butterfly_chunk02_Art_01: Entity
  s0_Fence_Art_01: Entity
  s0_Fence_Art_02: Entity
  s0_Landscape_2_Art_1__01: Entity
  s0_fog_01_art_1__01: Entity
  s0_fog_01_art_2__01: Entity
  s0_COG_Landscape_Planes_01: Entity
  s0_fog_01_art_3__01: Entity
  s0_fog_01_art_4__01: Entity
  s0_fog_01_art_5__01: Entity
  s0_fog_01_art_6__01: Entity
  s0_fog_01_art_7__01: Entity
  s0_fog_01_art_8__01: Entity
  s0_fog_01_art_9__01: Entity
  s0_fog_01_art_10__01: Entity
  s0_fog_01_art_01: Entity
  s0_fog_01_art_11__01: Entity
  s0_fog_01_art_12__01: Entity
  s0_fog_01_art_13__01: Entity
  s0_fog_01_art_14__01: Entity
  s0_fog_01_art_15__01: Entity
  s0_fog_01_art_16__01: Entity
  s0_fog_01_art_17__01: Entity
  s0_fog_01_art_18__01: Entity
  s0_fog_01_art_19__01: Entity
  s0_fog_01_art_20__01: Entity
  s0_fog_01_art_21__01: Entity
  s0_fog_01_art_22__01: Entity
  s0_fog_01_art_23__01: Entity
  s0_fog_01_art_24__01: Entity
  s0_COG_Cable_cap_01: Entity
  s0_Cable_cap_Art_01: Entity
  s0_Cable_cap_Art_1__01: Entity
  s0_Cable_cap_Art_2__01: Entity
  s0_Cable_cap_Art_3__01: Entity
  s0_Cable_cap_Art_4__01: Entity
  s0_Cable_cap_Art_5__01: Entity
  s0_Cable_cap_Art_6__01: Entity
  s0_Cable_cap_Art_7__01: Entity
  s0_Cable_cap_Art_8__01: Entity
  s0_Cable_cap_Art_9__01: Entity
  s0_Cable_cap_Art_10__01: Entity
  s0_Cable_cap_Art_11__01: Entity
  s0_Cable_cap_Art_12__01: Entity
  s0_Cable_cap_Art_13__01: Entity
  s0_Cable_cap_Art_14__01: Entity
  s0_Cable_cap_Art_15__01: Entity
  s0_Cable_cap_Art_16__01: Entity
  s0_Cable_cap_Art_17__01: Entity
  s0_Cable_cap_Art_18__01: Entity
  s0_Cable_cap_Art_19__01: Entity
  s0_Cable_cap_Art_20__01: Entity
  s0_Cable_cap_Art_21__01: Entity
  s0_Cable_cap_Art_22__01: Entity
  s0_Cable_cap_Art_23__01: Entity
  s0_Cable_cap_Art_24__01: Entity
  s0_Cable_cap_Art_25__01: Entity
  s0_Cable_cap_Art_29__01: Entity
  s0_Cable_cap_Art_30__01: Entity
  s0_Cable_cap_Art_31__01: Entity
  s0_Cable_cap_Art_33__01: Entity
  s0_Cable_cap_Art_34__01: Entity
  s0_Cable_cap_Art_35__01: Entity
  s0_Leaf_Anim_02_Art_2__01: Entity
  s0_Leaf_Anim_Art_1__01: Entity
  s0_Leaf_Anim_Art_2__01: Entity
  s0_Leaf_Anim_Art_3__01: Entity
  s0_Leaf_Anim_Art_4__01: Entity
  s0_Leaf_Anim_Art_5__01: Entity
  s0_Leaf_Anim_Art_6__01: Entity
  s0_Leaf_Anim_02_Art_3__01: Entity
  s0_Leaf_Anim_02_Art_4__01: Entity
  s0_Leaf_Anim_Art_7__01: Entity
  s0_Leaf_Anim_Art_8__01: Entity
  s0_Leaf_Anim_Art_9__01: Entity
  s0_Leaf_Anim_Art_10__01: Entity
  s0_Leaf_Anim_Art_11__01: Entity
  s0_Leaf_Anim_Art_12__01: Entity
  s0_Leaf_Anim_Art_13__01: Entity
  s0_Fireflys_01: Entity
  s0_Det_Firefly_art_01: Entity
  s0_Det_Firefly_art_1__01: Entity
  s0_Det_Firefly_art_2__01: Entity
  s0_Det_Firefly_art_3__01: Entity
  s0_Det_Firefly_art_4__01: Entity
  s0_Det_Firefly_art_5__01: Entity
  s0_Det_Firefly_art_6__01: Entity
  s0_Det_Firefly_art_7__01: Entity
  s0_Det_Firefly_art_8__01: Entity
  s0_Det_Firefly_art_9__01: Entity
  s0_Det_Firefly_art_10__01: Entity
  s0_Det_Firefly_art_11__01: Entity
  s0_Det_Firefly_art_12__01: Entity
  s0_Det_Firefly_art_13__01: Entity
  s0_Det_Firefly_art_14__01: Entity
  s0_Det_Firefly_art_15__01: Entity
  s0_Det_Firefly_art_16__01: Entity
  s0_Det_Firefly_art_17__01: Entity
  s0_Det_Firefly_art_18__01: Entity
  s0_Det_Firefly_art_19__01: Entity
  s0_Det_Firefly_art_20__01: Entity
  s0_Det_Firefly_art_21__01: Entity
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
    // Tree_Fall_Art
    this.s0_tree_fall_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_tree_fall_art_01, { src: 'assets/scene/models/unity_assets/s0_tree_fall_art_01.glb' })
    Transform.create(this.s0_tree_fall_art_01, {
      position: Vector3.create(216.9, 67.88, 128.27),
      rotation: Quaternion.create(-0.003149729, 0.996719, -0.04851133, -0.06471474),
      scale: Vector3.create(0.91, 0.9100001, 0.91)
    })
    Transform.getMutable(this.s0_tree_fall_art_01).parent = this.s0_Z3_COG_01
    //DEFER_LOADING.push( ()=>{
    //keep this one as player can get to it fast, before download done
    //log("onSceneReadyObservable called. loading non critical values","Main_Island_art2")
    // Main_Island_02_art
    this.s0_Main_Island_02_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Main_Island_02_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Main_Island_02_art_01.glb'
    })
    Transform.create(this.s0_Main_Island_02_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Main_Island_02_art_01).parent = this.s0_Z3_COG_01

    // Tree_01_Low_1
    this.s0_tree_01_low_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_tree_01_low_1__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_01_low_2__01.glb'
    })
    Transform.create(this.s0_tree_01_low_1__01, {
      position: Vector3.create(102.7, 73.21818, 85.5),
      rotation: Quaternion.create(0.004817047, 0.9186937, -0.06708635, 0.389202),
      scale: Vector3.create(5.709867, 6.610312, 5.709866)
    })
    Transform.getMutable(this.s0_tree_01_low_1__01).parent = this.s0_Z3_COG_01
    // Tree_01_Low
    this.s0_tree_01_low_01 = engine.addEntity()
    GltfContainer.create(this.s0_tree_01_low_01, { src: 'assets/scene/models/unity_assets/s0_tree_01_low_2__01.glb' })
    Transform.create(this.s0_tree_01_low_01, {
      position: Vector3.create(206.8884, 60.76961, 95.24018),
      rotation: Quaternion.create(-0.07328766, 0.6679653, -0.3725982, 0.640017),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_tree_01_low_01).parent = this.s0_Z3_COG_01

    // Tree_03_Low
    this.s0_tree_03_low_01 = engine.addEntity()
    GltfContainer.create(this.s0_tree_03_low_01, { src: 'assets/scene/models/unity_assets/s0_tree_03_low_1__01.glb' })
    Transform.create(this.s0_tree_03_low_01, {
      position: Vector3.create(201.1674, 61.11674, 95.29746),
      rotation: Quaternion.create(-0.08891319, 0.9263292, 0.01124492, 0.3658994),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_tree_03_low_01).parent = this.s0_Z3_COG_01

    // Z3_veg_BigTrees_Art
    this.s0_Z3_veg_BigTrees_Art_01 = engine.addEntity()
    Transform.create(this.s0_Z3_veg_BigTrees_Art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(1, 1, 1)
    })
    // BigTree_01
    this.s0_BigTree_01_01 = engine.addEntity()
    GltfContainer.create(this.s0_BigTree_01_01, { src: 'assets/scene/models/unity_assets/s0_BigTree_01_01.glb' })
    Transform.create(this.s0_BigTree_01_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_BigTree_01_01).parent = this.s0_Z3_veg_BigTrees_Art_01

    // BigTree_02
    this.s0_BigTree_02_01 = engine.addEntity()
    GltfContainer.create(this.s0_BigTree_02_01, { src: 'assets/scene/models/unity_assets/s0_BigTree_02_01.glb' })
    Transform.create(this.s0_BigTree_02_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_BigTree_02_01).parent = this.s0_Z3_veg_BigTrees_Art_01

    // Z3_Stones_2_art
    this.s0_Z3_Stones_2_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_01, {
      position: Vector3.create(210.8565, 63.19031, 136.0345),
      rotation: Quaternion.create(-0.04692928, -0.2639635, 0.1346542, -0.9539336),
      scale: Vector3.create(2.103051, 2.103051, 2.103051)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_01).parent = this.s0_Z3_COG_01

    // Z3_Env_Rocks_Source_art
    this.s0_Z3_Env_Rocks_Source_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Env_Rocks_Source_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Env_Rocks_Source_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Env_Rocks_Source_art_01, {
      position: Vector3.create(213.271, 60.93, 142.6258),
      rotation: Quaternion.create(0, 0.8759243, 0, 0.4824487),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Env_Rocks_Source_art_01).parent = this.s0_Z3_COG_01
    // Z3_Str_Bridge_Art
    this.s0_Z3_Str_Bridge_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Str_Bridge_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Str_Bridge_Art_1__01.glb'
    })
    Animator.create(this.s0_Z3_Str_Bridge_Art_01, {
      states: [{ clip: 'Bridge On' }, { clip: 'Bridge Off' }, { clip: 'Bridge Animation' }]
    })
    Transform.create(this.s0_Z3_Str_Bridge_Art_01, {
      position: Vector3.create(189.42, 63.11, 120.55),
      rotation: Quaternion.create(0.02953282, 0.9578906, 0.002688589, 0.285598),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Str_Bridge_Art_01).parent = this.s0_Z3_COG_01
    //DEFER_LOADING
    console.log('onSceneReadyObservable called. loading non critical values', 'Chunk03')
    // Chunk_03_grass_art
    this.s0_Chunk_03_grass_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_03_grass_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Chunk_03_grass_art_01.glb'
    })
    Transform.create(this.s0_Chunk_03_grass_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_03_grass_art_01).parent = this.s0_Z3_COG_01

    // Chunk_03_trees_art
    this.s0_Chunk_03_trees_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_03_trees_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Chunk_03_trees_art_01.glb'
    })
    Transform.create(this.s0_Chunk_03_trees_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_03_trees_art_01).parent = this.s0_Z3_COG_01

    // Chunk_02_trees_art
    this.s0_Chunk_02_trees_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_02_trees_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Chunk_02_trees_art_01.glb'
    })
    Transform.create(this.s0_Chunk_02_trees_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_02_trees_art_01).parent = this.s0_Z3_COG_01
    // Chunk_02_art
    this.s0_Chunk_02_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_02_art_01, { src: 'assets/scene/models/unity_assets/s0_Chunk_02_art_01.glb' })
    Transform.create(this.s0_Chunk_02_art_01, {
      position: Vector3.create(199.6038, 65.29468, 126.9784),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_02_art_01).parent = this.s0_Z3_COG_01

    // Chunk_01_art
    this.s0_Chunk_01_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_01_art_01, { src: 'assets/scene/models/unity_assets/s0_Chunk_01_art_01.glb' })
    Transform.create(this.s0_Chunk_01_art_01, {
      position: Vector3.create(223.9394, 71.67961, 131.7274),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_01_art_01).parent = this.s0_Z3_COG_01

    // Chunk_02_entrance_art
    this.s0_Chunk_02_entrance_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_02_entrance_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Chunk_02_entrance_art_01.glb'
    })
    Transform.create(this.s0_Chunk_02_entrance_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_02_entrance_art_01).parent = this.s0_Z3_COG_01
    //DEFER_LOADING
    console.log('onSceneReadyObservable called. loading non critical values', 'chunk4')
    // Chunk_04_grass_02_art
    this.s0_Chunk_04_grass_02_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_04_grass_02_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Chunk_04_grass_02_art_01.glb'
    })
    Transform.create(this.s0_Chunk_04_grass_02_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_04_grass_02_art_01).parent = this.s0_Z3_COG_01

    // Chunk_04_grass_art
    this.s0_Chunk_04_grass_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_04_grass_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Chunk_04_grass_art_01.glb'
    })
    Transform.create(this.s0_Chunk_04_grass_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_04_grass_art_01).parent = this.s0_Z3_COG_01

    // Chunk_04_trees_art
    this.s0_Chunk_04_trees_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_04_trees_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Chunk_04_trees_art_01.glb'
    })
    Transform.create(this.s0_Chunk_04_trees_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_04_trees_art_01).parent = this.s0_Z3_COG_01

    // Chunk_04_art
    this.s0_Chunk_04_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_04_art_01, { src: 'assets/scene/models/unity_assets/s0_Chunk_04_art_01.glb' })
    Transform.create(this.s0_Chunk_04_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_04_art_01).parent = this.s0_Z3_COG_01
    // Chunk_05_02_art
    this.s0_Chunk_05_02_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_05_02_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Chunk_05_02_art_01.glb'
    })
    Transform.create(this.s0_Chunk_05_02_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_05_02_art_01).parent = this.s0_Z3_COG_01

    // Chunk_05_03_art
    this.s0_Chunk_05_03_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_05_03_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Chunk_05_03_art_01.glb'
    })
    Transform.create(this.s0_Chunk_05_03_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_05_03_art_01).parent = this.s0_Z3_COG_01

    // Chunk_05_art
    this.s0_Chunk_05_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Chunk_05_art_01, { src: 'assets/scene/models/unity_assets/s0_Chunk_05_art_01.glb' })
    Transform.create(this.s0_Chunk_05_art_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Chunk_05_art_01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (14)
    this.s0_Z3_Rock_1_art_14__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_14__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_14__01, {
      position: Vector3.create(192.91, 65.36, 138.11),
      rotation: Quaternion.create(0, -0.8389353, 0, 0.5442314),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_14__01).parent = this.s0_Z3_COG_01
    // Z3_Stones_2_art (12)
    this.s0_Z3_Stones_2_art_12__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_12__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_12__01, {
      position: Vector3.create(167.29, 64.79, 96.141),
      rotation: Quaternion.create(0, 0.9087574, 0, 0.4173248),
      scale: Vector3.create(2.391964, 2.391964, 2.391964)
    })

    Transform.getMutable(this.s0_Z3_Stones_2_art_12__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (13)
    this.s0_Z3_Stones_2_art_13__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_13__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_13__01, {
      position: Vector3.create(171.189, 64.941, 100.074),
      rotation: Quaternion.create(0, 0.1873941, 0, 0.9822848),
      scale: Vector3.create(0.7974091, 0.7974092, 0.7974091)
    })

    Transform.getMutable(this.s0_Z3_Stones_2_art_13__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (17)
    this.s0_Z3_Rock_1_art_17__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_17__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_17__01, {
      position: Vector3.create(176.28, 65.7, 97.65),
      rotation: Quaternion.create(0, -0.9378331, 0, 0.3470867),
      scale: Vector3.create(1.5418, 1.5418, 1.5418)
    })

    Transform.getMutable(this.s0_Z3_Rock_1_art_17__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (14)
    this.s0_Z3_Stones_2_art_14__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_14__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_14__01, {
      position: Vector3.create(172.9, 64.79, 97.77),
      rotation: Quaternion.create(0, 0.9087574, 0, 0.4173248),
      scale: Vector3.create(2.391964, 2.391964, 2.391964)
    })

    Transform.getMutable(this.s0_Z3_Stones_2_art_14__01).parent = this.s0_Z3_COG_01
    // Z3_Stones_2_art (17)
    this.s0_Z3_Stones_2_art_17__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_17__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_17__01, {
      position: Vector3.create(180.86, 64.536, 119.44),
      rotation: Quaternion.create(0, -0.220095, 0, 0.9754785),
      scale: Vector3.create(1.805653, 1.805653, 1.805653)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_17__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (19)
    this.s0_Z3_Rock_3_art_19__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_19__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_19__01, {
      position: Vector3.create(150.41, 69.6, 161.49),
      rotation: Quaternion.create(0.03461667, 0.2552287, 0.05046617, 0.9649421),
      scale: Vector3.create(1.757697, 1.757697, 1.757697)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_19__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (47)
    this.s0_Z3_Stones_2_art_47__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_47__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_47__01, {
      position: Vector3.create(104.7975, 76.704, 141.2899),
      rotation: Quaternion.create(0.007747204, 0.9361734, 0.006603119, 0.3513912),
      scale: Vector3.create(1.224018, 1.224018, 1.224018)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_47__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (30)
    this.s0_Z3_Rock_3_art_30__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_30__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_30__01, {
      position: Vector3.create(173.1901, 64.951, 121.3639),
      rotation: Quaternion.create(0, -0.9982471, 0, -0.05918407),
      scale: Vector3.create(0.9110797, 0.9110797, 0.9110797)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_30__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_3_art (32)
    this.s0_Z3_Rock_3_art_32__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_32__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_32__01, {
      position: Vector3.create(169.017, 67.381, 162.714),
      rotation: Quaternion.create(0, -0.372141, 0, 0.9281762),
      scale: Vector3.create(0.9110796, 0.9110797, 0.9110796)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_32__01).parent = this.s0_Z3_COG_01
    // WaterFall_01_Art (1) out of boundaries
    // this.s0_WaterFall_01_Art_1__01 = engine.addEntity()
    // GltfContainer.create(this.s0_WaterFall_01_Art_1__01, { src: 'assets/scene/models/unity_assets/s0_WaterFall_01_Art_01.glb' })
    // Animator.create(this.s0_WaterFall_01_Art_1__01, {
    //   states: [{ clip: 'Take 001' }]
    // })
    // Transform.create(this.s0_WaterFall_01_Art_1__01, {
    //   position: Vector3.create(240.75, -46.49, 348.94),
    //   rotation: Quaternion.create(0, 0.4090146, 0, -0.9125279),
    //   scale: Vector3.create(1, 1.5479, 1)
    // })
    // Transform.getMutable(this.s0_WaterFall_01_Art_1__01).parent = this.s0_Z3_COG_01
    // WaterFall_01_Art (2)
    // this.s0_WaterFall_01_Art_2__01 = engine.addEntity()
    // GltfContainer.create(this.s0_WaterFall_01_Art_2__01, {
    //   src: 'assets/scene/models/unity_assets/s0_WaterFall_01_Art_01.glb'
    // })
    // Animator.create(this.s0_WaterFall_01_Art_2__01, {
    //   states: [{ clip: 'Take 001' }]
    // })
    // Transform.create(this.s0_WaterFall_01_Art_2__01, {
    //   position: Vector3.create(281.87, -219.81, 364.51),
    //   rotation: Quaternion.create(0, 0.1498511, 0, -0.9887086),
    //   scale: Vector3.create(1, 3.853356, 1)
    // })
    // Transform.getMutable(this.s0_WaterFall_01_Art_2__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs03_Art (1)
    this.s0_Z3_Prop_Stairs03_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_1__01, {
      position: Vector3.create(155, 70.27, 155.41),
      rotation: Quaternion.create(0.02343011, 0.7645672, 0.02817995, -0.6435013),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_1__01).parent = this.s0_Z3_COG_01

    // Z3_Prop_Stairs03_Art (2)
    this.s0_Z3_Prop_Stairs03_Art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_2__01, {
      position: Vector3.create(152.6135, 71.19878, 155.0048),
      rotation: Quaternion.create(0.02343011, 0.7645672, 0.02817995, -0.6435013),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_2__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (33)
    this.s0_Z3_Rock_3_art_33__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_33__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_33__01, {
      position: Vector3.create(151.56, 69.63, 153.44),
      rotation: Quaternion.create(0.0607047, 0.9750092, -0.007751722, 0.2135697),
      scale: Vector3.create(1.757697, 1.757697, 1.757696)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_33__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_2_art (37)
    this.s0_Z3_Rock_2_art_37__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_2_art_37__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_2_art_33__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_2_art_37__01, {
      position: Vector3.create(153.298, 69.21083, 161.1245),
      rotation: Quaternion.create(-0.005648121, -0.0786869, -0.008468684, -0.9968475),
      scale: Vector3.create(0.6879829, 0.6879828, 0.6879829)
    })
    Transform.getMutable(this.s0_Z3_Rock_2_art_37__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs03_Art (5)
    this.s0_Z3_Prop_Stairs03_Art_5__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_5__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_5__01, {
      position: Vector3.create(130.1413, 74.70654, 141.3221),
      rotation: Quaternion.create(0.00862073, 0.9542042, 0.0276267, -0.2977531),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_5__01).parent = this.s0_Z3_COG_01

    // Z3_Prop_Stairs02_Art (4)
    this.s0_Z3_Prop_Stairs02_Art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs02_Art_4__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs02_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs02_Art_4__01, {
      position: Vector3.create(127.83, 75.22, 137.91),
      rotation: Quaternion.create(0, 0.9560892, 0, -0.2930759),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs02_Art_4__01).parent = this.s0_Z3_COG_01

    // Z3_Prop_Stairs03_Art (6)
    this.s0_Z3_Prop_Stairs03_Art_6__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_6__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_6__01, {
      position: Vector3.create(131.5134, 73.91387, 143.3227),
      rotation: Quaternion.create(0.00862073, 0.9542042, 0.0276267, -0.2977531),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_6__01).parent = this.s0_Z3_COG_01

    // Z3_Prop_Stairs03_Art (7)
    this.s0_Z3_Prop_Stairs03_Art_7__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_7__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_7__01, {
      position: Vector3.create(132.89, 73.01, 145.32),
      rotation: Quaternion.create(0.00862073, 0.9542042, 0.0276267, -0.2977531),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_7__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs03_Art (8)
    this.s0_Z3_Prop_Stairs03_Art_8__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs03_Art_8__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs03_Art_01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs03_Art_8__01, {
      position: Vector3.create(134.2696, 72.16843, 147.3113),
      rotation: Quaternion.create(0.00862073, 0.9542042, 0.0276267, -0.2977531),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs03_Art_8__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (36)
    this.s0_Z3_Rock_3_art_36__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_36__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_36__01, {
      position: Vector3.create(124.2, 73.78, 143.88),
      rotation: Quaternion.create(0.03471508, 0.1805518, 0.02606074, 0.9826072),
      scale: Vector3.create(1.440566, 1.440566, 1.440566)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_36__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (24)
    this.s0_Z3_Rock_1_art_24__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_24__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_24__01, {
      position: Vector3.create(126.101, 73.243, 145.333),
      rotation: Quaternion.create(0.120599, 0.965905, -0.08449966, -0.2129396),
      scale: Vector3.create(0.7137473, 0.7137473, 0.7137473)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_24__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (37)
    this.s0_Z3_Rock_3_art_37__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_37__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_37__01, {
      position: Vector3.create(127.159, 75.346, 135.313),
      rotation: Quaternion.create(-0.04336057, 0.8678614, 0.002005591, 0.4949069),
      scale: Vector3.create(1.0433, 0.9822987, 0.888999)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_37__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_3_art (38)
    this.s0_Z3_Rock_3_art_38__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_38__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_38__01, {
      position: Vector3.create(121.38, 75.176, 139.38),
      rotation: Quaternion.create(-0.002131728, 0.5752844, 0.04335451, -0.8168011),
      scale: Vector3.create(1.043299, 0.7168057, 0.8889991)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_38__01).parent = this.s0_Z3_COG_01

    // hill_art (8)
    this.s0_hill_art_8__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_8__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_8__01, {
      position: Vector3.create(114.47, 73.13, 143.4),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(477.4939, 157.0195, 375.5286)
    })
    Transform.getMutable(this.s0_hill_art_8__01).parent = this.s0_Z3_COG_01

    // hill_art (15)
    this.s0_hill_art_15__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_15__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_15__01, {
      position: Vector3.create(123, 75.1, 99.84),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(391.545, 128.756, 307.9334)
    })
    Transform.getMutable(this.s0_hill_art_15__01).parent = this.s0_Z3_COG_01

    // hill_art (32)
    this.s0_hill_art_32__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_32__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_32__01, {
      position: Vector3.create(202.0485, 64.01, 141.4333),
      rotation: Quaternion.create(0, 0.5933857, 0, -0.8049182),
      scale: Vector3.create(401.3603, 0.1386045, 339.8092)
    })
    Transform.getMutable(this.s0_hill_art_32__01).parent = this.s0_Z3_COG_01
    // hill_art (33)
    this.s0_hill_art_33__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_33__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_33__01, {
      position: Vector3.create(211.23, 64.01, 137.81),
      rotation: Quaternion.create(0, 0.5933857, 0, -0.8049182),
      scale: Vector3.create(401.3603, 0.1386045, 339.8092)
    })
    Transform.getMutable(this.s0_hill_art_33__01).parent = this.s0_Z3_COG_01

    // hill_art (34)
    this.s0_hill_art_34__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_34__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_34__01, {
      position: Vector3.create(206.45, 64.57, 142.44),
      rotation: Quaternion.create(0, 0.5933857, 0, -0.8049182),
      scale: Vector3.create(401.3603, 0.1386045, 339.8092)
    })
    Transform.getMutable(this.s0_hill_art_34__01).parent = this.s0_Z3_COG_01

    // hill_art (35)
    this.s0_hill_art_35__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_35__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_35__01, {
      position: Vector3.create(211.13, 64.01, 127.43),
      rotation: Quaternion.create(0, 0.5933857, 0, -0.8049182),
      scale: Vector3.create(267.6592, 0.09243257, 226.612)
    })
    Transform.getMutable(this.s0_hill_art_35__01).parent = this.s0_Z3_COG_01

    // hill_art (45)
    this.s0_hill_art_45__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_45__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_45__01, {
      position: Vector3.create(147.75, 70.646, 153.8),
      rotation: Quaternion.create(0.02458046, 0.743567, 0.00670595, -0.6681759),
      scale: Vector3.create(316.6501, 154.7998, 291.9399)
    })
    Transform.getMutable(this.s0_hill_art_45__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_3_art (39)
    this.s0_Z3_Rock_3_art_39__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_39__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_39__01, {
      position: Vector3.create(128.11, 71.09, 152.74),
      rotation: Quaternion.create(0.02611149, -0.09945278, 0.03467702, 0.994095),
      scale: Vector3.create(1.440566, 1.440566, 1.440566)
    })

    Transform.getMutable(this.s0_Z3_Rock_3_art_39__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (40)
    this.s0_Z3_Rock_3_art_40__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_40__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_40__01, {
      position: Vector3.create(155.45, 68.75, 152.79),
      rotation: Quaternion.create(0, 0.9756833, 0, 0.2191856),
      scale: Vector3.create(0.9110796, 0.9110797, 0.9110796)
    })

    Transform.getMutable(this.s0_Z3_Rock_3_art_40__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (41)
    this.s0_Z3_Rock_3_art_41__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_41__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_41__01, {
      position: Vector3.create(155.61, 66.92, 148.52),
      rotation: Quaternion.create(0, 0.6969523, 0, 0.7171174),
      scale: Vector3.create(0.9110798, 0.9110797, 0.9110798)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_41__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (27)
    this.s0_Z3_Stones_2_art_27__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_27__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_27__01, {
      position: Vector3.create(159.805, 67.02, 131.599),
      rotation: Quaternion.create(-0.001145287, 0.5840276, 0.01011475, 0.8116699),
      scale: Vector3.create(1.04237, 1.04237, 1.04237)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_27__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_1_art (13)
    this.s0_Z3_Rock_1_art_13__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_13__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_13__01, {
      position: Vector3.create(225.89, 68.23, 127.57),
      rotation: Quaternion.create(0.2360684, 0.4038203, 0.08482038, 0.8797765),
      scale: Vector3.create(0.6148898, 0.3970591, 0.6148899)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_13__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (15)
    this.s0_Z3_Rock_1_art_15__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_15__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_15__01, {
      position: Vector3.create(222.87, 68.07, 127.8),
      rotation: Quaternion.create(0, 0.5057935, 0, -0.8626546),
      scale: Vector3.create(0.6743701, 0.5559804, 1.5008)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_15__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (16)
    this.s0_Z3_Rock_1_art_16__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_16__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_16__01, {
      position: Vector3.create(224.49, 68.23, 127.275),
      rotation: Quaternion.create(-0.02015844, -0.9282524, 0.03770636, 0.3694858),
      scale: Vector3.create(0.4201175, 0.2712866, 0.4201174)
    })

    Transform.getMutable(this.s0_Z3_Rock_1_art_16__01).parent = this.s0_Z3_COG_01

    // Z3_Prop_Fence_Art (27)
    this.s0_Z3_Prop_Fence_Art_27__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Fence_Art_27__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Fence_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Fence_Art_27__01, {
      position: Vector3.create(224.96, 68.85, 122.71),
      rotation: Quaternion.create(-0.01423047, 0.4053374, -0.005059754, 0.9140424),
      scale: Vector3.create(0.740853, 0.740853, -0.6122104)
    })
    Transform.getMutable(this.s0_Z3_Prop_Fence_Art_27__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_1_art (18)
    this.s0_Z3_Rock_1_art_18__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_18__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_18__01, {
      position: Vector3.create(220.6, 68.75, 122.24),
      rotation: Quaternion.create(0, 0.9997714, 0, -0.02138006),
      scale: Vector3.create(0.81172, 0.6927984, 0.5917958)
    })

    Transform.getMutable(this.s0_Z3_Rock_1_art_18__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (19)
    this.s0_Z3_Rock_1_art_19__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_19__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_19__01, {
      position: Vector3.create(229.99, 68.75, 124.36),
      rotation: Quaternion.create(0, 0.9980965, 0, 0.06167238),
      scale: Vector3.create(1, 0.8534943, 0.60872)
    })

    Transform.getMutable(this.s0_Z3_Rock_1_art_19__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (25)
    this.s0_Z3_Rock_1_art_25__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_25__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_25__01, {
      position: Vector3.create(231.1, 68.75, 125.53),
      rotation: Quaternion.create(0, -0.09924629, 0, -0.9950629),
      scale: Vector3.create(1, 0.8534943, 0.60872)
    })

    Transform.getMutable(this.s0_Z3_Rock_1_art_25__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (26)
    this.s0_Z3_Rock_1_art_26__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_26__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_26__01, {
      position: Vector3.create(232.81, 68.75, 127.66),
      rotation: Quaternion.create(0, -0.09924629, 0, -0.9950629),
      scale: Vector3.create(1.6044, 1.369346, 0.9766304)
    })

    Transform.getMutable(this.s0_Z3_Rock_1_art_26__01).parent = this.s0_Z3_COG_01
    // Z3_Stones_2_art (30)
    this.s0_Z3_Stones_2_art_30__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_30__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_30__01, {
      position: Vector3.create(109.49, 76.79, 137.8),
      rotation: Quaternion.create(-0.001145287, 0.5840276, 0.01011475, 0.8116699),
      scale: Vector3.create(1.04237, 1.04237, 1.04237)
    })

    Transform.getMutable(this.s0_Z3_Stones_2_art_30__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (32)
    this.s0_Z3_Stones_2_art_32__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_32__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_32__01, {
      position: Vector3.create(105.09, 76.58, 150.57),
      rotation: Quaternion.create(-0.001145287, 0.5840276, 0.01011475, 0.8116699),
      scale: Vector3.create(1.04237, 1.04237, 1.04237)
    })

    Transform.getMutable(this.s0_Z3_Stones_2_art_32__01).parent = this.s0_Z3_COG_01

    // hill_art (1)
    this.s0_hill_art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_1__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_1__01, {
      position: Vector3.create(100.14, 76.75, 151.08),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(535.7891, 0.5213402, 421.3752)
    })

    Transform.getMutable(this.s0_hill_art_1__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (6)
    this.s0_Z3_Rock_3_art_6__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_6__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_6__01, {
      position: Vector3.create(92.55, 77.35, 157.43),
      rotation: Quaternion.create(0.05985989, 0.9908468, 0.01272565, -0.1203226),
      scale: Vector3.create(1.457697, 1.457697, 1.457697)
    })

    Transform.getMutable(this.s0_Z3_Rock_3_art_6__01).parent = this.s0_Z3_COG_01
    // hill_art (2)
    this.s0_hill_art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_2__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_2__01, {
      position: Vector3.create(119.53, 75.54, 122.16),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(535.7891, 0.5213402, 421.3752)
    })

    Transform.getMutable(this.s0_hill_art_2__01).parent = this.s0_Z3_COG_01

    // hill_art (3)
    this.s0_hill_art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_3__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_3__01, {
      position: Vector3.create(142.92, 71.41, 153.06),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(300.6448, 0.2925371, 236.4442)
    })

    Transform.getMutable(this.s0_hill_art_3__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (42)
    this.s0_Z3_Rock_3_art_42__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_42__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_42__01, {
      position: Vector3.create(169.21, 66.86, 146.72),
      rotation: Quaternion.create(0.09156789, 0.9449854, 0.09298965, 0.2999515),
      scale: Vector3.create(0.9667331, 0.9667332, 0.9667331)
    })

    Transform.getMutable(this.s0_Z3_Rock_3_art_42__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (33)
    this.s0_Z3_Stones_2_art_33__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_33__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_33__01, {
      position: Vector3.create(98.42, 76.79, 136.98),
      rotation: Quaternion.create(0.008231603, 0.9941725, 0.005988369, -0.10732),
      scale: Vector3.create(1.04237, 1.04237, 1.04237)
    })

    Transform.getMutable(this.s0_Z3_Stones_2_art_33__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (34)
    this.s0_Z3_Stones_2_art_34__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_34__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_34__01, {
      position: Vector3.create(129.87, 75.443, 118.37),
      rotation: Quaternion.create(0.008231603, 0.9941725, 0.005988369, -0.10732),
      scale: Vector3.create(1.04237, 1.04237, 1.04237)
    })

    Transform.getMutable(this.s0_Z3_Stones_2_art_34__01).parent = this.s0_Z3_COG_01
    // tree_02_low (85)
    this.s0_tree_02_low_85__01 = engine.addEntity()
    GltfContainer.create(this.s0_tree_02_low_85__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_85__01, {
      position: Vector3.create(136.16, 75.32, 111.86),
      rotation: Quaternion.create(0, -0.8983367, 0, -0.4393076),
      scale: Vector3.create(1.1883, 1.1883, 1.1883)
    })

    Transform.getMutable(this.s0_tree_02_low_85__01).parent = this.s0_Z3_COG_01

    // tree_02_low (60)
    this.s0_tree_02_low_60__01 = engine.addEntity()
    GltfContainer.create(this.s0_tree_02_low_60__01, {
      src: 'assets/scene/models/unity_assets/s0_tree_02_low_72__01.glb'
    })
    Transform.create(this.s0_tree_02_low_60__01, {
      position: Vector3.create(128.22, 75.44, 117.52),
      rotation: Quaternion.create(0, -0.9500811, 0, 0.3120034),
      scale: Vector3.create(0.6083314, 0.6083314, 0.6083314)
    })

    Transform.getMutable(this.s0_tree_02_low_60__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (27)
    this.s0_Z3_Rock_1_art_27__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_27__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_27__01, {
      position: Vector3.create(222, 68.29, 130.085),
      rotation: Quaternion.create(0.05163112, -0.04884792, -0.08928362, 0.993467),
      scale: Vector3.create(0.6704234, 0.4329192, 0.6704235)
    })

    Transform.getMutable(this.s0_Z3_Rock_1_art_27__01).parent = this.s0_Z3_COG_01

    // hill_art (36)
    this.s0_hill_art_36__01 = engine.addEntity()
    GltfContainer.create(this.s0_hill_art_36__01, { src: 'assets/scene/models/unity_assets/s0_hill_art_01.glb' })
    Transform.create(this.s0_hill_art_36__01, {
      position: Vector3.create(209.16, 64.303, 123.57),
      rotation: Quaternion.create(0, 0.5933857, 0, -0.8049182),
      scale: Vector3.create(267.6592, 0.09243257, 226.612)
    })

    Transform.getMutable(this.s0_hill_art_36__01).parent = this.s0_Z3_COG_01
    // Z3_Prop_Stairs02_Art (5)
    this.s0_Z3_Prop_Stairs02_Art_5__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Prop_Stairs02_Art_5__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Prop_Stairs02_Art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Prop_Stairs02_Art_5__01, {
      position: Vector3.create(112.35, 75.88, 133.76),
      rotation: Quaternion.create(0.04012293, 0.2321415, 0.007222761, -0.9718274),
      scale: Vector3.create(1, 1.152618, 1)
    })
    Transform.getMutable(this.s0_Z3_Prop_Stairs02_Art_5__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_3_art (43)
    this.s0_Z3_Rock_3_art_43__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_43__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_43__01, {
      position: Vector3.create(115.778, 75.882, 138.823),
      rotation: Quaternion.create(-0.04267909, -0.8864526, -0.007915513, -0.4607797),
      scale: Vector3.create(0.6909343, 0.6709388, 0.7560548)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_43__01).parent = this.s0_Z3_COG_01

    // Z3_Rock_1_art (28)
    this.s0_Z3_Rock_1_art_28__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_1_art_28__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_1_art_11__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_1_art_28__01, {
      position: Vector3.create(116.35, 75.691, 137.6),
      rotation: Quaternion.create(0.03762185, 0.4962578, -0.02943365, -0.8668603),
      scale: Vector3.create(0.5520836, 0.4351357, 0.5520836)
    })
    Transform.getMutable(this.s0_Z3_Rock_1_art_28__01).parent = this.s0_Z3_COG_01

    // Z3_Stones_2_art (35)
    this.s0_Z3_Stones_2_art_35__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Stones_2_art_35__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Stones_2_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Stones_2_art_35__01, {
      position: Vector3.create(117.141, 75.443, 138.067),
      rotation: Quaternion.create(-0.01003966, 0.9409958, 0.001680805, -0.3382652),
      scale: Vector3.create(1.04237, 1.04237, 1.04237)
    })
    Transform.getMutable(this.s0_Z3_Stones_2_art_35__01).parent = this.s0_Z3_COG_01
    // Z3_Rock_3_art (44)
    this.s0_Z3_Rock_3_art_44__01 = engine.addEntity()
    GltfContainer.create(this.s0_Z3_Rock_3_art_44__01, {
      src: 'assets/scene/models/unity_assets/s0_Z3_Rock_3_art_1__01.glb'
    })
    Transform.create(this.s0_Z3_Rock_3_art_44__01, {
      position: Vector3.create(110.7, 75.862, 135.546),
      rotation: Quaternion.create(0.04220785, -0.9514529, -0.01013933, 0.3047182),
      scale: Vector3.create(0.8992592, 0.8992592, 0.8992592)
    })
    Transform.getMutable(this.s0_Z3_Rock_3_art_44__01).parent = this.s0_Z3_COG_01

    // Det_Butterfly_chunk02_Art
    this.s0_Det_Butterfly_chunk02_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Butterfly_chunk02_Art_01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Butterfly_chunk02_Art_01.glb'
    })
    Transform.create(this.s0_Det_Butterfly_chunk02_Art_01, {
      position: Vector3.create(199.6038, 63.97, 126.9784),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Det_Butterfly_chunk02_Art_01).parent = this.s0_Z3_COG_01

    // Fence_Art
    this.s0_Fence_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Fence_Art_01, { src: 'assets/scene/models/unity_assets/s0_Fence_Art_01.glb' })
    Transform.create(this.s0_Fence_Art_01, {
      position: Vector3.create(149.38, 71.407, 157.04),
      rotation: Quaternion.create(0, 0.7635284, 0, -0.6457744),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Fence_Art_01).parent = this.s0_Z3_COG_01
    // Fence_Art.z0
    this.s0_Fence_Art_02 = engine.addEntity()
    GltfContainer.create(this.s0_Fence_Art_02, { src: 'assets/scene/models/unity_assets/s0_Fence_Art_01.glb' })
    Transform.create(this.s0_Fence_Art_02, {
      position: Vector3.create(216, 68.4, 131.5),
      rotation: Quaternion.fromEulerDegrees(0, 270, 0),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Fence_Art_02).parent = this.s0_Z3_COG_01

    // COG_Landscape_Planes
    this.s0_COG_Landscape_Planes_01 = engine.addEntity()
    Transform.create(this.s0_COG_Landscape_Planes_01, {
      position: Vector3.create(160.4, 9.799999, 151),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(1, 1, 1)
    })

    // Landscape_2_Art (1)
    this.s0_Landscape_2_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Landscape_2_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Landscape_2_Art_1__01.glb'
    })
    Transform.create(this.s0_Landscape_2_Art_1__01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_Landscape_2_Art_1__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (1)
    this.s0_fog_01_art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_1__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_1__01, {
      position: Vector3.create(-41.89999, 25.5, -79.2),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_fog_01_art_1__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (2)
    this.s0_fog_01_art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_2__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_2__01, {
      position: Vector3.create(49.5, 19.1, -56.2),
      rotation: Quaternion.create(0, 0.9418097, 0, 0.3361466),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_fog_01_art_2__01).parent = this.s0_COG_Landscape_Planes_01
    // fog_01_art (3)
    this.s0_fog_01_art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_3__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_3__01, {
      position: Vector3.create(30.40001, 37, -54.7),
      rotation: Quaternion.create(0, 0.9418097, 0, 0.3361466),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_fog_01_art_3__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (4)
    this.s0_fog_01_art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_4__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_4__01, {
      position: Vector3.create(38, 37, 54.60001),
      rotation: Quaternion.create(0, 0.9418097, 0, 0.3361466),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_fog_01_art_4__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (5)
    this.s0_fog_01_art_5__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_5__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_5__01, {
      position: Vector3.create(-0.09999084, 16.2, 54.60001),
      rotation: Quaternion.create(0, 0.9418097, 0, 0.3361466),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_fog_01_art_5__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (6)
    this.s0_fog_01_art_6__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_6__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_6__01, {
      position: Vector3.create(-97.2, 16.2, 82.10001),
      rotation: Quaternion.create(0, 0.9418097, 0, 0.3361466),
      scale: Vector3.create(0.6869301, 0.68693, 0.6869301)
    })
    Transform.getMutable(this.s0_fog_01_art_6__01).parent = this.s0_COG_Landscape_Planes_01
    // fog_01_art (7)
    this.s0_fog_01_art_7__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_7__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_7__01, {
      position: Vector3.create(-81.89999, 30.8, 68.89999),
      rotation: Quaternion.create(0, 0.9418097, 0, 0.3361466),
      scale: Vector3.create(0.8000001, 0.8, 0.8000001)
    })
    Transform.getMutable(this.s0_fog_01_art_7__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (8)
    this.s0_fog_01_art_8__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_8__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_8__01, {
      position: Vector3.create(-83.89999, 6.700001, -72.9),
      rotation: Quaternion.create(0, 0.9999082, 0, -0.01355115),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_fog_01_art_8__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (9)
    this.s0_fog_01_art_9__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_9__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_9__01, {
      position: Vector3.create(-94.89999, 10.8, -72.2),
      rotation: Quaternion.create(0, 0.9999082, 0, -0.01355115),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_fog_01_art_9__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (10)
    this.s0_fog_01_art_10__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_10__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_10__01, {
      position: Vector3.create(-94.89999, 10.8, 22.5),
      rotation: Quaternion.create(0, 0.9999082, 0, -0.01355115),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_fog_01_art_10__01).parent = this.s0_COG_Landscape_Planes_01
    // fog_01_art (1)
    this.s0_fog_01_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_01, {
      position: Vector3.create(-41.89999, 16.4, -75.1),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1, 1, 1)
    })
    Transform.getMutable(this.s0_fog_01_art_01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (11)
    this.s0_fog_01_art_11__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_11__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_11__01, {
      position: Vector3.create(92.1, 37, -0.2),
      rotation: Quaternion.create(0, 0.9516705, 0, 0.3071209),
      scale: Vector3.create(0.6348327, 0.6348327, 0.6348327)
    })
    Transform.getMutable(this.s0_fog_01_art_11__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (12)
    this.s0_fog_01_art_12__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_12__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_12__01, {
      position: Vector3.create(-10, 44.1, -23.2),
      rotation: Quaternion.create(0.6541535, 0.7541378, 0.04167933, 0.04027839),
      scale: Vector3.create(0.2795213, 0.2795213, 0.2795213)
    })
    Transform.getMutable(this.s0_fog_01_art_12__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (13)
    this.s0_fog_01_art_13__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_13__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_13__01, {
      position: Vector3.create(-12.39999, 44.1, -44.31),
      rotation: Quaternion.create(0.4859794, 0.8474898, 0.00236929, -0.2134935),
      scale: Vector3.create(0.3236018, 0.2795213, 0.2795213)
    })
    Transform.getMutable(this.s0_fog_01_art_13__01).parent = this.s0_COG_Landscape_Planes_01
    // fog_01_art (14)
    this.s0_fog_01_art_14__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_14__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_14__01, {
      position: Vector3.create(35.44, 44.37, -44.57),
      rotation: Quaternion.create(0.5745567, 0.8139309, 0.06601622, 0.0551617),
      scale: Vector3.create(0.2206122, 0.2206122, 0.2206122)
    })
    Transform.getMutable(this.s0_fog_01_art_14__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (15)
    this.s0_fog_01_art_15__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_15__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_15__01, {
      position: Vector3.create(60.8, 44.55, -35.4),
      rotation: Quaternion.create(0.6306638, 0.7647706, -0.07878792, -0.105743),
      scale: Vector3.create(0.2206122, 0.2206122, 0.2206122)
    })
    Transform.getMutable(this.s0_fog_01_art_15__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (16)
    this.s0_fog_01_art_16__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_16__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_16__01, {
      position: Vector3.create(38.63, 49.45, 0.01),
      rotation: Quaternion.create(0.7110213, 0.6452352, -0.204708, -0.1903022),
      scale: Vector3.create(0.2206122, 0.2206122, 0.2206122)
    })
    Transform.getMutable(this.s0_fog_01_art_16__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (17)
    this.s0_fog_01_art_17__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_17__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_17__01, {
      position: Vector3.create(29.25, 46.83, -13.52),
      rotation: Quaternion.create(0.6087653, 0.7295131, -0.1945222, -0.2436736),
      scale: Vector3.create(0.2007571, 0.2007571, 0.2007571)
    })
    Transform.getMutable(this.s0_fog_01_art_17__01).parent = this.s0_COG_Landscape_Planes_01
    // fog_01_art (18)
    this.s0_fog_01_art_18__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_18__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_18__01, {
      position: Vector3.create(15.56, 45.87, -21.23),
      rotation: Quaternion.create(0.52968, 0.6588287, -0.3687452, -0.3865371),
      scale: Vector3.create(0.2007571, 0.2007571, 0.2007571)
    })
    Transform.getMutable(this.s0_fog_01_art_18__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (19)
    this.s0_fog_01_art_19__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_19__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_19__01, {
      position: Vector3.create(-2.27, 48.07, -26.05),
      rotation: Quaternion.create(0.6293545, 0.7159024, -0.2568872, -0.1593913),
      scale: Vector3.create(0.2007571, 0.2007571, 0.2007571)
    })
    Transform.getMutable(this.s0_fog_01_art_19__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (20)
    this.s0_fog_01_art_20__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_20__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_20__01, {
      position: Vector3.create(-3.71, 50.73, 23.97),
      rotation: Quaternion.create(0.7110213, 0.6452352, -0.204708, -0.1903022),
      scale: Vector3.create(0.1988792, 0.1988792, 0.1988792)
    })
    Transform.getMutable(this.s0_fog_01_art_20__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (21)
    this.s0_fog_01_art_21__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_21__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_21__01, {
      position: Vector3.create(-17.71, 37.29, 28.92),
      rotation: Quaternion.create(0.6461971, 0.5788686, -0.3509202, -0.3524141),
      scale: Vector3.create(0.4620959, 0.4620959, 0.4620959)
    })
    Transform.getMutable(this.s0_fog_01_art_21__01).parent = this.s0_COG_Landscape_Planes_01
    // fog_01_art (22)
    this.s0_fog_01_art_22__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_22__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_22__01, {
      position: Vector3.create(42.42, 43.67, -46.19),
      rotation: Quaternion.create(0.3944705, 0.5859634, 0.5007698, 0.5002697),
      scale: Vector3.create(0.2206122, 0.2206122, 0.2206122)
    })
    Transform.getMutable(this.s0_fog_01_art_22__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (23)
    this.s0_fog_01_art_23__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_23__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_23__01, {
      position: Vector3.create(27.07, 43.09, -28.13),
      rotation: Quaternion.create(0.6123281, 0.6935603, 0.2244996, 0.3059876),
      scale: Vector3.create(0.2206122, 0.2206122, 0.2206122)
    })
    Transform.getMutable(this.s0_fog_01_art_23__01).parent = this.s0_COG_Landscape_Planes_01

    // fog_01_art (24)
    this.s0_fog_01_art_24__01 = engine.addEntity()
    GltfContainer.create(this.s0_fog_01_art_24__01, { src: 'assets/scene/models/unity_assets/s0_fog_01_art_1__01.glb' })
    Transform.create(this.s0_fog_01_art_24__01, {
      position: Vector3.create(0.43, 51.07, -16.03),
      rotation: Quaternion.create(0.6684532, 0.6886779, 0.1234878, 0.2522776),
      scale: Vector3.create(0.1334934, 0.1334934, 0.1334934)
    })
    Transform.getMutable(this.s0_fog_01_art_24__01).parent = this.s0_COG_Landscape_Planes_01
    // --> DEFER_LOADING
    console.log('onSceneReadyObservable called. loading non critical values', 'COG cables')
    // COG_Cable_cap
    this.s0_COG_Cable_cap_01 = engine.addEntity()
    Transform.create(this.s0_COG_Cable_cap_01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(1, 1, 1)
    })

    // Cable_cap_Art
    this.s0_Cable_cap_Art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_01, { src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb' })
    Transform.create(this.s0_Cable_cap_Art_01, {
      position: Vector3.create(194.334, 63.359, 119.553),
      rotation: Quaternion.create(-0.6632667, 0.6632667, -0.2451068, 0.2451067),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (1)
    this.s0_Cable_cap_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_1__01, {
      position: Vector3.create(195.904, 64.13739, 120.864),
      rotation: Quaternion.create(0.4384536, 0.8292188, 0.1620282, 0.3064335),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_1__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (2)
    this.s0_Cable_cap_Art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_2__01, {
      position: Vector3.create(201.356, 64.077, 122.285),
      rotation: Quaternion.create(-0.6988948, 0.7152245, -3.054966e-8, -3.126345e-8),
      scale: Vector3.create(0.07613528, 0.07613528, 0.07613528)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_2__01).parent = this.s0_COG_Cable_cap_01
    // Cable_cap_Art (3)
    this.s0_Cable_cap_Art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_3__01, {
      position: Vector3.create(189.1353, 63.77288, 115.6139),
      rotation: Quaternion.create(0.7539702, 0.5792547, 0.2524149, 0.1796653),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_3__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (4)
    this.s0_Cable_cap_Art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_4__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_4__01, {
      position: Vector3.create(187.4233, 64.73728, 114.1308),
      rotation: Quaternion.create(-0.4493738, 0.8001497, -0.2350269, 0.3202906),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_4__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (5)
    this.s0_Cable_cap_Art_5__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_5__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_5__01, {
      position: Vector3.create(166.623, 65.755, 98.867),
      rotation: Quaternion.create(0.003740964, -0.06435917, -0.7190195, 0.6919935),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_5__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (6)
    this.s0_Cable_cap_Art_6__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_6__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_6__01, {
      position: Vector3.create(159.1846, 65.17431, 108.1971),
      rotation: Quaternion.create(0.5903078, 0.719475, 0.3113926, 0.1921646),
      scale: Vector3.create(0.0928479, 0.1694833, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_6__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (7)
    this.s0_Cable_cap_Art_7__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_7__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_7__01, {
      position: Vector3.create(165.313, 64.984, 121.5),
      rotation: Quaternion.create(-0.04135002, 0.8410586, -0.5385682, -0.02924232),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_7__01).parent = this.s0_COG_Cable_cap_01
    // Cable_cap_Art (8)
    this.s0_Cable_cap_Art_8__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_8__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_8__01, {
      position: Vector3.create(165.332, 64.713, 122.934),
      rotation: Quaternion.create(-0.650785, 0.001526064, -0.07112417, -0.755922),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_8__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (9)
    this.s0_Cable_cap_Art_9__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_9__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_9__01, {
      position: Vector3.create(164.535, 66.302, 133.493),
      rotation: Quaternion.create(-0.04013818, 0.627962, -0.7769762, 0.01899437),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_9__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (10)
    this.s0_Cable_cap_Art_10__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_10__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_10__01, {
      position: Vector3.create(164.7958, 67.0889, 135.3394),
      rotation: Quaternion.create(0.0645291, 0.8061044, 0.5767986, -0.1154786),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_10__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (11)
    this.s0_Cable_cap_Art_11__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_11__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_11__01, {
      position: Vector3.create(166.5, 67.085, 141.886),
      rotation: Quaternion.create(-0.1638656, 0.7515974, -0.6057308, -0.2033214),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_11__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (12)
    this.s0_Cable_cap_Art_12__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_12__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_12__01, {
      position: Vector3.create(167.317, 67.459, 143.113),
      rotation: Quaternion.create(0.1385873, 0.8181386, 0.5123064, -0.2213258),
      scale: Vector3.create(0.0928479, 0.0928479, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_12__01).parent = this.s0_COG_Cable_cap_01
    // Cable_cap_Art (13)
    this.s0_Cable_cap_Art_13__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_13__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_13__01, {
      position: Vector3.create(170.301, 67.489, 147.089),
      rotation: Quaternion.create(-0.2535414, 0.674651, -0.643211, -0.2585394),
      scale: Vector3.create(0.0928479, 0.1112875, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_13__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (14)
    this.s0_Cable_cap_Art_14__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_14__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_14__01, {
      position: Vector3.create(171.164, 67.949, 148.61),
      rotation: Quaternion.create(-0.5412271, -0.1328425, 0.09264027, -0.8251328),
      scale: Vector3.create(0.0928479, 0.1112875, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_14__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (15)
    this.s0_Cable_cap_Art_15__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_15__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_15__01, {
      position: Vector3.create(175.441, 68.464, 160.606),
      rotation: Quaternion.create(0.2117385, 0.6884145, -0.6630684, 0.2039426),
      scale: Vector3.create(0.0928479, 0.08598629, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_15__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (16)
    this.s0_Cable_cap_Art_16__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_16__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_16__01, {
      position: Vector3.create(174.255, 68.538, 162.3),
      rotation: Quaternion.create(0.1997307, -0.6765053, -0.6752146, -0.2157162),
      scale: Vector3.create(0.0928479, 0.08598629, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_16__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (17)
    this.s0_Cable_cap_Art_17__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_17__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_17__01, {
      position: Vector3.create(155.407, 68.215, 164.14),
      rotation: Quaternion.create(-0.4580262, -0.5364363, -0.5491298, 0.4482241),
      scale: Vector3.create(0.0928479, 0.08598629, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_17__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (18)
    this.s0_Cable_cap_Art_18__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_18__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_18__01, {
      position: Vector3.create(153.268, 68.788, 163.989),
      rotation: Quaternion.create(0.3449317, -0.66013, 0.2854593, 0.6031283),
      scale: Vector3.create(0.0928479, 0.08598629, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_18__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (19)
    this.s0_Cable_cap_Art_19__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_19__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_19__01, {
      position: Vector3.create(147.998, 68.939, 163.232),
      rotation: Quaternion.create(0.6949978, 0.7141988, 0.05952521, 0.0579248),
      scale: Vector3.create(0.0928479, 0.08598629, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_19__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (20)
    this.s0_Cable_cap_Art_20__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_20__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_20__01, {
      position: Vector3.create(146.692, 71.533, 163.003),
      rotation: Quaternion.create(-0.4428708, 0.8929591, -0.03601864, -0.07205822),
      scale: Vector3.create(0.0928479, 0.08598629, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_20__01).parent = this.s0_COG_Cable_cap_01
    // Cable_cap_Art (21)
    this.s0_Cable_cap_Art_21__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_21__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_21__01, {
      position: Vector3.create(121.475, 70.07, 150.703),
      rotation: Quaternion.create(0.5259842, 0.7924408, 0.1420939, 0.2742039),
      scale: Vector3.create(0.0928479, 0.1663233, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_21__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (22)
    this.s0_Cable_cap_Art_22__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_22__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_22__01, {
      position: Vector3.create(118.476, 73.598, 147.483),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(0.0928479, 0.08524068, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_22__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (23)
    this.s0_Cable_cap_Art_23__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_23__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_23__01, {
      position: Vector3.create(118.257, 75.247, 147.483),
      rotation: Quaternion.create(0.8954884, 0.4450848, 3.914304e-8, -1.945527e-8),
      scale: Vector3.create(0.0928479, 0.08524068, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_23__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (24)
    this.s0_Cable_cap_Art_24__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_24__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_24__01, {
      position: Vector3.create(116.612, 76.819, 147.46),
      rotation: Quaternion.create(-0.3864889, 0.8650293, 0.1233773, -0.295176),
      scale: Vector3.create(0.0928479, 0.08524068, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_24__01).parent = this.s0_COG_Cable_cap_01
    // Cable_cap_Art (25)
    this.s0_Cable_cap_Art_25__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_25__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_25__01, {
      position: Vector3.create(103.636, 76.836, 154.577),
      rotation: Quaternion.create(0.6934031, 0.7201743, -0.01676165, -0.01613862),
      scale: Vector3.create(0.0928479, 0.08524068, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_25__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (29)
    this.s0_Cable_cap_Art_29__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_29__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_29__01, {
      position: Vector3.create(96.008, 77.113, 141.753),
      rotation: Quaternion.create(0.3799406, 0.4430497, -0.551553, -0.5959376),
      scale: Vector3.create(0.0928479, 0.08524068, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_29__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (30)
    this.s0_Cable_cap_Art_30__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_30__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_30__01, {
      position: Vector3.create(95.704, 77.085, 142.007),
      rotation: Quaternion.create(0.2905858, 0.3594061, -0.6093693, -0.6442486),
      scale: Vector3.create(0.0928479, 0.08524068, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_30__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (31)
    this.s0_Cable_cap_Art_31__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_31__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_31__01, {
      position: Vector3.create(96.51, 77.021, 141.719),
      rotation: Quaternion.create(0.4517133, 0.5087546, -0.4916019, -0.5435545),
      scale: Vector3.create(0.0928479, 0.08524068, 0.0928479)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_31__01).parent = this.s0_COG_Cable_cap_01
    // Cable_cap_Art (33)
    this.s0_Cable_cap_Art_33__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_33__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_33__01, {
      position: Vector3.create(98.229, 77.131, 144.562),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(0.1755289, 0.1611475, 0.1755289)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_33__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (34)
    this.s0_Cable_cap_Art_34__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_34__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_34__01, {
      position: Vector3.create(96.878, 77.131, 140.121),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(0.1755289, 0.1611475, 0.1755289)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_34__01).parent = this.s0_COG_Cable_cap_01

    // Cable_cap_Art (35)
    this.s0_Cable_cap_Art_35__01 = engine.addEntity()
    GltfContainer.create(this.s0_Cable_cap_Art_35__01, {
      src: 'assets/scene/models/unity_assets/s0_Cable_cap_Art_01.glb'
    })
    Transform.create(this.s0_Cable_cap_Art_35__01, {
      position: Vector3.create(97.467, 77.131, 142.393),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(0.1755289, 0.1611475, 0.1755289)
    })
    Transform.getMutable(this.s0_Cable_cap_Art_35__01).parent = this.s0_COG_Cable_cap_01

    // -->finish defer //END CABLE
    // Leaf_Anim_02_Art (2)
    this.s0_Leaf_Anim_02_Art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_02_Art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_02_Art_1__01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_02_Art_2__01, {
      position: Vector3.create(176.88, 63.52, 137.83),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(2.773876, 2.773876, 2.773876)
    })
    Transform.getMutable(this.s0_Leaf_Anim_02_Art_2__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (1)
    this.s0_Leaf_Anim_Art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_1__01, {
      position: Vector3.create(159.01, 66.23, 143.01),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1.372964, 1.372964, 1.372964)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_1__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (2)
    this.s0_Leaf_Anim_Art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_2__01, {
      position: Vector3.create(161.55, 65.22, 153.33),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1.372964, 1.372964, 1.372964)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_2__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (3)
    this.s0_Leaf_Anim_Art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_3__01, {
      position: Vector3.create(145.11, 71.56, 154.06),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1.372964, 1.372964, 1.372964)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_3__01).parent = this.s0_COG_Cable_cap_01
    // Leaf_Anim_Art (4)
    this.s0_Leaf_Anim_Art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_4__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_4__01, {
      position: Vector3.create(131.24, 70.97, 156.12),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1.372964, 1.372964, 1.372964)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_4__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (5)
    this.s0_Leaf_Anim_Art_5__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_5__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_5__01, {
      position: Vector3.create(195.69, 65.59, 131.08),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1.372964, 1.372964, 1.372964)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_5__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (6)
    this.s0_Leaf_Anim_Art_6__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_6__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_6__01, {
      position: Vector3.create(199.47, 63.85, 137.41),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(1.372964, 1.372964, 1.372964)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_6__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_02_Art (3)
    this.s0_Leaf_Anim_02_Art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_02_Art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_02_Art_1__01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_02_Art_3__01, {
      position: Vector3.create(207.32, 59.6, 126.8),
      rotation: Quaternion.create(0.1024347, 0.994642, -0.002110302, -0.01379873),
      scale: Vector3.create(2.773876, 2.773876, 2.773876)
    })
    Transform.getMutable(this.s0_Leaf_Anim_02_Art_3__01).parent = this.s0_COG_Cable_cap_01
    // Leaf_Anim_02_Art (4)
    this.s0_Leaf_Anim_02_Art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_02_Art_4__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_02_Art_1__01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_02_Art_4__01, {
      position: Vector3.create(204.9, 57.7, 135.27),
      rotation: Quaternion.create(0.1024347, 0.994642, -0.002110302, -0.01379873),
      scale: Vector3.create(2.773876, 2.773876, 2.773876)
    })
    Transform.getMutable(this.s0_Leaf_Anim_02_Art_4__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (7)
    this.s0_Leaf_Anim_Art_7__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_7__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_7__01, {
      position: Vector3.create(217.96, 67.59, 138.27),
      rotation: Quaternion.create(0.1255271, -0.2257276, -0.02934363, -0.9656236),
      scale: Vector3.create(1.372964, 1.372964, 1.372964)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_7__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (8)
    this.s0_Leaf_Anim_Art_8__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_8__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_8__01, {
      position: Vector3.create(230.95, 68.7, 127.27),
      rotation: Quaternion.create(0.1754349, -0.576309, -0.05000548, -0.7966117),
      scale: Vector3.create(1.372964, 1.372964, 1.372964)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_8__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (9)
    this.s0_Leaf_Anim_Art_9__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_9__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_9__01, {
      position: Vector3.create(156.39, 62.39, 108.16),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(2.140314, 2.140314, 2.140314)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_9__01).parent = this.s0_COG_Cable_cap_01
    // Leaf_Anim_Art (10)
    this.s0_Leaf_Anim_Art_10__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_10__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_10__01, {
      position: Vector3.create(156.7, 63.42, 114.85),
      rotation: Quaternion.create(0, 0.4717453, 0, -0.8817349),
      scale: Vector3.create(3.262052, 3.262052, 3.262052)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_10__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (11)
    this.s0_Leaf_Anim_Art_11__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_11__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_11__01, {
      position: Vector3.create(94.08, 75.83, 142.98),
      rotation: Quaternion.create(0, 0.6050344, 0, -0.7961994),
      scale: Vector3.create(3.262052, 3.262052, 3.262052)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_11__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (12)
    this.s0_Leaf_Anim_Art_12__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_12__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_12__01, {
      position: Vector3.create(88.96, 73.9, 156.31),
      rotation: Quaternion.create(0, 0.6050344, 0, -0.7961994),
      scale: Vector3.create(3.262052, 3.262052, 3.262052)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_12__01).parent = this.s0_COG_Cable_cap_01

    // Leaf_Anim_Art (13)
    this.s0_Leaf_Anim_Art_13__01 = engine.addEntity()
    GltfContainer.create(this.s0_Leaf_Anim_Art_13__01, {
      src: 'assets/scene/models/unity_assets/s0_Leaf_Anim_Art_01.glb'
    })
    Transform.create(this.s0_Leaf_Anim_Art_13__01, {
      position: Vector3.create(134.2425, 72.41444, 113.26),
      rotation: Quaternion.create(0.02365519, 0.6045716, 0.03112922, -0.7955908),
      scale: Vector3.create(2.433034, 2.433034, 2.433034)
    })
    Transform.getMutable(this.s0_Leaf_Anim_Art_13__01).parent = this.s0_COG_Cable_cap_01
    // Fireflys Entity
    this.s0_Fireflys_01 = engine.addEntity()
    GltfContainer.create(this.s0_Fireflys_01, { src: 'assets/scene/models/unity_assets/fireflys.glb' }) // Cambia el src si tienes un archivo específico
    Transform.create(this.s0_Fireflys_01, {
      position: Vector3.create(89.8811, 78.51, 137.5337),
      rotation: Quaternion.create(0, 0, 0, 1),
      scale: Vector3.create(1, 1, 1)
    })
    // Det_Firefly_art
    this.s0_Det_Firefly_art_01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_01, {
      position: Vector3.create(134.4389, -9.27, -9.003708),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (1)
    this.s0_Det_Firefly_art_1__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_1__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_1__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_1__01, {
      position: Vector3.create(134.0589, -9.639999, -7.623703),
      rotation: Quaternion.create(0, 0.7702808, 0, -0.6377048),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_1__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_1__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (2)
    this.s0_Det_Firefly_art_2__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_2__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_2__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_2__01, {
      position: Vector3.create(133.6359, -9.913, -7.2547),
      rotation: Quaternion.create(0, 0.3352174, 0, -0.9421408),
      scale: Vector3.create(0.05688654, 0.05688655, 0.05688654)
    })
    Animator.getClip(this.s0_Det_Firefly_art_2__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_2__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (3)
    this.s0_Det_Firefly_art_3__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_3__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_3__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_3__01, {
      position: Vector3.create(102.1189, -12.1, -3.19371),
      rotation: Quaternion.create(0, 1, 0, -4.371139e-8),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_3__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_3__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (4)
    this.s0_Det_Firefly_art_4__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_4__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_4__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_4__01, {
      position: Vector3.create(101.0328, -12.1, -5.354401),
      rotation: Quaternion.create(0, 0.611768, 0, -0.7910372),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_4__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_4__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (5)
    this.s0_Det_Firefly_art_5__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_5__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_5__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_5__01, {
      position: Vector3.create(115.2529, -12.71, 2.848297),
      rotation: Quaternion.create(0, 0.611768, 0, -0.7910372),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_5__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_5__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (6)
    this.s0_Det_Firefly_art_6__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_6__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_6__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_6__01, {
      position: Vector3.create(66.9389, -10.23, -19.7737),
      rotation: Quaternion.create(0, 0.611768, 0, -0.7910372),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_6__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_6__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (7)
    this.s0_Det_Firefly_art_7__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_7__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_7__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_7__01, {
      position: Vector3.create(68.4689, -11.61, -22.75371),
      rotation: Quaternion.create(0, 0.8172192, 0, 0.576327),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_7__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_7__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (8)
    this.s0_Det_Firefly_art_8__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_8__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_8__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_8__01, {
      position: Vector3.create(66.90411, -11.03, -24.2962),
      rotation: Quaternion.create(0, 0.6721234, 0, -0.7404392),
      scale: Vector3.create(0.0854332, 0.08543321, 0.0854332)
    })
    Animator.getClip(this.s0_Det_Firefly_art_8__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_8__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (9)
    this.s0_Det_Firefly_art_9__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_9__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_9__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_9__01, {
      position: Vector3.create(86.2589, -10.077, 3.088287),
      rotation: Quaternion.create(0, 0.8172192, 0, 0.576327),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_9__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_9__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (10)
    this.s0_Det_Firefly_art_10__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_10__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_10__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_10__01, {
      position: Vector3.create(85.7729, -10.574, 4.603287),
      rotation: Quaternion.create(0, 0.9551951, 0, -0.295977),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_10__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_10__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (11)
    this.s0_Det_Firefly_art_11__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_11__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_11__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_11__01, {
      position: Vector3.create(69.3289, -10.574, 9.246292),
      rotation: Quaternion.create(0, 0.9551951, 0, -0.295977),
      scale: Vector3.create(0.08543321, 0.08543321, 0.08543321)
    })
    Animator.getClip(this.s0_Det_Firefly_art_11__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_11__01).parent = this.s0_Fireflys_01

    // Det_Firefly_art (12)
    this.s0_Det_Firefly_art_12__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_12__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_12__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_12__01, {
      position: Vector3.create(70.2489, -10.564, 7.816299),
      rotation: Quaternion.create(0, 0.8107426, 0, 0.5854029),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_12__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_12__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (13)
    this.s0_Det_Firefly_art_13__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_13__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_13__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_13__01, {
      position: Vector3.create(53.5889, -6.02, 14.6263),
      rotation: Quaternion.create(0, 0.8107426, 0, 0.5854029),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_13__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_13__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (14)
    this.s0_Det_Firefly_art_14__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_14__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_14__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_14__01, {
      position: Vector3.create(55.02, -5.402, 15.798),
      rotation: Quaternion.create(0, -0.6610515, 0, 0.7503405),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_14__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_14__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (15)
    this.s0_Det_Firefly_art_15__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_15__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_15__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_15__01, {
      position: Vector3.create(46.28889, -1.780001, -21.46371),
      rotation: Quaternion.create(0, -0.4729443, 0, 0.8810923),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_15__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_15__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (16)
    this.s0_Det_Firefly_art_16__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_16__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_16__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_16__01, {
      position: Vector3.create(41.53177, -0.7399998, -31.35863),
      rotation: Quaternion.create(0, 0.6882907, 0, 0.7254351),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_16__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_16__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (17)
    this.s0_Det_Firefly_art_17__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_17__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_17__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_17__01, {
      position: Vector3.create(43.8689, -1.78, -24.10371),
      rotation: Quaternion.create(0, -0.304344, 0, 0.9525623),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_17__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_17__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (18)
    this.s0_Det_Firefly_art_18__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_18__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_18__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_18__01, {
      position: Vector3.create(15.57542, -0.01799965, 21.51099),
      rotation: Quaternion.create(0, -0.6709128, 0, 0.7415362),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_18__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_18__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (19)
    this.s0_Det_Firefly_art_19__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_19__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_19__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_19__01, {
      position: Vector3.create(15.78889, -0.4899998, 22.27629),
      rotation: Quaternion.create(0, 0.2039752, 0, 0.9789761),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_19__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_19__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (20)
    this.s0_Det_Firefly_art_20__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_20__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_20__01, {
      states: [{ clip: 'TakeFirefly', shouldReset: false, speed: 1, loop: true }]
    })
    Transform.create(this.s0_Det_Firefly_art_20__01, {
      position: Vector3.create(1.508896, 0, 3.006287),
      rotation: Quaternion.create(0, 0.2039752, 0, 0.9789761),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_20__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_20__01).parent = this.s0_Fireflys_01
    // Det_Firefly_art (21)
    this.s0_Det_Firefly_art_21__01 = engine.addEntity()
    GltfContainer.create(this.s0_Det_Firefly_art_21__01, {
      src: 'assets/scene/models/unity_assets/s0_Det_Firefly_art_01.glb'
    })
    Animator.create(this.s0_Det_Firefly_art_21__01, {
      states: [
        {
          clip: 'TakeFirefly',
          shouldReset: false,
          speed: 1,
          loop: true
        }
      ]
    })
    Transform.create(this.s0_Det_Firefly_art_21__01, {
      position: Vector3.create(0, 0, 0),
      rotation: Quaternion.create(0, 0.9996225, 0, -0.02747571),
      scale: Vector3.create(0.1060739, 0.1060739, 0.1060739)
    })
    Animator.getClip(this.s0_Det_Firefly_art_21__01, 'TakeFirefly').playing = true
    Transform.getMutable(this.s0_Det_Firefly_art_21__01).parent = this.s0_Fireflys_01
    //DEFER_LOADING
    console.log('onSceneReadyObservable called. loading non critical values', 'COG laps')
  }
}
