function solve(inputArr){

let firstMin = Math.min(...inputArr);
let index = inputArr.indexOf(firstMin);
inputArr.splice(index,1);
let secondMin = Math.min(...inputArr);

let result = firstMin + ' ' + secondMin;

return result;

}

result = solve([3, 0, 10, 4, 7, 3]);
console.log(result);