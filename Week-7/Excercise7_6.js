function findClosestThreeDigitSum(arr, target) {
    let previousSum = undefined;
    for (let index = 1; index < arr.length -1; index++) {
        const sumOfThreeDigits = arr[index - 1] + arr[index] + arr[index +1];
        if (
            (sumOfThreeDigits < target && sumOfThreeDigits > previousSum) 
            || (sumOfThreeDigits > target && sumOfThreeDigits < previousSum)
            || (previousSum === undefined)
        ) {
            previousSum = sumOfThreeDigits;
        }
    }

    console.log(previousSum);
}

let s = [-1, 2, 1, -4];
let t = 1;

findClosestThreeDigitSum(s, t);