const palindromes = function (string) {
    string = string.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('');
    startIndex = 0;
    endIndex = string.length-1;
    while (endIndex >= startIndex) {
        if (string[startIndex].toLowerCase() != string[endIndex].toLowerCase()) {
            return false;
        } 
        startIndex += 1;
        endIndex -= 1;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
