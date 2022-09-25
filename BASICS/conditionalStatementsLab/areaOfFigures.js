function areaOfFigures(input) {
    let name = input[0];

    if (name === 'square') {
        let size = Number(input[1]);
        console.log((size * size).toFixed(3));
    } else if (name === 'rectangle') {
        let sizeA = Number(input[1]);
        let sizeB = Number(input[2]);
        console.log((sizeA * sizeB).toFixed(3));
    } else if (name === 'circle') {
        let size = Number(input[1]);
        console.log((Math.PI * Math.pow(size, 2)).toFixed(3));
    } else if (name === 'triangle') {
        let sizeA = Number(input[1]);
        let sizeB = Number(input[2]);
        console.log(((sizeA * sizeB) / 2).toFixed(3));
    }
}

areaOfFigures();