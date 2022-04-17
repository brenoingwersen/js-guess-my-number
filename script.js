'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
const maxScore = 20;
let score = maxScore;
let highScore = 0; // Best Score

function guessEventHandler() {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please input a number!';

    // When the user guess wrong.
  } else if (guess != randomNumber) {
    if (guess > randomNumber) {
      document.querySelector('.message').textContent = 'Too High!';
    } else {
      document.querySelector('.message').textContent = 'Too Low!';
    }
    score -= 1;
    document.querySelector('.score').textContent = score;
    if (!score) {
      document.querySelector('.score').textContent = 0;

      // Change body background
      document.querySelector('body').style.backgroundColor = '#b40000';

      // Set win message
      document.querySelector('h1').textContent = 'You Lost the Game!';
    }
    // When the user wins!
  } else {
    document.querySelector('.message').textContent = 'Correct Number!';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      // Change body background
      document.querySelector('body').style.backgroundColor = '#1a8e00';
      // Set win message
      document.querySelector('h1').textContent = 'You Won The Game!';
      // Display the correct number
      document.querySelector('.number').textContent = guess;
    }
  }
  if (!score || guess === randomNumber) {
    // Hide some elements
    document.querySelector('.check').style.display = 'none';
    document.querySelector('p.label-score').style.display = 'none';
    document.querySelector('p.label-highscore').style.display = 'none';
    document.querySelector('.message').style.display = 'none';
    document.querySelector('.left').style.display = 'none';
  }
}

function againEventHandler() {
  score = maxScore;
  randomNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Please input a number!';

  // Return elements to default CSS
  document.querySelector('p.label-score').style.display = '';
  document.querySelector('.check').style.display = '';
  document.querySelector('p.label-highscore').style.display = '';
  document.querySelector('.message').style.display = '';
  document.querySelector('.left').style.display = '';

  document.querySelector('body').style.backgroundColor = '#222';
}

document.querySelector('.check').addEventListener('click', guessEventHandler);
document.querySelector('.again').addEventListener('click', againEventHandler);
