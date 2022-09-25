function bombNumbers(arr, comm) {
    let myArr = arr.slice();
    let bombNumber = comm[0];
    let explosionNumbers = comm[1];
    let arrL = myArr.length;

    for (i = 0; i < arrL; i++) {
        if (myArr[i] == bombNumber) {
            myArr.splice(i, 1, 'delete');
            //console.log(myArr);
            for (j = 1; j <= explosionNumbers; j++) {
                myArr.splice(Math.abs(i - j), 1, 'delete');
                //console.log(myArr);
                myArr.splice(i + j, 1, 'delete');
                //console.log(myArr);
            }
        }
    }
    let sum = 0;
    for (const el of myArr) {
        if (el != 'delete') {
            sum += Number(el);
        }
    }
    // console.log(myArr.join(' '));
    console.log(sum);
}

bombNumbers([1, 9, 4, 2, 8, 1],
    [9, 2]
);