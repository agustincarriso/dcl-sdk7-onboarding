import { Entity, AudioSource, Transform, engine } from "@dcl/sdk/ecs";
import { Vector3 } from "~system/EngineApi";
import * as utils from '@dcl-sdk/utils'
import { lerp } from "../../../utils/lerp";
import { delay } from "../delay";
export type AudioSourceOptions = {

    volume?: number;
    loop?: boolean;
    pitch?: number; //Pitch, default: 1.0, range from 0.0 to MaxFloat
    autoPlay?: boolean;
}

/**
 * PlayAudioOptions is an object with optional properties position, parent, lifespan, volume, loop, and
 * pitch.
 * @property {Vector3} position - The position of the audio source.
 * @property {IEntity | Attachable} parent - The entity to attach the audio to.
 * @property {number} lifespan - The amount of time in seconds that the audio will play for.
 * @property {number} volume - The volume of the audio.
 * @property {boolean} loop - Whether or not the audio should loop.
 * @property {number} pitch - The pitch of the audio.
 */
export type PlayAudioOptions = {
    position?: Vector3;
    parent?: Entity;
    lifespan?: number;
    volume?: number;
    loop?: boolean;
    pitch?: number;
}

/* It's a class that creates an entity with an audio source and audio clip, and has methods to play,
pause, and stop the audio. */
export class AudioEntity {
    entity: Entity;
    audioClip:string = ''
    playTimeout: any
    private intervalSmoothVolume: any;
    constructor( src: string, options: AudioSourceOptions = {}) {
        this.entity = engine.addEntity()
        this.audioClip = src
        AudioSource.createOrReplace(this.entity,{
            audioClipUrl: this.audioClip
        })

        if (options?.hasOwnProperty('volume')) {
            AudioSource.getMutable(this.entity).volume = options.volume;
        }
        if (options?.hasOwnProperty('loop')) {
            AudioSource.getMutable(this.entity).loop = options.loop;
        }
        if (options?.hasOwnProperty('pitch')) {
            AudioSource.getMutable(this.entity).pitch = options.pitch;
        }
        if (options?.autoPlay) {
            this.play()
        }

    }
    setVolumeSmooth(targetVolume: number, duration: number) {
        if (this.intervalSmoothVolume) {
            utils.timers.clearInterval(this.intervalSmoothVolume);
            this.intervalSmoothVolume = null;
        }
        let startVolume: any = AudioSource.get(this.entity).volume;
        let startTime = Date.now();
        this.intervalSmoothVolume = utils.timers.setInterval(() => {
            let now = Date.now();
            let t = (now - startTime) / duration;
            if (t > 10) {
                t = 1;
                utils.timers.clearInterval(this.intervalSmoothVolume);
            }
            AudioSource.getMutable(this.entity).volume = lerp(startVolume, targetVolume, t);
        }, 33);
    }
    stopSmooth(duration: number) {
        if (this.intervalSmoothVolume) {
            utils.timers.clearInterval(this.intervalSmoothVolume);
            this.intervalSmoothVolume = null;
        }
        let startVolume: any = AudioSource.get(this.entity).volume;
        let startTime = Date.now();
        this.intervalSmoothVolume = utils.timers.setInterval(() => {
            let now = Date.now();
            let t = (now - startTime) / duration;
            if (t > 10) {
                t = 1;
                utils.timers.clearInterval(this.intervalSmoothVolume);
                this.stop();
                AudioSource.getMutable(this.entity).volume = startVolume
            }
            AudioSource.getMutable(this.entity).volume= lerp(startVolume, 0, t);
        }, 33);
    }
    play(options?: PlayAudioOptions) {
        if (options?.position) {
            Transform.getMutable(this.entity).position = options.position
        }

        if (options?.hasOwnProperty('volume')) {
            AudioSource.getMutable(this.entity).volume = options.volume;
        }

        if (options?.hasOwnProperty('loop')) {
            AudioSource.getMutable(this.entity).loop = options.loop;
        }

        if (options?.hasOwnProperty('pitch')) {
            AudioSource.getMutable(this.entity).pitch = options.pitch;
        }

        if (options?.parent) {
            Transform.getMutable(this.entity).parent= options.parent
        }

        if (this.playTimeout) {
            utils.timers.clearTimeout(this.playTimeout);
            this.playTimeout = null;
        }

        if (options?.lifespan) {
            this.playTimeout = delay(() => {
                this.stop();
            }, options.lifespan);
        }

        AudioSource.getMutable(this.entity).playing = true;
    }
    playOnce(options?: Omit<PlayAudioOptions, "loop">) {
        if (options?.position) {
            Transform.getMutable(this.entity).position = options.position
        }

        if (options?.hasOwnProperty('volume')) {
            AudioSource.getMutable(this.entity).volume = options.volume;
        }

        if (options?.hasOwnProperty('pitch')) {
            AudioSource.getMutable(this.entity).pitch = options.pitch;
        }

        if (options?.parent) {
            Transform.getMutable(this.entity).parent = options.parent
        }

        if (this.playTimeout) {
            utils.timers.clearTimeout(this.playTimeout);
            this.playTimeout = null;
        }

        if (options?.lifespan) {
            this.playTimeout = delay(() => {
                this.stop();
            }, options.lifespan);
        }

        AudioSource.playSound(this.entity,this.audioClip)
    }
    playGlobal(options?: Omit<Omit<PlayAudioOptions, "position">, "parent">) {
        const opt: PlayAudioOptions = options || {}
        opt.parent = engine.PlayerEntity
        this.play(opt);
    }
    playOnceGlobal(options?: Omit<Omit<Omit<PlayAudioOptions, "loop">, "position">, "parent">) {
        const opt: PlayAudioOptions = options || {}
        opt.parent = engine.PlayerEntity
        this.playOnce(opt);
    }
    stop() {
        AudioSource.getMutable(this.entity).playing = false;
    }
}