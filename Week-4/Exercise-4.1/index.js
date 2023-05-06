function getRandomNumber(maxValue = 101) {
    // with default value 101 this will return value between 0 to 100
    return Math.floor(Math.random() * maxValue);
}

function getNumber(resolve, reject, timeout) {
    const randomNumber = getRandomNumber();
    let state = 'Pending';
    if (randomNumber % 5 === 0) {
        setTimeout(() => {
            resolve(randomNumber);
            state = 'Fulfilled'
        }, timeout);
    } else {
        setTimeout(() => {
            reject(randomNumber);
            state = 'Rejected';
        }, timeout);
    }
}

getNumber(
    (number) => {
        console.log(`${number} not divisible by 5`)
    },
    (number) => {
        console.log(`${number} is divisible by 5`)
    },
    5000
);