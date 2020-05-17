function popRandomItemFromArray(array) {
    const index = Math.floor(Math.random() * array.length)
    return array.splice(index, 1)[0]
}


function vylosujCisla(inputId) {
    // Create pool array
    const pool = Array(49)

    // Fill pool with numbers
    for (let i = 0; i < pool.length; i++) {
        pool[i] = i + 1
    }

    // Crate an array for chosen numbers
    const chosen = []

    // Randomly select numbers from the pool
    for (let i = 0; i < 6; i++) {        
        chosen.push(popRandomItemFromArray(pool))
        console.log(pool)
    }

    // Sort
    chosen.sort((a, b) => {return a - b})

    // Get the one additional number
    const addition = popRandomItemFromArray(pool)

    // Build the final string
    const string = chosen.join(', ') + ' | ' + addition

    // Set the value of the input
    document.getElementById(inputId).value = string
}