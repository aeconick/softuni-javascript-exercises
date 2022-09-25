function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMins = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMins = Number(input[3]);

    let totalExamMins = examHour * 60 + examMins;
    let totalArrivalMins = arrivalHour * 60 + arrivalMins;

    let minDifference = totalExamMins - totalArrivalMins;

    if (minDifference >= 0 && minDifference <= 30) {
        console.log('On time');
        console.log(`${minDifference} minutes before the start`);
    } else if (minDifference > 30) {
        console.log('Early');
        if (minDifference > 59) {
            let hours = Math.floor(minDifference / 60);
            let mins = parseInt(minDifference % 60);
            if (mins < 10) {
                console.log(`${hours}:0${mins} hours before the start`);
            } else {
                console.log(`${hours}:${mins} hours before the start`);
            }
        } else {
            console.log(`${minDifference} minutes before the start`);
        }
    } else if (minDifference < 0) {
        minDifference = Math.abs(minDifference);
        console.log('Late');
        if (minDifference > 59) {
            let hours = Math.floor(minDifference / 60);
            let mins = parseInt(minDifference % 60);
            if (mins < 10) {
                console.log(`${hours}:0${mins} hours after the start`);
            } else {
                console.log(`${hours}:${mins} hours after the start`);
            }
        } else {
            console.log(`${minDifference} minutes after the start`);
        }
    }

}

onTimeForTheExam();