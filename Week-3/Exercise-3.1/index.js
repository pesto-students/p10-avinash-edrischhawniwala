function memorize(func) {
    var cache = new Map();
    return function (...args) {
        var key = args.toString();
        if(cache.has(key)){
            result = cache.get(key);
            // console.log('From cache: ', result);
            return result;
        } else {
            cache.set(key, func(...args));
            result = cache.get(key);
            // console.log('Calculated: ', result);
            return result;
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
