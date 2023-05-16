function getSubArrayWithMaxSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let subTotal = getSumOfSubArray(arr, i, j);
            maxSum = subTotal > maxSum ? subTotal : maxSum;
        }
    }

    console.log(`Max Sum is: ${maxSum}`);
}
function getSumOfSubArray(arr, startingIndex, endingIndex) {
    let subTotal = 0;
    for (let index = startingIndex; index < endingIndex; index++) {
        subTotal += arr[index];
    }

    return subTotal;
}

getSubArrayWithMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);