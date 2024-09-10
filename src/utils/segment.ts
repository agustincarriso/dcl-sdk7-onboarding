import { getPlayer } from '@dcl/sdk/src/players'

let segment: Segment | null = null

export function getSegment() {
  if (segment) return segment

  segment = new Segment('CH4D0eauyRqTDYnqhI0jw1PVPLmaJENj')
  return segment
}

export async function sendTrak(eventName: string, time: number) {
  const doc: any = {
    playTime: Date.now() - time
  }
  await getSegment().track(eventName, doc)
}

declare function btoa(soruce: string): string

class Segment {
  constructor(public readonly segmentKey: string) {}

  async track(event: string, properties?: Record<string, any>) {
    const userData = getPlayer()
    if (!userData) {
      console.log(`[ignored] track("${event}"${properties ? ', {...}' : ''}): missing userData`)
      return
    }

    const data: SegemntTrack = {
      messageId: messageId(),
      anonymousId: userData.userId,
      timestamp: new Date().toJSON(),
      event,
      properties: {
        ...properties
      },
      context: {
        library: {
          name: 'dcl-segment-gists',
          version: '0.0.0-development'
        }
      }
    }

    try {
      console.log('---------------->>>>>>> HERE SEND TRACK')
      await fetch(`https://api.segment.io/v1/track`, {
        method: 'POST',
        headers: {
          authorization: 'Basic ' + btoa(this.segmentKey + ':'),
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    } catch (err) {
      console.error(`[error] track("${event}"${properties ? ', {...}' : ''}): ${(err as Error)?.message || err}`)
    }
  }
}

const MESSAGE_ID_DATA = 'abcdef0123456789'

function randomChar() {
  return MESSAGE_ID_DATA[Math.floor(Math.random() * MESSAGE_ID_DATA.length)]
}

function messageId() {
  return `dcl-scene-` + [...Array(36)].map(() => randomChar()).join('')
}

/**
 * SegemntTrack
 * @property {string} anonymousId - The anonymous ID of the user.
 * @property {string} event - The name of the event.
 * @property {string} timestamp - The time the event occurred.
 * @property {string} messageId - A unique identifier for the message.
 * @property properties
 * @property context
 */
type SegemntTrack = {
  anonymousId: string
  event: string
  timestamp: string
  messageId: string
  properties: Record<string, any>
  context: Record<string, any>
}
