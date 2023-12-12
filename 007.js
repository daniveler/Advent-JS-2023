function drawGift(size, symbol) {
  let boxMatrix = ''
  let tempString = ''
  let tempSpaces = ''

  // Drawing upper face
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size * 2 - 1; j++) {
      let upperFaceLeftBorder = size - i - 1
      let upperFaceRightBorder = size * 2 - i - 2
      let lateralFaceRightBorder = size * 2 - 2

      if (j <  upperFaceLeftBorder) { 
        tempString += ' '
      }
      else if (j >= upperFaceRightBorder && j === lateralFaceRightBorder)  {
        tempString += '#'
      }
      else if (i === 0 || j === upperFaceLeftBorder || j === upperFaceRightBorder) {
        tempString += '#'
      } 
      else {
        tempString += symbol
      } 
    }
    tempString += '\n'
  } 

  boxMatrix += tempString

  tempString = ''
  
  // Drawing front and lateral faces
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size * 2 - 1; j++) {
      let lateralFaceLeftBorder = size 
      let lateralFaceDownBorder = size * 2 - i - 2

      if ((i === 0 || i === size - 1 ) && j < lateralFaceLeftBorder) {
        tempString += '#'
      }
      else if (i === 0 && j === size * 2 - 2) {
        tempString += '#'
      }
      else if (j === 0 || j === size - 1 || j === lateralFaceDownBorder) {
        tempString += '#'
      } 
      else if (j > lateralFaceDownBorder) {
        tempString += ''
      }
      else {
        tempString += symbol
      }

    }
    tempString += '\n'
  } 
  
  boxMatrix += tempString

  return boxMatrix + '\n'
}

console.log(drawGift(4, '+'))

console.log(drawGift(5, '*'))

console.log(drawGift(10, '*'))

console.log(drawGift(1, '^'))
