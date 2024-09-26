//#region lamp
import { Vector3 } from '@dcl/sdk/math'
import { AudioManager } from './audio.manager'
import { AudioSource, engine, Entity, InputAction, MeshRenderer, pointerEventsSystem, Transform } from '@dcl/sdk/ecs'

const music = engine.addEntity()
const clip = 'assets/audio/music/RAC - Genesis Plaza 1.mp3'
AudioSource.create(music, {
  audioClipUrl: clip
})
Transform.create(music, { parent: engine.PlayerEntity })
Transform.getMutable(music).scale = Vector3.create(0,0,0)
AudioSource.getMutable(music).volume = 0.04
AudioSource.getMutable(music).loop = true
AudioSource.getMutable(music).playing = true

const lampClip = 'assets/audio/v3/Lamp.wav'

const lamp1 = engine.addEntity()
Transform.create(lamp1, { position: Vector3.create(124.85, 82, 123.76) })
AudioSource.create(lamp1, {
  audioClipUrl: lampClip
})
AudioSource.getMutable(lamp1).loop = true
AudioSource.getMutable(lamp1).volume = 0.008
AudioSource.playSound(lamp1, clip)

const lamp2 = engine.addEntity()
Transform.create(lamp2, { position: Vector3.create(136.87, 77, 149.46) })
AudioSource.create(lamp2, {
  audioClipUrl: lampClip
})
AudioSource.getMutable(lamp2).loop = true
AudioSource.getMutable(lamp2).volume = 0.008
AudioSource.playSound(lamp2, clip)

const lamp3 = engine.addEntity()
Transform.create(lamp3, { position: Vector3.create(159.85, 74, 161.82) })
AudioSource.create(lamp3, {
  audioClipUrl: lampClip
})
AudioSource.getMutable(lamp3).loop = true
AudioSource.getMutable(lamp3).volume = 0.008
AudioSource.playSound(lamp3, clip)

const lamp4 = engine.addEntity()
Transform.create(lamp4, { position: Vector3.create(164.19, 73, 137.21) })
AudioSource.create(lamp4, {
  audioClipUrl: lampClip
})
AudioSource.getMutable(lamp4).loop = true
AudioSource.getMutable(lamp4).volume = 0.008
AudioSource.playSound(lamp4, clip)

const lamp5 = engine.addEntity()
Transform.create(lamp5, { position: Vector3.create(158.51, 71, 108.98) })
AudioSource.create(lamp5, {
  audioClipUrl: lampClip
})
AudioSource.getMutable(lamp5).loop = true
AudioSource.getMutable(lamp5).volume = 0.008
AudioSource.playSound(lamp5, clip)

const lamp6 = engine.addEntity()
Transform.create(lamp6, { position: Vector3.create(158.51, 71, 108.98) })
AudioSource.create(lamp6, {
  audioClipUrl: lampClip
})
AudioSource.getMutable(lamp6).loop = true
AudioSource.getMutable(lamp6).volume = 0.008
AudioSource.playSound(lamp6, clip)
//#endregion
//#region windOnLeafs

const windOnLEafClip = 'assets/audio/v3/WindOnLeafs.mp3'

const tree1 = engine.addEntity()
Transform.create(tree1, { position: Vector3.create(168.2958, 70, 140.32) })
AudioSource.create(tree1, {
  audioClipUrl: windOnLEafClip
})
AudioSource.getMutable(tree1).loop = true
AudioSource.getMutable(tree1).volume = 0.03
AudioSource.getMutable(tree1).pitch = 0.9
AudioSource.playSound(tree1, windOnLEafClip)

const tree2 = engine.addEntity()
Transform.create(tree2, { position: Vector3.create(195.69, 65.59, 131.08) })
AudioSource.create(tree2, {
  audioClipUrl: windOnLEafClip
})
AudioSource.getMutable(tree2).loop = true
AudioSource.getMutable(tree2).volume = 0.03
AudioSource.getMutable(tree2).pitch = 0.9
AudioSource.playSound(tree2, windOnLEafClip)

const tree3 = engine.addEntity()
Transform.create(tree3, { position: Vector3.create(130, 80, 115) })
AudioSource.create(tree3, {
  audioClipUrl: windOnLEafClip
})
AudioSource.getMutable(tree3).loop = true
AudioSource.getMutable(tree3).volume = 0.03
AudioSource.getMutable(tree3).pitch = 0.9
AudioSource.playSound(tree3, windOnLEafClip)

const tree4 = engine.addEntity()
Transform.create(tree4, { position: Vector3.create(142, 75.59, 152.08) })
AudioSource.create(tree4, {
  audioClipUrl: windOnLEafClip
})
AudioSource.getMutable(tree4).loop = true
AudioSource.getMutable(tree4).volume = 0.03
AudioSource.getMutable(tree4).pitch = 0.9
AudioSource.playSound(tree4, windOnLEafClip)

const tree5 = engine.addEntity()
Transform.create(tree5, { position: Vector3.create(86, 85.59, 152.08) })
AudioSource.create(tree5, {
  audioClipUrl: windOnLEafClip
})
AudioSource.getMutable(tree5).loop = true
AudioSource.getMutable(tree5).volume = 0.03
AudioSource.getMutable(tree5).pitch = 0.9
AudioSource.playSound(tree5, windOnLEafClip)

//#endregion

//#region Rocks
const floatingRoksClip = 'assets/audio/v3/FloatingRoks.mp3'

const rock = engine.addEntity()
Transform.create(rock, { position: Vector3.create(190, 65.59, 140) })
AudioSource.create(rock, {
  audioClipUrl: floatingRoksClip
})
AudioSource.getMutable(rock).loop = true
AudioSource.getMutable(rock).volume = 0.08
AudioSource.getMutable(rock).pitch = 1
AudioSource.playSound(rock, windOnLEafClip)

const rock2 = engine.addEntity()
Transform.create(rock2, { position: Vector3.create(160, 70, 175) })
AudioSource.create(rock2, {
  audioClipUrl: floatingRoksClip
})
AudioSource.getMutable(rock2).loop = true
AudioSource.getMutable(rock2).volume = 0.08
AudioSource.getMutable(rock2).pitch = 1
AudioSource.playSound(rock2, windOnLEafClip)
//#endregion

//#region Pillars
const pillarClip = 'assets/audio/v3/Pillar.mp3'

export function activateSoundPillar1(pillar: Entity) {
  const pillarPos = Transform.getMutable(pillar).position
  const pillar1 = engine.addEntity()
  Transform.create(pillar1, { position: pillarPos })
  AudioSource.create(pillar1, {
    audioClipUrl: pillarClip
  })
  AudioSource.getMutable(pillar1).loop = true
  AudioSource.getMutable(pillar1).volume = 0.05
  AudioSource.playSound(pillar1, pillarClip)
}

export function activateSoundPillar2(pillarEntity: Entity) {
  const pillarPos = Transform.getMutable(pillarEntity).position
  const pillar = engine.addEntity()
  Transform.create(pillar, { position: pillarPos })
  AudioSource.create(pillar, {
    audioClipUrl: pillarClip
  })
  AudioSource.getMutable(pillar).loop = true
  AudioSource.getMutable(pillar).volume = 0.05
  AudioSource.playSound(pillar, pillarClip)
}

export function activateSoundPillar3(pillarEntity: Entity) {
  const pillarPos = Transform.getMutable(pillarEntity).position
  const pillar = engine.addEntity()
  Transform.create(pillar, { position: pillarPos })
  AudioSource.create(pillar, {
    audioClipUrl: pillarClip
  })
  AudioSource.getMutable(pillar).loop = true
  AudioSource.getMutable(pillar).volume = 0.05
  AudioSource.playSound(pillar, pillarClip)
}

export function activatePillarSound4(pillarEntity: Entity) {
  const pillarPos = Transform.getMutable(pillarEntity).position
  const pillar = engine.addEntity()
  Transform.create(pillar, { position: pillarPos })
  AudioSource.create(pillar, {
    audioClipUrl: pillarClip
  })
  AudioSource.getMutable(pillar).loop = true
  AudioSource.getMutable(pillar).volume = 0.05
  AudioSource.playSound(pillar, pillarClip)
}
//#endregion

//#region Generators
const generatorsClip = 'assets/audio/v3/NotWorkingGenerators.mp3'

const generators = engine.addEntity()
Transform.create(generators, { position: Vector3.create(101, 79, 140) })
AudioSource.create(generators, {
  audioClipUrl: generatorsClip
})
AudioSource.getMutable(generators).loop = true
AudioSource.getMutable(generators).volume = 0.3
AudioSource.playSound(generators, generatorsClip)

export function changeGeneratosSound() {
  engine.removeEntity(generators)
  const generatorsClip = 'assets/audio/v3/FixedGenerators.wav'
  const fixedGenerators = engine.addEntity()
  Transform.create(fixedGenerators, { position: Vector3.create(101, 79, 140) })
  AudioSource.create(fixedGenerators, {
    audioClipUrl: generatorsClip
  })
  AudioSource.getMutable(fixedGenerators).loop = true
  AudioSource.getMutable(fixedGenerators).volume = 0.01
  AudioSource.playSound(fixedGenerators, generatorsClip)
}
//#endregion

//#region Portals
const portalClip = 'assets/audio/v3/Pillar.mp3'

export function activateInitialSoundPortal() {
  const portals = engine.addEntity()
  Transform.create(portals, { position: Vector3.create(100, 95, 95) })
  AudioManager.instance().playOnce('tower_charge', { volume: 1, pitch: 0.3, parent: portals })
  AudioSource.create(portals, {
    audioClipUrl: portalClip
  })
  AudioSource.getMutable(portals).loop = true
  AudioSource.getMutable(portals).volume = 0.5
  AudioSource.playSound(portals, generatorsClip)
}

const portalLoopClip = 'assets/audio/v3/Portals.mp3'

export function activateLoopSoundPortal() {
  const portals = engine.addEntity()
  Transform.create(portals, { position: Vector3.create(117.2279, 80.72495, 113.0214) })
  AudioSource.create(portals, {
    audioClipUrl: portalLoopClip
  })
  AudioSource.getMutable(portals).loop = false
  AudioSource.getMutable(portals).volume = 2.5
  AudioSource.playSound(portals, portalLoopClip)
}

let cubeDebuggerEnable = false
const soundEntityes = [
  rock,
  rock2,
  tree1,
  tree2,
  tree3,
  tree4,
  tree5,
  lamp1,
  lamp2,
  lamp3,
  lamp4,
  lamp5,
  lamp6,
  generators
]
// cubeSpawner()

function cubeSpawner() {
  if (cubeDebuggerEnable) {
    for (const e of soundEntityes) {
      const a = engine.addEntity()
      Transform.create(a, { parent: e })
      MeshRenderer.setBox(a)
      let hoverText = 'has no audio'
      if (AudioSource.has(e)) {
        const audioSource = AudioSource.get(e)
        hoverText = audioSource.audioClipUrl + '\nplaying:' + audioSource.playing
      }
      pointerEventsSystem.onPointerDown(
        {
          entity: a,
          opts: { button: InputAction.IA_PRIMARY, hoverText: hoverText }
        },
        function () {}
      )
    }
  }
}
