function bestTimeToBuyAndSellStock(arr) {
    let maxProfit = 0;
    for (let currentDay = 0; currentDay < arr.length; currentDay++) {
        for (let futureDay = currentDay; futureDay < arr.length; futureDay++) {
            const priceDifference = arr[futureDay] - arr[currentDay];
            maxProfit = priceDifference > maxProfit ? priceDifference : maxProfit;
        }
    }

    console.log(maxProfit);
}

let arr = [7, 1, 5, 3, 6, 4];
// arr = [7, 6, 4, 3, 1];

bestTimeToBuyAndSellStock(arr);