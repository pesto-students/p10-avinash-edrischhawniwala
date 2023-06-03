function printSpiralNumbers(arr) {
    let topRow = 0, leftCol = 0, bottomRow = arr.length - 1, rightCol = arr[0].length - 1;
    
    while(topRow <= bottomRow && leftCol <= rightCol) {
    
        for (let index = leftCol; index <=rightCol; index++) {
            console.log(arr[topRow][index]);
        }
        topRow++;
    
        for (let index = topRow; index <=bottomRow; index++) {
            console.log(arr[index][rightCol]);
        }
        rightCol--;
    
        for (let index = rightCol; index>=leftCol; index--) {
            console.log(arr[bottomRow][index]);
        }
        bottomRow--;
    
        for (let index = bottomRow; index >=topRow; index--) {
            console.log(arr[index][leftCol]);
        }
        leftCol++;
    }
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printSpiralNumbers(arr);