const reverseString = function(string) {
    let strSplited = string.split("");
    let reversed = "";

    for (let i = strSplited.length - 1; i >= 0; i--) reversed += strSplited[i];
    
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
