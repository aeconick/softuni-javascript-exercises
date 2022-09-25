function specialNumbers(n) {
    for (let index = 1; index <= n; index++) {
        let sum = 0;
        let indexInString = index.toString();
        for (j = 0; j < indexInString.length; j++) {
            sum += Number(indexInString.charAt(j))
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${index} -> True`);
        } else {
            console.log(`${index} -> False`);
        }
    }
}

specialNumbers(15);