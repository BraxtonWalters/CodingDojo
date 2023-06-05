// init min height and age vars
const minHeight = 42;
const minAge = 10;

// init the vars for the rider
let riderHeight = 56;
let riderAge = 9;

// init yes and no messages
const yesMsg = "Get on that ride, kiddo!";
const noMsg = "Sorry kiddo. Maybe next year.";

// condit to check the height requirements
if (riderHeight >= minHeight) {
  console.log(yesMsg);
} else {
  console.log(noMsg);
}

// condit to check age and height requirements
if (riderAge >= minAge && riderHeight >= minHeight) {
  console.log(yesMsg);
} else {
  console.log(noMsg);
}

// condit to check either age or height requirements
if (riderAge >= minAge || riderHeight >= minHeight) {
  console.log(yesMsg);
} else {
  console.log(noMsg);
}
