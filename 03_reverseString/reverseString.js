const reverseString = function(s) {
    result = "";
    for (let i = 0; i < s.length; i++) {
        result = s[i] + result;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
