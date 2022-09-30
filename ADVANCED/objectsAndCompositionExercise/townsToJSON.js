function solve(arr) {

    let result = [];

    for (i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split(' | ');
        let newTown = town.split(' ');
        newTown.shift();
        let newNewTown = newTown.join(' ');
        let newLongitude = longitude.split(' ');
        let obj = { Town: newNewTown, Latitude: +((Number(latitude)).toFixed(2)), Longitude: +((Number(newLongitude[0])).toFixed(2)) };
        result.push(obj);
    }

    let myJSON = JSON.stringify(result);
    console.log(myJSON);

}

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);