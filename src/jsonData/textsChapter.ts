type CONFIG = {
  title?: string
  headerText?: string
  text?: string
  disclaimText?: string
  buttonLeft?: string
  buttonRight?: string
  src?: string
  getText?(): string
}

const SIMPLE_MESSAGE: CONFIG = {
  title: 'Title',
  headerText: 'HEADER',
  text: 'TextBig',
  disclaimText: 'Disclaim text',
  buttonLeft: 'B-Left',
  buttonRight: 'B-Right'
}

const CHAPTER1: CONFIG = {
  title: 'Getting started!',
  headerText: 'Objectives',
  text: '- Talk to Bezier\n\n- Talk to Kit\n\n- Talk to Mat',
  buttonLeft: '',
  buttonRight: 'OK'
}

const CHAPTER2: CONFIG = {
  title: 'Congratulations!',
  headerText: 'YOU GOT A NEW EMOTE',
  text: "Bezier's dance",
  buttonLeft: '',
  buttonRight: 'CLAIM EMOTE',
  src: 'assets/ui/emote_icon.png'
}

const CHAPTER3: CONFIG = {
  title: 'Congratulations!',
  headerText: 'YOU GOT A NEW WEARABLE',
  text: "Mat's Vest",
  buttonLeft: '',
  buttonRight: 'Yay!',
  src: 'assets/ui/Upperbody.png'
}

const CHAPTER4: CONFIG = {
  title: 'Congratulations!',
  headerText: 'YOU GOT A NEW WEARABLE',
  text: "Tobor's Cap",
  buttonLeft: '',
  buttonRight: 'Yay!',
  src: 'assets/ui/ToborHead.png'
}

const DISCLAIMTEXT: CONFIG = {
  disclaimText: "You currently cannot claim this prize as you don't have a connected wallet",
  buttonLeft: 'Dismiss',
  buttonRight: 'Get a Wallet'
}
