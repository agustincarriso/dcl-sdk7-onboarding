export function randomNumbers(length: number) {
  var numbers = []
  for (let i = 0; i < length; i++) {
    numbers.push(i)
  }
  return shuffle(numbers)
}
export function shuffle<T>(array: Array<T>) {
  let currentIndex = array.length,
    randomIndex: number

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}
