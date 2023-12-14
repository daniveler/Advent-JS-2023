function organizeGifts(gifts) {
  let resultString = ''
  
  const giftsRegex = new RegExp('^([0-9]+[A-Za-z])+$') // Regex to validate the gifts string
  const letterRegex = new RegExp('[A-Za-z]') // Regex to validate if a char is a letter

  // Function to get the indexes in the string where the letters of the groups are
  function getLetterIndexes(string) {
    let indexList = []

    for (let i = 0; i < string.length; i++) {
      if (letterRegex.test(string[i])) {
        indexList.push(i)
      }
    }

    return indexList
  } 

  // Check if we dont pass any arguments to the function or the string is empty
  if (!gifts) {
    return ''
  }

  // Check if the string matches the regular expression
  if(!giftsRegex.test(gifts)) {
    return ''
  }

  let letterIndexes = getLetterIndexes(gifts)
  let groupsList = []   // Array to save each group separated
  let previousIndex = -1  // Variable to save the previous index in the forEach

  // Adding all groups to groupsList
  letterIndexes.forEach(index => {
    groupsList.push(gifts.substring(previousIndex + 1, index + 1))
    previousIndex = index
  })
  
  groupsList.forEach(group => {
    let number = group.substring(0, group.length - 1)
    let letter = group.substring(group.length - 1)


    let boxCount = Math.floor(number / 10)
    let paleCount = Math.floor(boxCount / 5)
    boxCount -= paleCount * 5 // Substracts the boxes that conform a pale
    
    let bagCount = number % 10

    for (let i = 0; i < paleCount; i++) {
      resultString += `[${letter}]`
    }

    for (let i = 0; i < boxCount; i++) {
      resultString += `{${letter}}`
    }

    if (bagCount !== 0) {
      resultString += '('
      for (let i = 0; i < bagCount; i++) {
        resultString += `${letter}`
      }
      resultString += ')'
    }
    
  })

  return resultString
}

const testString = '76a11b'
const result1 = organizeGifts(testString)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
*/