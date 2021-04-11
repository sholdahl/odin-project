const fibonacci = function(num) {
    num = Number(num);
    result = 0;
    fibArray = [1,1]
    if(isNaN(num) || num < 0){
        result = "OOPS"
    } else if(num < 3){
        result = 1
    } else {
        for(i=2; i<num; i++) {
            num1 = fibArray[fibArray.length - 2];
            num2 = fibArray[fibArray.length - 1];
            newNum = num1 + num2;
            fibArray.push(newNum)
        };
        result = fibArray[fibArray.length -1]
    };
    return result

}

module.exports = fibonacci
