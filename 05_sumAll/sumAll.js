const sumAll = function(first, last) {
    sum = 0;

    console.log(typeof(first), typeof(last));
    if (first < 0 || last < 0 || typeof(first) != 'number' || typeof(last) != 'number' ||
     !Number.isInteger(first) || !Number.isInteger(last)) {
        return 'ERROR';
    }

    if (first > last) {
        temp = first;
        first = last;
        last = temp;
    }

    while (first <= last) {
        sum += first;
        first += 1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
