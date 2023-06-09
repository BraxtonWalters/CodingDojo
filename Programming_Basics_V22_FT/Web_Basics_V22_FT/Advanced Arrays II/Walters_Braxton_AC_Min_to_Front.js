// creating a function that takes the min val to the front of an array
function minToFront(arr) {
    // init our min and index vars
    let min = arr[0];
    let indexMin;
    // iter through the array 
    for (let i = 0; i < arr.length; i++) {
        // if check to find the min and the min's index 
        if (arr[i] < min) {
            // setting min var to the current min val
            min = arr[i];
            // setting the indexmin var to the current index of the min val
            indexMin = i;
        }
    }
    // this loop starts at the index of the min val. Everything past that can stay the same
    for (let j = indexMin; j > 0; j--) {
        // replacing the current index with the val to the left
        // index 0 and 1 will be the same when the loop completes
        arr[j] = arr[j - 1];
    }
    // setting the min element to the front of the array
    arr[0] = min;
    // returning the array provided
    return arr
}


function moveMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {

    }
    return arr;
}

const arr1 = [5, 93, 22, 4];   // 4, 5, 93, 22
const arr2 = [3, 4, 2, 1, 5];  // 1, 3, 4, 2, 5

// console.log(moveMin(arr2));
console.log(minToFront(arr2));