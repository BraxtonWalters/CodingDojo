// init min height and age vars
const minHeight = 42;
const minAge = 10;

// init the vars for the rider
let riderHeight = 56;
let riderAge = 9;

// condit to check the height requirements
if (riderHeight >= minHeight) {
  console.log("Get on that ride, kiddo!");
} else {
  console.log("Sorry kiddo. Maybe next year.");
}

// condit to check age and height requirements
if (riderAge >= minAge && riderHeight >= minHeight) {
  console.log("Get on that ride, kiddo!");
} else {
  console.log("Sorry kiddo. Maybe next year.");
}

// condit to check either age or height requirements
if (riderAge >= minAge || riderHeight >= minHeight) {
  console.log("Get on that ride, kiddo!");
} else {
  console.log("Sorry kiddo. Maybe next year.");
}
