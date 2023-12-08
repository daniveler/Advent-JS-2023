function manufacture(gifts, materials) {
  let materialsList = []
  let exit = false

  for (i = 0; i < materials.length; i++) {
    materialsList.push(materials[i])
  }

  let result = [...gifts]

  gifts.forEach(gift => {
    for (i = 0; i < gift.length; i++) {
        if(!materialsList.includes(gift[i])) {
          result.splice(result.indexOf(gift), 1)
          return 
        }
      }
    })

  return result
}

function main() {
  const gifts = ['tren', 'oso', 'pelota']
  const materials = 'tronesa'

  console.log(manufacture(gifts, materials))
}

main()