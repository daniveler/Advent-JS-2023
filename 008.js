function organizeGifts(gifts) {
  let resultString = ''
  
  const giftsRegex = new RegExp('^([0-9]+[A-Za-z])+$');
  const letterRegex = new RegExp('[A-Za-z]')

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

  // Array to save each group separated
  let groupsList = []

  // Variable to save the previous index in the forEach
  var previousIndex = -1

  // Adding all groups to groupsList
  letterIndexes.forEach(index => {
    groupsList.push(gifts.substring(previousIndex + 1, index + 1))
    previousIndex = index
  })
  
  console.log(groupsList)

  groupsList.forEach(group => {
    let number = group.substring(0, group.length - 1)

    let boxCount = number / 10
    let paleCount = boxCount / 5
    let bagCount = number % 10

    let tempNumber = number

    console.log(`Box: ${boxCount}. Pale: ${paleCount}. Bag: ${bagCount}`)
  })

  return resultString
}

const testString = '76a11b14c144f4i'
const result1 = organizeGifts(testString)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
*/