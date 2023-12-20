function createChristmasTree(ornaments, height) {
  let responseString = ''
  let characterCounter = 0  // It will count the ornaments to be displayed in the correct order
  
  for (let row = 0; row < height; row++) {
    // Loop for adding spaces at the beggining of each row in the correct order
    for (let j = 0; j < height - row - 1; j++) {
      responseString += ' '
    } 
   
    // Loop for adding the ornaments
    for (let column = 0; column <= row; column++) {
      // If we have put all the ornaments, we start again from the first one
      if (characterCounter === ornaments.length) {
        characterCounter = 0
      }
      responseString += ornaments[characterCounter]
      
      // In the last iteration of the row, we don't add a space
      if (column !== row) {
        responseString += ' '
      }
      
      characterCounter++
    }

    responseString += '\n'
  }

  // Loop for adding the spaces in the base of the tree
  for(let i = 0; i < height - 1; i++) {
    responseString += ' '
  } 

  responseString += '|' + '\n'

  return responseString
}

console.log(createChristmasTree('123', 4))
console.log(createChristmasTree('*@o', 3))