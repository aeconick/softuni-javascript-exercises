function bitcoinMining(input) {
    let bitcoinLv = 11949.16;
    let goldLv = 67.51;
    let firstDay = '';
    let totalMoney = 0;
    for (let index = 0; index < input.length; index++) {
        if ((index + 1) % 3 == 0) {
            totalMoney += (Number(input[index]) * goldLv) * 0.7;
        } else {
            totalMoney += Number(input[index]) * goldLv;
        }
        if (totalMoney >= bitcoinLv) {
            firstDay += index + 1;
        }

    }
    let numBitcoins = Math.floor(totalMoney / bitcoinLv);
    console.log(`Bought bitcoins: ${numBitcoins}`);
    if (firstDay != '') {
        console.log(`Day of the first purchased bitcoin: ${firstDay.charAt(0)}`);
    }
    console.log(`Left money: ${(totalMoney - (numBitcoins * bitcoinLv)).toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300]);