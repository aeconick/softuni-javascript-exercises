function spiceMustFlow(startingYield) {
    let totalSpiceExtracted = 0;
    let countDays = 0;
    while (startingYield >= 100) {
        countDays++;
        totalSpiceExtracted += startingYield;
        totalSpiceExtracted -= 26;
        startingYield -= 10;
    }
    if (totalSpiceExtracted >= 26) {
        totalSpiceExtracted -= 26;
    }
    console.log(countDays);
    console.log(totalSpiceExtracted);
}

spiceMustFlow(450);