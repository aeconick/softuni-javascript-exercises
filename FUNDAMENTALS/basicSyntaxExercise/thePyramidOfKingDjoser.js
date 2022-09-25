function thePyramidOfKingDjoser(base, increment) {
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;
    let count = 0;
    for (let index = base; index > 0; index -= 2) {
        count++;
        if (index == 2) {
            goldRequired += 4 * increment;
            break;
        } else if (index == 1) {
            goldRequired += 1 * increment;
            break;
        }
        stoneRequired += Math.pow((index - 2), 2) * increment
        if (count % 5 != 0) {
            marbleRequired += ((index - 1) * 4) * increment;
        } else {
            lapisLazuliRequired += ((index - 1) * 4) * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(count * increment)}`);

}

thePyramidOfKingDjoser(11, 1);
console.log('------------');
thePyramidOfKingDjoser(11, 0.75);
console.log('--------------');
thePyramidOfKingDjoser(12, 1);
console.log('------------');
thePyramidOfKingDjoser(23, 0.5);



