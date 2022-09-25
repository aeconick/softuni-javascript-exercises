function inventory(input) {

    let finalArr = [];

    for (const el of input) {
        let [name, level, items] = el.split(' / ');
        let currentHero = {
            name: name,
            level: +level,
            items: items
        };
        finalArr.push(currentHero);
    }

    let sortedArr = finalArr.sort((a, b) => {
        return a.level - b.level;
    });

    for (const person of sortedArr) {
        console.log(`Hero: ${person.name}`);
        console.log(`level => ${person.level}`);
        console.log(`items => ${person.items}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);