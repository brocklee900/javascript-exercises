const fibonacci = function(num) {
    num = +num;
    if (num == 1 || num == 2) {
        return 1;
    }
    if (num == 0) {
        return 0;
    }
    if (num < 0) {
        return 'OOPS';
    }

    count = 3;
    num1 = 1;
    num2 = 1;
    while (count <= num){
        temp = num1+num2;
        num1 = num2;
        num2 = temp;

        count += 1;
    }

    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
