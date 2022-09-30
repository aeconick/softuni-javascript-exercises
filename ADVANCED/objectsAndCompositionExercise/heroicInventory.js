function solve(arr) {

    let finalArr = [];

    for (const el of arr) {
        let currentEl = el.split(' / ');
        let name = currentEl[0];
        let level = Number(currentEl[1]);
        let items = currentEl[2];
        items = items ? items.split(', ') : [];
        let obj = {
            name,
            level,
            items
        };
        finalArr.push(obj);
    }
    let myJSON = JSON.stringify(finalArr);
    if (myJSON == '') {
        return;
    } else {
        return myJSON;
    }

}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);