// Write a function that splits cake pieces
function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
  // getting the remainder from #pieces & #people
  let leftOverPieces = numberOfPieces % numberOfPeople;
  // Checking for 0 pieces
  if (leftOverPieces === 0) {
    console.log("No leftovers for you!");
    // Checking for less than 2 pieces
  } else if (leftOverPieces <= 2) {
    console.log("You have some leftovers");
    // Checking for num pieces between 3 and 5
  } else if (leftOverPieces >= 3 && leftOverPieces <= 5) {
    console.log("You have leftovers to share");
    // else catching everything over 5
  } else {
    console.log("Hold another party!");
  }
}

howMuchLeftOverCake(12, 5);
