var arr1 = [8, 6, 7, 5, 3, 0, 9];
var arr2 = [4, 7, 13, 13, 19, 37, -2];
var arr3 = [6, 2, 12, 14, -24, 5, 0];

// func that prints every num in arr
function numPrinter(arr) {
  // for loop to iter thro the arr
  for (let i = 0; i < arr.length; i++) {
    // printing arr index of i
    console.log(arr[i]);
  }
}

// func that get the sum of an arr
function sumArr(arr) {
  // init the sum var
  let sum = 0;
  // for loop to iter thro the arr
  for (let i = 0; i < arr.length; i++) {
    // adding each arr element to sum
    sum = sum + arr[i];
  }
  return sum;
}

// func that will find nums > 5
function greaterThan5(arr) {
  // for loop to iter thro the arr
  for (let i = 0; i < arr.length; i++) {
    // check to see if current arr element is greater than 5. if true print to the console
    if (arr[i] > 5) {
      console.log(arr[i]);
    } else {
      // if < 5 current arr element is reasigned to the string No dice
      arr[i] = "No dice";
    }
  }
}

greaterThan5(arr1);
