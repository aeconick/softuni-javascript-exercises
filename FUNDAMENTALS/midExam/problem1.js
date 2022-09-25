function solve(arr) {
    let month = 30; // one moth is 30 days
    let biscuitsPerDayPerWorker = Number(arr[0]);
    let numberOfWorkers = Number(arr[1]);
    let competingNumBiscuits = Number(arr[2]);

    let totalBiscuits = 0;
    for (i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            totalBiscuits += Math.floor(numberOfWorkers * biscuitsPerDayPerWorker * 0.75);
        } else {
            totalBiscuits += Math.floor(numberOfWorkers * biscuitsPerDayPerWorker);
        }
    }
    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);
    if (totalBiscuits > competingNumBiscuits) {
        let difference = totalBiscuits - competingNumBiscuits;
        let percentage = difference / competingNumBiscuits * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {
        let difference = competingNumBiscuits - totalBiscuits;
        let percentage = (difference / competingNumBiscuits) * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }
}

solve(["65",
    "12",
    "26000"]); 
