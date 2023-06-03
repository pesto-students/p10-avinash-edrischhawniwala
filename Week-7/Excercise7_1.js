function getSubArrayWithMaxSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let subTotal = 0;
        for (let j = i; j < arr.length; j++) {
            subTotal += arr[j];
            maxSum = subTotal > maxSum ? subTotal : maxSum;
        }
    }

    console.log(`Max Sum is: ${maxSum}`);
}

getSubArrayWithMaxSum([-2, 1, -3, 4, 8, -1, 2, 1, -5, 4]);