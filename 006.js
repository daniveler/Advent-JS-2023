function maxDistance(movements) {
  let distance = 0
  let asteriskCount = 0

  if (!movements) {
    return 0
  } 

  if (!movements.includes('<') && !movements.includes('>') && !movements.includes('*')) {
    return 0
  }


  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === '>') {
      distance++
    }
    else if (movements[i] === '<') {
      distance--
    }
    else if (movements[i] === '*') {
      asteriskCount++
    }
  }

  if (distance < 0) {
    distance -= asteriskCount
    distance = -distance
  } 
  else {
    distance += asteriskCount
  }

  // Returns the absolute valor of the distance
  return distance < 0 ? -distance : distance
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

const movements4 = 'asdf'
const result4 = maxDistance(movements4)
console.log(result4) // -> 0