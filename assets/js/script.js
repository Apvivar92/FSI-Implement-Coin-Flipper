// TODO: Declare any global variables we need
let headsFlip = 0;
let tailsFlip = 0;
let flipButton = document.querySelector('#flip');
let clearButton = document.querySelector('#clear');

document.addEventListener('DOMContentLoaded', function () {
  // TODO: Add event listener and handler for flip and clear buttons
  // Flip Button Click Handler

  flipButton.addEventListener('click', function () {
    // TODO: Determine flip outcome
    let flippedHeads = Math.random() < 0.5;
    if (flippedHeads) {
      // TODO: Update image and status message in the DOM
      document.getElementById('penny-image').src =
        'assets/images/penny-heads.jpg';
      document.getElementById('message').textContent = 'You Flipped Heads!';
      headsFlip += 1;
    } else {
      //Show image and message if landed on tails
      document.getElementById('penny-image').src =
        'assets/images/penny-tails.jpg';
      document.getElementById('message').textContent = 'You Flipped Tails!';
      tailsFlip += 1;
    }
    // Update the scorboard
    // TODO: Calculate the total number of rolls/flips
    let total = headsFlip + tailsFlip;

    // Make variables to track the percentages of heads and tails
    let headsPercent = 0;
    let tailsPercent = 0;

    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    if (total > 0) {
      headsPercent = Math.round((headsFlip / total) * 100);
      tailsPercent = Math.round((tailsFlip / total) * 100);
    }
    // TODO: Update the display of each table cell
    document.getElementById('heads').textContent = headsFlip;
    document.getElementById('heads-percent').textContent = headsPercent + '%';
    document.getElementById('tails').textContent = tailsFlip;
    document.getElementById('tails-percent').textContent = tailsPercent + '%';
  });

  // Clear Button Click Handler
  clearButton.addEventListener('click', function () {
    // TODO: Reset global variables to 0
    headsFlip = 0;
    tailsFlip = 0;
    //Update message back to start
    document.getElementById('message').textContent = "Let's Get Flippin";

    // TODO: Update the scoreboard (same logic as in flip button click handler)
    document.getElementById('heads').textContent = headsFlip;
    document.getElementById('heads-percent').textContent = 0 + '%';
    document.getElementById('tails').textContent = tailsFlip;
    document.getElementById('tails-percent').textContent = 0 + '%';
  });
});

//
