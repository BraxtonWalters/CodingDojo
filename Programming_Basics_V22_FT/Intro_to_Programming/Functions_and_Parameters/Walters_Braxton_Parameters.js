function greet(name) {
  let timeHours = new Date().getHours();
  if (name == "Count Dooku") {
    return "I'm coming for you, Dooku!";
  }
  if (timeHours >= 12) {
    return `Good afternoon, ${name}`;
  } else {
    return `Good morning, ${name}`;
  }
}
console.log(greet("Braxton"));

// I know that this isn't exactly what you wanted, but I'm was stoked I figure this out!!
