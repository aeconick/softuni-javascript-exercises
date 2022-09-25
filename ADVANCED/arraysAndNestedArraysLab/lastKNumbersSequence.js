function solve(n, k) {

    let outputArr = [];
    outputArr[0] = 1;
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = i - k; j <= i; j++) { // i=5 -> j=i-n=5-3=2 -> 2 ,3 ,4
            if (Number.isInteger(outputArr[j])) {
                sum += outputArr[j];
            }
        }
        outputArr[i] = sum;
    }

    return outputArr

}

let result = solve(8, 2);
console.log(result);