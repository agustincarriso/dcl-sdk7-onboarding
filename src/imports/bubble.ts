import { EasingFunction, Entity, GltfContainer, TextShape, Transform, Tween, engine } from '@dcl/sdk/ecs'
import { Color4, Vector3 } from '@dcl/sdk/math'
import { CLICKME } from '../jsonData/textsTutorialBubble'

export type BubbleTalkOptions = {}

export class BubbleTalk {
  centerEntity: Entity
  textEntity: Entity
  titleEntity: Entity
  text: string
  active: boolean = true

  // Sacle factors

  textScaleFactor: Vector3 = Vector3.create(1, 1, 1)
  titleScaleFactor: Vector3 = Vector3.create(1, 1, 1)

  constructor(entity: Entity) {
    this.text = CLICKME
    this.centerEntity = engine.addEntity()
    Transform.create(this.centerEntity, {
      position: Vector3.create(0, 0.9, 0),
      scale: Vector3.create(0.25, 0.25, 0.25),
      parent: entity
    })
    GltfContainer.create(this.centerEntity, { src: 'assets/scene/models/glb_assets/s0_centerbubble_01.glb' })

    // Text config
    this.textEntity = engine.addEntity()
    Transform.create(this.textEntity, { position: Vector3.create(-0.8, 0.8, -0.04), parent: this.centerEntity })
    TextShape.create(this.textEntity).text = this.text
    TextShape.getMutable(this.textEntity).fontSize = 1.6
    TextShape.getMutable(this.textEntity).textColor = Color4.Black()
    TextShape.getMutable(this.textEntity).textAlign = 5

    // Title config
    this.titleEntity = engine.addEntity()
    Transform.create(this.titleEntity, { position: Vector3.create(-1.1, 1.17, -0.04), parent: this.centerEntity })
    TextShape.create(this.titleEntity).text = '<b>Tobor</b>'
    TextShape.getMutable(this.titleEntity).fontSize = 1.9
    TextShape.getMutable(this.titleEntity).textColor = Color4.Black()
    TextShape.getMutable(this.titleEntity).font = 2
  }

  openBubble(text: string, farMode: boolean): void {
    if (this.active) return
    this.active = true
    TextShape.getMutable(this.textEntity).text = text
    if (farMode === true) {
      this.farMode()

      const startScale = Vector3.create(0, 0, 0)
      const endScale = Vector3.create(0.7, 0.7, 0.7)
      const duration = 500

      this.animateEntity(this.centerEntity, startScale, endScale, duration)
      this.animateEntity(
        this.textEntity,
        Vector3.multiply(startScale, this.textScaleFactor),
        Vector3.multiply(endScale, this.textScaleFactor),
        duration
      )
      this.animateEntity(
        this.titleEntity,
        Vector3.multiply(startScale, this.titleScaleFactor),
        Vector3.multiply(endScale, this.titleScaleFactor),
        duration
      )

      console.log('Bubble in farMode')
    } else {
      const startScale = Vector3.create(0, 0, 0)
      const endScale = Vector3.create(0.25, 0.25, 0.25)
      const duration = 500

      this.animateEntity(this.centerEntity, startScale, endScale, duration)
      this.animateEntity(
        this.textEntity,
        Vector3.multiply(startScale, this.textScaleFactor),
        Vector3.create(1, 1, 1),
        duration
      )
      this.animateEntity(
        this.titleEntity,
        Vector3.multiply(startScale, this.titleScaleFactor),
        Vector3.create(1, 1, 1),
        duration
      )
      this.defaultMode()
      console.log('bubble in defaultMode')
    }
    console.log('thing')
  }

  closeBubbleInTime(): void {
    if (!this.active) return

    this.active = false
    const startScale = Vector3.create(0.7, 0.7, 0.7)
    const endScale = Vector3.create(0, 0, 0)
    const duration = 500

    this.animateEntity(
      this.titleEntity,
      Vector3.multiply(startScale, this.titleScaleFactor),
      Vector3.multiply(endScale, this.titleScaleFactor),
      duration
    )
    this.animateEntity(
      this.textEntity,
      Vector3.multiply(startScale, this.textScaleFactor),
      Vector3.multiply(endScale, this.textScaleFactor),
      duration
    )
    this.animateEntity(
      this.centerEntity,
      Vector3.multiply(startScale, Transform.getMutable(this.centerEntity).scale),
      endScale,
      duration
    )
  }

  private animateEntity(entity: Entity, startScale: Vector3, endScale: Vector3, duration: number) {
    Tween.createOrReplace(entity, {
      mode: Tween.Mode.Scale({
        start: startScale,
        end: endScale
      }),
      duration: duration,
      easingFunction: EasingFunction.EF_LINEAR
    })
  }
  farMode(): void {
    Transform.getMutable(this.textEntity).position = Vector3.create(0, 0.8, -0.04)
    TextShape.getMutable(this.textEntity).textAlign = 1
    TextShape.getMutable(this.textEntity).fontSize = 2.3
  }
  defaultMode() {
    Transform.getMutable(this.textEntity).position = Vector3.create(-0.16, 0.8, -0.04)
    TextShape.getMutable(this.textEntity).textAlign = 1
    Transform.getMutable(this.centerEntity).scale = Vector3.create(0.25, 0.25, 0.25)
    TextShape.getMutable(this.textEntity).fontSize = 1.9
  } 
}
