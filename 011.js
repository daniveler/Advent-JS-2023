function getIndexsForPalindrome(word) {
  let indexesList = []

  function isPalindrome(string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[string.length - 1 - i]) {
        return false
      }
    }
    return true
  }

  function swapCharacters(inputString, index1, index2) {
    const charAtIndex1 = inputString[index1]
    const charAtIndex2 = inputString[index2]

    let swappedString = inputString.substring(0, index1)
    swappedString += charAtIndex2
    swappedString += inputString.substring(index1 + 1, index2)
    swappedString += charAtIndex1
    swappedString += inputString.substring(index2 + 1)
       
    return swappedString
  } 

  if (isPalindrome(word)) {
    return []
  } 
  else {
    for (let i = 0; i < word.length / 2; i++) {
      for (let j = i + 1; j < word.length; j++) {
        if (word[i] !== word[j]) {
          let swappedString = swapCharacters(word, i, j)
          if (isPalindrome(swappedString)) {
            indexesList.push(i)
            indexesList.push(j)
          }
        }
      } 
    }
  } 

  return indexesList.length !== 0 ? indexesList : null
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null
console.log(getIndexsForPalindrome('rotaratov')) // null
