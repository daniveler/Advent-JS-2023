function cyberReindeer(road, time) {
  // Count the number of sleighs in the road
  let sleighsNumber = road.split('S').length - 1

  // If the number of sleighs is not 1, the function returns an empty array
  if (sleighsNumber !== 1) {
    return []
  }

  // Array of strings which will be returned
  let resultRoad= []
  resultRoad.push(road)


  function getGatesIndexes(road) {
    let indexList = []

    for (let i = 0; i < road.length; i++) {
      if (road[i] === '|') {
        indexList.push(i)
      }
    }

    return indexList
  } 

  let gatesIndexes = getGatesIndexes(road)

  function printRoad(road, gatesIndexes) {
    // Get the index of the road in which the sleigh is
    let sleighIndex = road.indexOf('S')

    if (road[sleighIndex + 1] === '.' || road[sleighIndex + 1] === '*'){
      road = road.substring(0, sleighIndex) + '.' + road.substring(sleighIndex + 1)
      road = road.substring(0, sleighIndex + 1) + 'S' + road.substring(sleighIndex + 2)
      
      // If the previous index was an open gate, we draw it again
      if (gatesIndexes.includes(sleighIndex - 1)) {
        road = road.substring(0, sleighIndex - 1) + '*' + road.substring(sleighIndex)
      }
    }

    return road
  }

  // For each unit of time, the function will execute, changing the road string
  let intervalId = setInterval(() => {
    road = printRoad(road, gatesIndexes)
    resultRoad.push(road)
  }, 1000)

  // When the timer ends, all gates will be open
  setTimeout(() => road = road.replaceAll('|', '*'), 5000)

  // When the timer ends, the function will stop executing and returns the result
  setTimeout(() => {
    clearInterval(intervalId)
    resultRoad.forEach(road => console.log(road))
    return resultRoad
  }, time * 1000)
}

const road = 'S..|...|..'
const time = 10
const result = cyberReindeer(road, time)


