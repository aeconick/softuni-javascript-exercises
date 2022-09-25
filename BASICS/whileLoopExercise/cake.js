function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let numberPieces = length * width;

    let takenPieces = 0;
    index = 2;
    let scanner = input[index];
    let dontPrint = false;
    while (scanner !== 'STOP') {
        let pieces = Number(input[index]);
        takenPieces += pieces;
        index++;
        scanner = input[index];
        if (takenPieces >= numberPieces) {
            console.log(`No more cake left! You need ${takenPieces - numberPieces} pieces more.`);
            dontPrint = true;
            break;
        }
    }
    if (!dontPrint) {
        console.log(`${numberPieces - takenPieces} pieces are left.`);
    }

}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);
