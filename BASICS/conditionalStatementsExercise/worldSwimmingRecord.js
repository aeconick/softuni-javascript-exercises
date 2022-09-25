function worldSwimmingRecord(input) {
    let recordSecs = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeMeterSecs = Number(input[2]);

    let waterResistance = Math.floor(distanceMeters / 15) * 12.5;
    let totalTime = distanceMeters * timeMeterSecs + waterResistance;

    if (totalTime < recordSecs) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${Math.abs(recordSecs - totalTime).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord();