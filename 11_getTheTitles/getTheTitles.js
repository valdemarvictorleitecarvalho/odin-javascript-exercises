const getTheTitles = function(obj) {
    let titlesArr = [];

    for (let i = 0; i < obj.length; i++) titlesArr.push(obj[i].title);

    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
