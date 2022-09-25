function solve(stringOne, stringTwo, stringThree) {
    let result = stringOne.length + stringTwo.length + stringThree.length;
    let avgResult = Math.floor((stringOne.length + stringTwo.length + stringThree.length) / 3);
    console.log(result);
    console.log(avgResult);
}

solve('chocolate', 'ice cream', 'cake');
