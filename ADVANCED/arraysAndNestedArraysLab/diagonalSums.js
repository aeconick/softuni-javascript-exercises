function solve(arr) {

    let sumFirst = 0;
    let sumSecond = 0;

    for (let i = 0; i < arr.length; i++) {
        sumFirst += Number(arr[i][i]);
        sumSecond += Number(arr[i][arr.length - 1 - i]);
    }

    console.log(sumFirst + ' ' + sumSecond);

}

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);

