function decode(message) {
  let invertedString = ''
  let returnedString = ''

  for (let i = 0; i < message.length; i++) {
    // If the character is '(', we start the recursivity
    if (message[i] === '(') {
      returnedString = decode(message.substring(i + 1))   // i + 1 to avoid the infinite recursivity
      returnedString = '(' + returnedString               // Add the '(' again
      
      for (let j = 0; j < returnedString.length; j++) {               // Invert the returned string
        invertedString += returnedString[returnedString.length - j - 1]
      }
      
      i += returnedString.length - 1                      // Add length - 1 to avoid printing the word without inverting again
    }
    // If the character is ')', we exit the recursivity
    else if (message[i] === ')') {
      invertedString += ')'
      return invertedString
    }
    // If the character is not any parenthesis, we add it to the final string
    else {
      invertedString += message[i]
    }
  }

  // Delete all '(' and ')' before returning the result
  let finalString = invertedString.split('(').join('')
  finalString = finalString.split(')').join('')

  return finalString
}

// Function to invert strings
function invertString(string) {
  let resultString = ''

  for (i = 0; i < string.length; i++) {
    resultString += string[string.length - i - 1]
  }

  return resultString
}

// Function to delete all '(' and ')' from a string
function deleteParenthesis(string) {
  let finalString = string.split('(').join('')  
  finalString = finalString.split(')').join('')

  return finalString
} 

const a = decode('hola (odnum)')
console.log(a + '\n') // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b + '\n') // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
