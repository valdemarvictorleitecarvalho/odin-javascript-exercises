const repeatString = function(string, num) {
    if (num < 0) return "ERROR";

    let savedString = "";
    for (let i = 0; i < num; i++) savedString += string;
    
    return savedString;
};

// Do not edit below this line
module.exports = repeatString;
