function fishTank(input) {
    let length = input[0];
    let width = input[1];
    let height = input[2];
    let percent = input[3];

    let V = length * width * height;
    let VInLiters = V / 1000;
    let final = VInLiters * (1 - percent / 100);

    console.log(final);
}

fishTank();