// Create a func that picks a reward for you
function rewardPicker() {
  const timeHours = new Date().getHours();

  if (timeHours >= 6 && timeHours < 10) {
    return "Heres a latte!!";
  }
  else if (timeHours >= 10 && timeHours < 15) {
    return "I got you a hot chocolate!!!";
  }
  else if (timeHours >= 15 && timeHours < 18) {
    if (timeHours % 2 === 0) {
      const evenArr = ["ice cream", "cookies", "candy"];
      return evenArr[Math.floor(Math.random() * evenArr.length)]
    }
    else {
      const oddArr = ["hot chocolate", "tea", "cake"]
      return oddArr[Math.floor(Math.random() * oddArr.length)]
    }
  }
  else if (timeHours >= 18 && timeHours < 22) {
    if (new Date().getDay() === 3) {
      return "Got to get me some strawberry ice cream!";
    }
    else {
      return "I'm a vanilla kinda person...";
    }
  } else {
    return "Yo its bedtime!!!";
  }
}

console.log(rewardPicker());

