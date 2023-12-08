function findFirstRepeated(gifts) {
  var alredyShownNumbers = []
  var result = -1

  // Check if the array exists and it's no empty
  if (!gifts || gifts.length === 0) {
    throw Error('The array must not be empty')
  }
  
  gifts.forEach((gift) => {
    // If we reach a result, the loop ends
    if (result !== -1) {
      return
    }
    // If we alredy have seen the gift, we return it
    if (alredyShownNumbers.includes(gift)) {
      result = gift
    }
    // If not, we save it to the list of gifts alredy seen
    else {
      alredyShownNumbers.push(gift)
    }
  })

  // If the list ends and we didn't find repeated, we return -1
  return result
}

function main() {
  const giftIds = [5, 1, 5, 1]
  const firstRepeatedId = findFirstRepeated(giftIds)
  console.log(firstRepeatedId) // 3
}

main()