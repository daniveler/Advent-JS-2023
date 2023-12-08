function decode(message) {
  let invertedString = ''
  let returnedString = ''
 
  console.log('Function start: ' + message)

  for (let i = 0; i < message.length; i++) {
    // If the character is '(', we start the recursivity
    if (message[i] === '(') {
      returnedString = decode(message.substring(i + 1)) // i + 1 to avoid the '('
      invertedString += invertString(returnedString)
      i += returnedString.length + 1                    // length + 1 to avoid the ')'
    }
    // If the character is ')', we exit the recursivity
    else if (message[i] === ')') {
      console.log('Segundo if: ' + invertedString)
      return invertedString
    }
    // If is other character, we add it to the final string
    else {
      invertedString += message[i]
      console.log('Tercer if: ' + invertedString)
    }
  }

  return invertedString
}

// Function to invert strings
function invertString(string) {
  let resultString = ''

  for (i = 0; i < string.length; i++) {
    resultString += string[string.length - i - 1]
  }

  return resultString
} 

// const a = decode('hola (odnum)')
// console.log(a + '\n') // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b + '\n') // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
