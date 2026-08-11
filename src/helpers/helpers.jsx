export function randInt(low, high) {
  const rndDec = Math.random();
  const result = Math.floor(rndDec * (high - low + 1) + low);
  return result;
}

export function randElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  return randomElement;
}

export function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.currentTime = 0;
  audio.play();
}
