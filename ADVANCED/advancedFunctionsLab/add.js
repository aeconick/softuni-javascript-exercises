function solution(num1) {
    let num = num1;
    return function (num2) {
        return num + num2;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));


