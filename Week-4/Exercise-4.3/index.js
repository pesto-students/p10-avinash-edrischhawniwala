let fibonacci = {
    numberOfItterations: 7,
    [Symbol.iterator]: function () {
        let i  = 1, oldNum = 0, newNum = 0;
        return {
            next: () => {
                if(i++ <= this.numberOfItterations) {
                    [oldNum, newNum ] = [newNum, (oldNum + newNum) || 1 ];
                    return {value: oldNum, done: false };
                } else {
                    return {value: undefined, done: true };
                }
            }
        }
    }
}

for (let number of fibonacci) {
    console.log(number);
}