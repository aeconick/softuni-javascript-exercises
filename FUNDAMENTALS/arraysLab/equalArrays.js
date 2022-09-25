function equalArrays(arr1, arr2) {
    let notIdentical = false;
    let where = 0;
    let sum = 0;
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] != arr2[index]) {
            notIdentical = true;
            where = index;
            break;
        } else {
            sum += Number(arr1[index]);
        }
    }
    if (!notIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${where} index`);
    }
}

equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);