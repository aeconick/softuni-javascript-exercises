function nextDay(year, month, day) {
    let newDate = new Date(year, month - 1, day + 1);
    // console.log(newDate);
    let myYear = newDate.getFullYear();
    let myMonth = newDate.getMonth() + 1;
    let myDay = newDate.getDate();
    console.log(`${myYear}-${myMonth}-${myDay}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);