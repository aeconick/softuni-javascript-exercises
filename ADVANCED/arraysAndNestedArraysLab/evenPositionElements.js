function solve(arr) {

    let result = '';
    for (let i = 0; i < arr.length; i += 2) {
        result += arr[i] + ' ';
    }

    return result;

}

let final = solve(['20', '30', '40', '50', '60']);
console.log(final);

