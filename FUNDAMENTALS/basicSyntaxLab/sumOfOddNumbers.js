function sumOfOddNumbers(number) {
    let sum = 0;
    for (let index = 1; index <= number*2; index++) {
        if (index % 2 !== 0) {
            sum += index;
            console.log(index);
        }  
    }
    console.log('Sum: ' + sum);
}

sumOfOddNumbers(5);