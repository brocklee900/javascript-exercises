const findTheOldest = function(arr) {


    return arr.reduce((result, currentItem) => {

        if (result.yearOfDeath == undefined || currentItem.yearOfDeath == undefined) {
            
            if (currentItem.yearOfBirth < result.yearOfBirth) {
                return currentItem;
            } else {
                return result;
            }
        }

        if (currentItem.yearOfDeath-currentItem.yearOfBirth >
                    result.yearOfDeath-result.yearOfBirth) {
            return currentItem;
        }
        return result;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
