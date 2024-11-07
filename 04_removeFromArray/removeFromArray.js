const removeFromArray = function(array, ...toRemove) {
    const toRemoveSet = new Set(toRemove);
    const newArr = array.filter(elem => !toRemoveSet.has(elem));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
