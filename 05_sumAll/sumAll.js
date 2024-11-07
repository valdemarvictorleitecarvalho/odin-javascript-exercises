const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }
    
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const n = max - min + 1;
    
    return (n * (min + max)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
