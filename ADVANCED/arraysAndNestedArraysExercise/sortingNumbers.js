function solve(arr) {

    let sorted = arr.sort((a, b) => a - b);
    let output = [];

    if (sorted.length % 2 == 0) {
        while (sorted.length > 0) {
            let smallest = sorted.shift();
            let largest = sorted.pop();
            output.push(smallest);
            output.push(largest);
        }
    } else {
        let oddElement = sorted.shift();
        output.push(oddElement);
        while (sorted.length > 0) {
            let smallest = sorted.shift();
            let largest = sorted.pop();
            output.push(largest);
            output.push(smallest);
        }
    }
    return output;

}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);