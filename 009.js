function adjustLights(lights) {
  if (!lights || lights.length < 2) {
    return 0
  }

  let changesNeededRedFirst = 0; // Count of changes to make if first is red
  let changesNeededGreenFirst = 0;  // Count of changes to make if first is green

  for (let i = 0; i < lights.length; i++) {
    if (i % 2 === 0) {
      if (lights[i] !== '🔴') {
        changesNeededRedFirst++;
      }
      if (lights[i] !== '🟢') {
        changesNeededGreenFirst++;
      }
    } else {
      if (lights[i] !== '🟢') {
        changesNeededRedFirst++;
      }
      if (lights[i] !== '🔴') {
        changesNeededGreenFirst++;
      }
    }
  }

  // Returns the minimum number between 
  return Math.min(changesNeededRedFirst, changesNeededGreenFirst);
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)