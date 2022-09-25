function sumPrimePrimeNonPrime(input) {
    let number = input[0];

    let i = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
    while (number !== 'stop') {
        number = Number(input[i]);
        if (number < 0) {
            console.log('Number is negative.');
        } else {
            let count = 0;
            for (let j = 1; j <= number; j++) {
                if (number % j === 0) {
                    count++;
                }
            }
            if (count === 2) {
                sumPrime += number;
            } else {
                sumNonPrime += number;
            }
        }

        //code
        i++;
        number = input[i];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}

sumPrimePrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"]);
