function findNaughtyStep(original, modified) {
  if (!original || !modified || modified.length === 0) {
    return ''
  } 

  // We suppose at the begginig that the max length is the original
  let maxLength = original.length

  // If the modified is longer, we change the variable
  if (original.length < modified.length) {
    maxLength = modified.length
  }

  for (let i = 0; i < maxLength; i++) {
    // If the original is longer or equal
    if (maxLength === modified.length) {
      if (original[i] !== modified[i]) {
        return modified[i]
      } 
    }
    // If the modified is longer
    else if (maxLength === original.length) {
      if (modified[i] !== original[i]) {
        return original[i]
      } 
    }
  } 

  return ''
}


let original = 'abcd'
let modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

original = 'stepfor'
modified = 'stepor'
console.log(findNaughtyStep(original, modified)) // 'f'

original = 'abcde'
modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // ''
