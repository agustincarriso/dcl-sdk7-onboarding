/**
 * Class for the event board
 *
 * Entities
 * @param boardBase The board base where the board will be placed
 * @param board The board where the event will be displayed
 * @param title The title of the event
 * @param portalTriggerArea The trigger area for the portal to teleport
 * @param clickPanel The panel to click on to teleport
 * Materials
 * @param inactiveEventMaterial: Material
 * @param activeEventMaterial: Material
 * @param totalTransMaterial: Material
 * @param imageMaterial: any
 *
 * @param dots: Array of dots for the event if there are more than one and need display
 * @param events: Array of events
 */

import {
  engine,
  Entity,
  InputAction,
  inputSystem,
  Material,
  MaterialTransparencyMode,
  MeshCollider,
  PBMaterial,
  PBMaterial_PbrMaterial,
  PBMeshRenderer,
  PointerEvents,
  PointerEventType,
  TextAlignMode,
  TextShape,
  Texture,
  Transform
} from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
import * as utils from '@dcl-sdk/utils'
import { teleportTo } from '~system/RestrictedActions'
import { splitTextIntoLines } from './helperFunctions'

export class PortalEvents {
  boardBase: Entity
  board: Entity = engine.addEntity()
  title: Entity
  clickPanel: Entity
  inactiveEventMaterial: PBMaterial_PbrMaterial = {}
  activeEventMaterial: PBMaterial_PbrMaterial = {}
  totalTransMaterial: PBMaterial_PbrMaterial = {}
  imageMaterial: PBMaterial_PbrMaterial = {}
  dots = []
  events = []
  originSpawn: Entity = engine.addEntity()
  constructor(entity: Entity, event: any, titleSpot?: Entity) {
    this.events = event
    this.materials()
    // Create the board
    this.boardBase = entity
    Transform.getMutable(this.boardBase).scale.y = Transform.get(this.boardBase).scale.y * -1
    // Transform.getMutable(this.boardBase).rotation.y = Transform.get(this.boardBase).rotation.y * -1
    // Transform.getMutable(this.boardBase).rotation.w = Transform.get(this.boardBase).rotation.w * -1
    // Create the title
    this.title = engine.addEntity()
    TextShape.create(this.title, { text: '' })
    TextShape.getMutable(this.title).fontSize = 2
    TextShape.getMutable(this.title).font = 2
    TextShape.getMutable(this.title).textColor = Color4.White()
    TextShape.getMutable(this.title).textAlign = TextAlignMode.TAM_MIDDLE_CENTER
    TextShape.getMutable(this.title).lineCount = 2
    TextShape.getMutable(this.title).height = 2
    TextShape.getMutable(this.title).width = 8

    Transform.create(this.title, {
      position: Vector3.create(0, 0, 0.015),
      scale: Vector3.create(-0.3, 0.3, 0.3)
    })
    Transform.getMutable(this.title).parent = titleSpot
    // Create the click panel
    this.clickPanel = engine.addEntity()
    MeshCollider.setBox(this.clickPanel)
    Transform.create(this.clickPanel, {
      position: Vector3.create(0, 0, 0.02),
      scale: Vector3.create(1, 1, 0.2),
      rotation: Quaternion.fromEulerDegrees(0, 0, 180)
    })
    Material.setPbrMaterial(this.clickPanel, this.totalTransMaterial)
    Transform.getMutable(this.clickPanel).parent = this.boardBase

    this.createTriggerZone(this.boardBase)
  }
  createTriggerZone(originSpawn: Entity) {
    //new DebugPivot(soundTriggerEnt, new Vector3(1,1,1))
    this.originSpawn = originSpawn
  }
  materials() {
    this.imageMaterial = {
      roughness: 1,
      metallic: 0,
      specularIntensity: 0,
      transparencyMode: MaterialTransparencyMode.MTM_ALPHA_BLEND
    }
    this.totalTransMaterial = {
      albedoColor: Color4.create(0, 0, 0, 0)
    }
    this.inactiveEventMaterial = {
      roughness: 1,
      specularIntensity: 0,
      texture: Material.Texture.Common({
        src: 'assets/event_assets/gray.png'
      }),
      alphaTexture: Material.Texture.Common({
        src: 'assets/event_assets/gray.png'
      })
    }
    this.activeEventMaterial = {
      roughness: 1,
      specularIntensity: 0,
      texture: Material.Texture.Common({
        src: 'assets/event_assets/red.png'
      }),
      alphaTexture: Material.Texture.Common({
        src: 'assets/event_assets/red.png'
      })
    }
  }
  displayEvent(events: any[], currentEvent: number) {
    if (events.length <= 0) return
    var eventCoords = ''
    const event = events[currentEvent]
    this.imageMaterial.texture = Material.Texture.Common({
      src: event.image
    })
    Material.setPbrMaterial(this.boardBase, this.imageMaterial)
    //depending on if the call of the api has scene_name or title for (places and events)
    if (event.name) {
      eventCoords = event.x.toString() + ',' + event.y.toString()
      TextShape.getMutable(this.title).text = splitTextIntoLines(event.name, 16, 0)
    } else if (event.title) {
      eventCoords = event.base_position
      TextShape.getMutable(this.title).text = splitTextIntoLines(event.title, 16, 0)
    }
    var hoverText = ''
    PointerEvents.createOrReplace(this.clickPanel, {
      pointerEvents: [
        {
          eventType: PointerEventType.PET_DOWN,
          eventInfo: {
            button: InputAction.IA_POINTER,
            showFeedback: true,
            hoverText: event.title ? event.title : event.name ? event.name : 'Teleport to event',
            maxDistance: 20
          }
        }
      ]
    })
    engine.addSystem(() => {
      if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, this.clickPanel)) {
        if (event.name) {
          teleportTo({ worldCoordinates: { x: event.x.toString(), y: event.y.toString() } })
          hoverText = event.scene_name
        }
        if (event.title) {
          teleportTo(event.base_position)
          hoverText = event.title
        }
      }
    })
    const portalTriggerEnt = engine.addEntity()
    Transform.create(portalTriggerEnt, {
      position: Transform.get(this.originSpawn).position,
      scale: Vector3.create(1, 1, 1)
    })
    MeshCollider.setSphere(portalTriggerEnt)
    utils.triggers.addTrigger(
      portalTriggerEnt,
      1,
      1,
      [{ type: 'sphere', radius: 5, position: Vector3.create(0, 0, 0) }],
      () => {
        if (event.name) {
          teleportTo({ worldCoordinates: { x: event.x.toString(), y: event.y.toString() } })
        }
        if (event.title) {
          teleportTo(event.base_position)
        }
      }
    )
    if (events.length > 1) {
      for (let i = 0; i < this.dots.length; i++) {
        if (i === currentEvent) {
          Material.deleteFrom(this.dots[i])
          Material.setPbrMaterial(this.dots[i], this.activeEventMaterial)
        } else {
          Material.deleteFrom(this.dots[i])
          Material.setPbrMaterial(this.dots[i], this.inactiveEventMaterial)
        }
      }
    }
  }
}
