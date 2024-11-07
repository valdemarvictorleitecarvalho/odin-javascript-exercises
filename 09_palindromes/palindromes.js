const palindromes = function (word) {
    const wordArr = sanitize(word);
    let l = 0, r = wordArr.length - 1;

    while (l < r) {
        if (wordArr[l] !== wordArr[r]) return false;
        l++, r--;
    }
    return true;
};

function sanitize(word) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    return word.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).join("");
}

// Do not edit below this line
module.exports = palindromes;
