function pairWithGivenDifference(arr, b) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] - (arr[j]) === b) {
                return 1;
            }
        }
    }

    return 0;
}

let a = [5, 10, 3, 2, 50, 80];
let b = 78;
a = [-10, 20];
b = 30;

console.log(pairWithGivenDifference(a, b));
