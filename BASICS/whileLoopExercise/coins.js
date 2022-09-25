function coins(input) {
    let money = Math.floor(Number(input[0]) * 100);

    let count = 0;
    while (money > 0) {
        if (money >= 200) {
            money -= 200;
            count++;
        } else if (money >= 100) {
            money -= 100;
            count++;
        } else if (money >= 50) {
            money -= 50;
            count++;
        } else if (money >= 20) {
            money -= 20;
            count++;
        } else if (money >= 10) {
            money -= 10;
            count++;
        } else if (money >= 5) {
            money -= 5;
            count++;
        } else if (money >= 2) {
            money -= 2;
            count++;
        } else if (money >= 1) {
            money -= 1;
            count++;
        }
    }
    console.log(count);
}

coins(["3"]);