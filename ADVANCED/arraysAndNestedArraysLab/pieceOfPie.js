function solve(inputArr, start, end) {

    let outputArr = [];
    let startIndex = inputArr.indexOf(start);
    let endIndex = inputArr.indexOf(end);
    return [(inputArr.slice(startIndex, endIndex + 1)).join('\n')];

}


solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');

