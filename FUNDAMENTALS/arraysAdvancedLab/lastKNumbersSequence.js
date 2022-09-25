function lastKNumbersSequence(n, k) {
    newArr = [1];

    for (let i = 1; i < n; i++) {
        let current = newArr.slice(-k);
        let sum = 0;
        for (const el of current) {
            sum += Number(el);
        }
        newArr.push(sum);
    }
    return newArr.join(' ');

}

console.log(lastKNumbersSequence(6, 3));
//lastKNumbersSequence(6, 3);