const repeatString = function(s, n) {
    result = "";
    if (n < 0) {
        return "ERROR"
    }
    
    for (let i = 0; i < n; i++) {
        result += s;
    };
    return result;
};

// Do not edit below this line
module.exports = repeatString;
