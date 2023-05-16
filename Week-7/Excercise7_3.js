function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let pivotIndex = 0;
        for (let j = i + 1 ; j < arr.length; j++) {
            pivotIndex = i;
            if(arr[j] < arr[pivotIndex]) {
                let temp = arr[pivotIndex];
                arr[pivotIndex] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

// let a = [10, 7, 8, 20, 9, 1, 5, 11];
let a = [0, 2, 1, 2, 0]
console.log(sort(a));