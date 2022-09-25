function maxNumber(inputArr) {
    let result = '';
    for (let i = 0; i < inputArr.length; i++) {
        let count = 0;
        for (let j = i+1; j < inputArr.length; j++) {
            if(inputArr[i]>inputArr[j]){
                count++;
            }
        }
        if (count==(inputArr.length-1)-i){
            result += inputArr[i] + ' ';
        }
    }
    console.log(result);
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);