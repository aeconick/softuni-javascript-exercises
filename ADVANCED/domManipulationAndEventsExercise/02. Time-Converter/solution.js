function attachEventsListeners() {
    // 1day/24 hours/1440 minutes/86400 seconds

    let daysElement = document.getElementById('days'); //daysElement
    let hoursElement = document.getElementById('hours'); //hoursElement
    let minutesElement = document.getElementById('minutes'); //minutesElement
    let secondsElement = document.getElementById('seconds'); //secondsElement


    document.getElementById('daysBtn').addEventListener('click', function () {
        let daysElementValue = daysElement.value;
        console.log(daysElementValue);

        hoursElement.value = daysElementValue * 24;
        minutesElement.value = daysElementValue * 1440;
        secondsElement.value = daysElementValue * 86400;
    });

    document.getElementById('hoursBtn').addEventListener('click', function () {
        let hoursElementValue = hoursElement.value;
        console.log(hoursElementValue);

        daysElement.value = hoursElementValue / 24
        minutesElement.value = daysElement.value * 1440;
        secondsElement.value = daysElement.value * 86400;
    });

    document.getElementById('minutesBtn').addEventListener('click', function () {
        let minutesElementValue = minutesElement.value;
        console.log(minutesElementValue);

        daysElement.value = minutesElementValue / 1440;
        hoursElement.value = daysElement.value * 24;
        secondsElement.value = daysElement.value * 86400;
    });

    document.getElementById('secondsBtn').addEventListener('click', function () {
        let secondElementValue = secondsElement.value;
        console.log(secondElementValue);

        daysElement.value = secondElementValue / 86400;
        hoursElement.value = daysElement.value * 24;
        minutesElement.value = daysElement.value * 1440;
    });
}