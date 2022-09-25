function solve(inputArr) {

    let outputArr = [];
    for (const el of inputArr) {
        if (el >= 0) {
            outputArr.push(el);
        } else {
            outputArr.unshift(el)
        }
    }
    return outputArr;

}

result = solve([7, -2, 8, 9]);
console.log(result);