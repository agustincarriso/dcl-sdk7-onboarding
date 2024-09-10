// import { splitTextIntoLines, shortenText } from './helperFunctions'
// import { Entity, MaterialComponentDefinitionExtended, MeshCollider, TextShape, Transform, engine } from '@dcl/sdk/ecs'
// import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
// import { teleportTo } from '~system/RestrictedActions'
// import { Material } from '@dcl/sdk/ecs'
// /**
//  * Class for the event board
//  *
//  * Entities
//  * @param boardBase The board base where the board will be placed
//  * @param board The board where the event will be displayed
//  * @param title The title of the event
//  * @param portalTriggerArea The trigger area for the portal to teleport
//  * @param clickPanel The panel to click on to teleport
//  * Materials
//  * @param inactiveEventMaterial: Material
//  * @param activeEventMaterial: Material
//  * @param totalTransMaterial: Material
//  * @param imageMaterial: any
//  *
//  * @param dots: Array of dots for the event if there are more than one and need display
//  * @param events: Array of events
//  */
// export class PortalEvents {
//   boardBase: Entity
//   board: Entity
//   title: Entity
//   clickPanel: Entity
//   portalTriggerArea: Entity
//   //   inactiveEventMaterial: MaterialComponentDefinitionExtended
//   //   activeEventMaterial: MaterialComponentDefinitionExtended
//   //   totalTransMaterial: MaterialComponentDefinitionExtended
//   //   imageMaterial: MaterialComponentDefinitionExtended
//   dots = []
//   events = []

//   constructor(entity: Entity, event: any, titleSpot?: Entity) {
//     this.events = event
//     //this.materials()

//     // Create the board
//     this.boardBase = entity
//     Transform.getMutable(this.boardBase).scale.y = Transform.get(this.boardBase).scale.y * -1
//     Material.setPbrMaterial(this.boardBase, {
//       roughness: 1,
//       metallic: 0,
//       specularIntensity: 0
//     })

//     // Create the title
//     this.title = engine.addEntity()
//     TextShape.create(this.title)
//     TextShape.getMutable(this.title).fontSize = 2
//     TextShape.getMutable(this.title).font = 2
//     TextShape.getMutable(this.title).textColor = Color4.White()
//     TextShape.getMutable(this.title).textAlign = 2
//     TextShape.getMutable(this.title).lineCount = 2
//     TextShape.getMutable(this.title).height = 2
//     TextShape.getMutable(this.title).width = 8
//     Transform.create(this.title, {
//       position: Vector3.create(0, 0, 0.015),
//       scale: Vector3.create(-0.3, 0.3, 0.3),
//       parent: titleSpot
//     })

//     // Create the click panel
//     this.clickPanel = engine.addEntity()
//     MeshCollider.setBox(this.clickPanel)
//     Transform.create(this.clickPanel, {
//       position: Vector3.create(0, 0, 0.02),
//       scale: Vector3.create(1, 1, 0.2),
//       rotation: Quaternion.fromEulerDegrees(0, 0, 180)
//     })
//     Material.setPbrMaterial(this.clickPanel, {
//       albedoColor: Color4.create(0, 0, 0, 0)
//     })

//     this.clickPanel.addComponent(this.totalTransMaterial)
//     this.clickPanel.getComponent(BoxShape).visible = false
//     this.clickPanel.setParent(this.boardBase)

//     this.createTriggerZone(this.boardBase)

//     //System to update the events on the board
//     // if (this.events.length > 1) {
//     //           engine.addSystem(new SwitchEventSystem(this.events, 2,this))
//     // }
//   }

//   createTriggerZone(originSpawn: IEntity) {
//     const portalTriggerEnt = new Entity()
//     portalTriggerEnt.addComponent(
//       new Transform({
//         position: getWorldPositionByPolygonal(originSpawn),
//         scale: Vector3.One().scale(1)
//       })
//     )

//     const triggerShape = new TriggerSphereShape(5, new Vector3(0, 0, 0))
//     portalTriggerEnt.addComponent(
//       new TriggerComponent(triggerShape, {
//         onCameraEnter: () => {
//           teleportTo('0,0')
//         },
//         enableDebug: false
//       })
//     )
//     //new DebugPivot(soundTriggerEnt, new Vector3(1,1,1))
//     engine.addEntity(portalTriggerEnt)
//     this.portalTriggerArea = portalTriggerEnt
//   }

//   materials() {
//     this.imageMaterial = new Material()
//     this.imageMaterial.roughness = 1
//     this.imageMaterial.metallic = 0
//     this.imageMaterial.specularIntensity = 0

//     this.totalTransMaterial = new Material()
//     this.totalTransMaterial.albedoColor = new Color4(0, 0, 0, 0)

//     if (MaterialPool.instance().hasMaterial('inactiveEventMaterial')) {
//       this.inactiveEventMaterial = MaterialPool.instance().getMaterial('inactiveEventMaterial')
//     } else {
//       this.inactiveEventMaterial = new Material()
//       this.inactiveEventMaterial.roughness = 1
//       this.inactiveEventMaterial.specularIntensity = 0
//       this.inactiveEventMaterial.albedoTexture = new Texture('assets/event_assets/gray.png')
//       this.inactiveEventMaterial.alphaTexture = new Texture('assets/event_assets/gray.png')
//       MaterialPool.instance().setMaterial('inactiveEventMaterial', this.inactiveEventMaterial)
//     }

//     if (MaterialPool.instance().hasMaterial('activeEventMaterial')) {
//       this.activeEventMaterial = MaterialPool.instance().getMaterial('activeEventMaterial')
//     } else {
//       this.activeEventMaterial = new Material()
//       this.activeEventMaterial.roughness = 1
//       this.activeEventMaterial.specularIntensity = 0
//       this.activeEventMaterial.albedoTexture = new Texture('assets/event_assets/red.png')
//       this.activeEventMaterial.alphaTexture = new Texture('assets/event_assets/red.png')
//       MaterialPool.instance().setMaterial('activeEventMaterial', this.activeEventMaterial)
//     }
//   }

//   displayEvent(events: any[], currentEvent: number) {
//     if (events.length <= 0) return
//     var eventCoords = ''
//     const event = events[currentEvent]

//     this.imageMaterial.albedoTexture = new Texture(event.image)
//     this.boardBase.addComponentOrReplace(this.imageMaterial)

//     //depending on if the call of the api has scene_name or title for (places and events)
//     if (event.name) {
//       eventCoords = event.x.toString() + ',' + event.y.toString()
//       this.title.getComponent(TextShape).value = splitTextIntoLines(event.name, 16, 0)
//     } else if (event.title) {
//       eventCoords = event.base_position
//       this.title.getComponent(TextShape).value = splitTextIntoLines(event.title, 16, 0)
//     }

//     //this.coords.getComponent(TextShape).value = eventCoords
//     var hoverText = ''
//     this.clickPanel.addComponentOrReplace(
//       new OnPointerDown(
//         (e) => {
//           if (event.name) {
//             teleportTo(event.x.toString() + ',' + event.y.toString())
//             hoverText = event.scene_name
//           }
//           if (event.title) {
//             teleportTo(event.base_position)
//             hoverText = event.title
//           }
//         },
//         {
//           hoverText: event.title ? event.title : event.name ? event.name : 'Teleport to event',
//           distance: 20
//         }
//       )
//     )

//     //Replace teleport to function
//     this.portalTriggerArea.getComponent(TriggerComponent).onCameraEnter = () => {
//       if (event.name) {
//         teleportTo(event.x.toString() + ',' + event.y.toString())
//       }
//       if (event.title) {
//         teleportTo(event.base_position)
//       }
//     }

//     if (events.length > 1) {
//       for (let i = 0; i < this.dots.length; i++) {
//         if (i === currentEvent) {
//           this.dots[i].addComponentOrReplace(this.activeEventMaterial)
//         } else {
//           this.dots[i].addComponentOrReplace(this.inactiveEventMaterial)
//         }
//       }
//     }
//   }
// }

// class SwitchEventSystem implements ISystem {
//   timer: number
//   interval: number
//   currentEvent: number
//   events: any[]
//   portal: PortalEvents

//   constructor(events: any[], interval: number, portal: PortalEvents) {
//     this.events = events
//     this.timer = interval
//     this.interval = interval
//     this.currentEvent = 0
//     this.portal = portal
//   }

//   update(dt: number) {
//     this.timer -= dt
//     if (this.timer < 0) {
//       this.timer += this.interval
//       this.portal.displayEvent(this.events, this.currentEvent)
//       this.currentEvent += 1
//       if (this.currentEvent >= this.events.length) {
//         this.currentEvent = 0
//       }
//     }
//   }
// }
