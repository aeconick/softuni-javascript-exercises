function solve(arr) {
    let sum = 0;
    for (const el of arr) {
        sum += el;
    }
    let inverseSum = 0;
    for (const el of arr) {
        inverseSum += 1 / el;
    }
    let concat = '';
    for (const el of arr) {
        concat += el;
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

solve([1, 2, 3]);