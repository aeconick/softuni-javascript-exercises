function binaryToDecimal(binaryNumber) {
    // Works only with String as an input. If you provide 
    //the function with a number as an input it automatically 
    //converts it and the functions does not work properly.
    let binaryInString = binaryNumber.toString();
    let decimalNumber = parseInt(binaryInString, 2)
    console.log(decimalNumber);
}

binaryToDecimal(00001001);