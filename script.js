let guess = 0

// Connect "Start" button to function
document.getElementById('start').addEventListener('click', guessmyage)

function guessmyage () {
  let age = 16
  // Set while loop
  while (guess !== age) {
    guess = prompt('Guess a number between 10 and 20')
  }
}
