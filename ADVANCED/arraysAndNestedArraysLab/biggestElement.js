function solve(inputArr) {

    let allElements = [];
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr[i].length; j++) {
            allElements.push(inputArr[i][j]);
        }
    }
    console.log(Math.max(...allElements));

}

solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);