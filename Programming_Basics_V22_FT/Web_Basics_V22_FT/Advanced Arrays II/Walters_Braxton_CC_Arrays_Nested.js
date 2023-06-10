const parkingArr = [[-2, 2], [2, -2], [2, 2], [-2, -2]];
const custArr = [1, -2];

function optimalParking(parkArr, custArr) {
    let minD = Math.abs(parkingArr[0][0]) * 4; // 8

    let minIndex = 0;
    // loop through the parking array
    for (let i = 0; i < parkArr.length; i++) {
        let xDis = Math.abs(parkArr[i][0] - custArr[0]); // 3,  
        let yDis = Math.abs(parkArr[i][1] - custArr[1]); // 4
        let totalD = xDis + yDis; // 7
        if (totalD < minD) {  // 7 < 8
            minD = totalD; // = 7, 
            minIndex = i;  // 0 
        }
    }
    return parkArr[minIndex];
}

// console.log(optimalParking(parkingArr, custArr));


// // Function to calculate the Manhattan distance between two points
// // Manhattan distance: a distance measure that is calculated by taking the sum of distances between the x and y coordinates. The Manhattan distance is also known as Manhattan length. In other words, it is the distance between two points measured along axes at right angles.
// function calculateDistance(point1, point2) {
//     //Code Goes Here
//   }

//   // Function to find the optimal truck location based on customer coordinates
//   function findOptimalTruckLocation(customerCoordinates) {
//     //Code Goes Here
//   }

//   // Example usage:
//   const customerCoordinates = [[0, 0], [1, 3], [2, 1], [4, 2]]; // Array of customer coordinates
//   const optimalLocation = findOptimalTruckLocation(customerCoordinates); // Find optimal truck location

//   console.log('Optimal Truck Location:', optimalLocation); // Output the optimal truck location

// Function to find the optimal truck location based on customer coordinates
// function findOptimalTruckLocation(customerCoordinates) {
//     let minTotalDistance = Infinity; // Initialize minimum total distance to Infinity
//     let optimalLocation = null; // Initialize optimal truck location as null

//     // Iterate over each customer's location
//     for (const customer of customerCoordinates) {
//       let totalDistance = 0; // Initialize total distance for the current customer

//       // Calculate the distance between the current customer and all other customers
//       for (const otherCustomer of customerCoordinates) {
//         //Code Here
//       }

//       // Check if the total distance is smaller than the current minimum total distance
//       if (totalDistance < minTotalDistance) {
//         //Code Here 
//       }
//     }

//     return optimalLocation; // Return the optimal truck location


function getDistance(c1, c2) {
    console.log(`distance between ${c1}, ${c2}`);
    const x1 = c1[0]; // 4
    const y1 = c1[1]; // 2                 4
    const x2 = c2[0]; // 1       3                   1
    const y2 = c2[1]; // 3    4    1               2   3
    const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    return distance;
}

function getClosestPoint(custArray) {
    // init vars to check against while running loop
    let closestPoint = null;
    let minDist = Infinity;
    for (let i = 0; i < custArray.length; i++) {
        // init var to keep track of total distance for the each point in the array
        let totalDist = 0;
        // interate over the array comparing each set of points to the current point (i)
        for (let j = 0; j < custArray.length; j++) {
            // get the distance between points (i index and j index)
            // add these to the total distance
            console.log(i, j);
            totalDist += getDistance(custArray[i], custArray[j]);
        }
        // once we have ran one point (i) against every other point in the array (j), then check if it's less distance than the current min
        // if it is, then set the min distance to the new lowest and the new closest point to the current point (i)
        if (totalDist < minDist) {
            minDist = totalDist;
            console.log(`new min found ${minDist}`);
            closestPoint = custArray[i];
        }
    }
    return `This is the closest point ${closestPoint}`;
}

const customerCoordinates = [[0, 0], [1, 3], [2, 1], [4, 2]];

console.log(getClosestPoint(customerCoordinates));