const removeFromArray = function() {
    toRemove = arguments.length-1;
    for (i = 0; i < toRemove; i++) {

        while (arguments[0].indexOf(arguments[i+1]) != -1) {
            index = arguments[0].indexOf(arguments[i+1]);
            arguments[0].splice(index, 1);
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
