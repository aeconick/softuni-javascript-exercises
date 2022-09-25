function moving(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let freeSpace = w * l * h;

    let index = 3;
    let boxesSpace = 0;
    let scanner = input[index];
    let hitLimit = false;
    while (scanner !== 'Done') {
        scanner = Number(input[index]);
        boxesSpace += scanner;
        if (boxesSpace >= freeSpace) {
            hitLimit = true;
            break;
        }
        index++;
        scanner = input[index];
    }
    if (hitLimit) {
        console.log(`No more free space! You need ${boxesSpace - freeSpace} Cubic meters more.`);
    } else {
        console.log(`${freeSpace - boxesSpace} Cubic meters left.`);
    }

}

moving(["10","10","2","20","20","20","20","122"]);
