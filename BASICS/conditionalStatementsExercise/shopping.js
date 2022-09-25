function shopping(input) {
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let priceGPU = GPU * 250;
    let priceCPU = priceGPU * 0.35 * CPU;
    let priceRAM = priceGPU * 0.10 * RAM;

    let totalSum = priceCPU + priceGPU + priceRAM;

    if (GPU > CPU) {
        totalSum *= 0.85;
    }

    if (totalSum <= budget) {
        console.log(`You have ${Math.abs(totalSum - budget).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(totalSum - budget).toFixed(2)} leva more!`);
    }

}

shopping(["900",
    "2",
    "1",
    "3"]);