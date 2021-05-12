const age = 16
let guess = 0

// Connect "Start" button to function
document.getElementById('start').addEventListener('click', guessmyage)

function guessmyage () {
  // Set while loop
  while (guess !== age) {
    guess = parseInt(prompt('Guess a number between 10 and 20'))
    if (guess === age) {
      alert('You got it right!')
    } else if (guess < age) {
      alert('Too young')
    } else if (guess > age) {
      alert('Too old')
    }
  }
}
