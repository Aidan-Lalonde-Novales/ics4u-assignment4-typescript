/**
 * This program generates an hourglass.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-11-21
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 * This function prints an hourglass (out of *)
 *
 * @param {number} stars - current amount of stars to be added
 * @param {number} spaces - current amount of spaces to be added
 */
function hourglass(stars: number, spaces: number): void {
  // variable to be outputed each recursion
  let currentOutput = ''

  // base case
  if (stars !== 0) {
    // add spaces
    for (let count = 0; count < spaces; count++) {
      currentOutput += ' '
    }
    // add stars
    for (let count = 0; count < stars; count++) {
      currentOutput += '* '
    }
    console.log(currentOutput)
    hourglass(stars - 1, spaces + 1)
    console.log(currentOutput)
  }
}

// main stub
const userInput = prompt('How Tall Would You Like Your Hourglass? ')
const userInt = parseInt(userInput)

console.log('')
if (isNaN(userInt) || userInt <= 0) {
  console.log('Invalid Input.')
} else {
  hourglass(userInt, 0)
}

console.log('\nDone.')
