export async function getEvents(url: string) {
  let events: any[] = []
  //const url = 'https://events.decentraland.org/api/events/?limit=10'

  try {
    const response = await fetch(url)
    const json = await response.json()

    for (const event of json.data) {
      events.push(event)
    }

    if (!events[0]) {
      //! test if eventes is empty
      events = []
      events.push(backupEvent0)
      events.push(backupEvent1)
      events.push(backupEvent2)
      events.push(backupEvent3)
      events.push(backupEvent4)
      return events
    }

    return events
  } catch (e) {
    console.log('error getting event data ', e)
    events = []
    events.push(backupEvent0)
    events.push(backupEvent1)
    events.push(backupEvent2)
    events.push(backupEvent3)
    events.push(backupEvent4)
  }
}

type EventPanelData = {
  name: string //nameEvent
  image: string
  x: number
  y: number
  scene_name: string
}

const backupEvent0: EventPanelData = {
  name: 'Genesis Plaza',
  image: 'images/scene-thumbnail.png',
  scene_name: 'Created by Decentraland',
  x: 0,
  y: 0
}

const backupEvent1: EventPanelData = {
  name: 'Forest Plaza',
  image: 'assets/thumbnail.jpg',
  scene_name: 'Created by Decentraland',
  x: 0,
  y: 82
}

const backupEvent2: EventPanelData = {
  name: 'Asian Plaza',
  image: 'assets/thumbnail.jpg',
  scene_name: 'Created by Decentraland',
  x: 62,
  y: -62
}

const backupEvent3: EventPanelData = {
  name: 'Spooky Forest',
  image: 'assets/thumbnail.jpg',
  scene_name: 'Created by Dappcraft',
  x: -62,
  y: -62
}

const backupEvent4: EventPanelData = {
  name: 'Soho Plaza',
  image: 'assets/thumbnail.jpg',
  scene_name: 'Created by Decentraland',
  x: -82,
  y: 0
}

export async function getGames() {
  let events: any[] = []
  const url = 'https://places.decentraland.org/api/places'

  try {
    const response = await fetch(url)
    const json = await response.json()

    console.log('Api Places =', response)

    for (const event of json.data) {
      if (event.live) {
        events.push(event)
      }
    }

    if (!events[0]) {
      //! test if eventes is empty
      events = []
      events.push(backupEvent0)
      events.push(backupEvent1)
      events.push(backupEvent2)
      events.push(backupEvent3)
      return events
    }

    return events
  } catch (e) {
    console.log('error getting event data ', e)
    events = []
    events.push(backupEvent0)
    events.push(backupEvent1)
    events.push(backupEvent2)
    events.push(backupEvent3)
  }
}
