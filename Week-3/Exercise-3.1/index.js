function memorize(func) {
    var cache = new Map();
    return function (...args) {
        var key = args.toString();
        if(cache.has(key)){
            // console.log('From cache: ', cache.get(key));
            return cache.get(key);
        } else {
            cache.set(key, func(...args));
            // console.log('Calculated: ', cache.get(key));
            return cache.get(key);
        }
    }
}

function add(...args) {
    let val = 0;
    args.forEach(arg => {
        val += arg;
    });

    return val;
}
var memorizeAdd = memorize(add);
memorizeAdd(100, 100);
memorizeAdd(100);
memorizeAdd(100, 200);
memorizeAdd(100, 100);
