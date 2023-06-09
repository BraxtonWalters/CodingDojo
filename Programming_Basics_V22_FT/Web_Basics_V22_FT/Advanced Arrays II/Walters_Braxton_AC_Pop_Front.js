// popFront([5, 93, 22, 4]) should return 5 and the original array should result as [93, 22, 4].

// my uh solution
function popFront1(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i + 1] = arr[i]
    }
    return arr
}

// Immanuel solution
function delFront(arr) {
    let first = arr[0];
    //let firstElementArr = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== first) {
            arr[index] = arr[i];
            index++;
        }
    }
    //arr.length = index;
    arr.pop();
    return arr;
}

// Carter
function popFront(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr.pop();
    return (arr)
}


const arr2 = [1, 2, 4, 5];  // 2, 4, 5
const arr1 = [5, 93, 22, 4]; // 93, 22, 4

console.log(popFront(arr1));


