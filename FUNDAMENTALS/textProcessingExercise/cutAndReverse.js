function cutAndReverse(input) {
    let reversed = input.split('').reverse().join('');
    console.log(reversed.substring(reversed.length / 2));
    console.log(reversed.substring(0, reversed.length / 2));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');