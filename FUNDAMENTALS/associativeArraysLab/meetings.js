function meetings(input) {

    let obj = {};
    for (const line of input) {
        let [day, name] = line.split(' ');
        if (obj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            obj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    let keys = Object.keys(obj);
    for (const key of keys) {
        console.log(key, '->', obj[key]);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);