function solve(arr) {

    let magicalNumber = 0;
    let flag = true;

    for (const row of arr) {
        for (const el of row) {
            magicalNumber += el;
        }
        break;
    }
    //console.log(magicalNumber);  = 15;
    for (const row of arr) {
        let currentRowSum = 0;
        for (const el of row) {
            currentRowSum += el;
        }
        if (currentRowSum != magicalNumber) {
            flag = false;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][j];
        }
        if (sum != magicalNumber) {
            flag = false;
        }
    }

    return flag;

}

console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));
