function towns(input) {
    let town = {};
    for(i=0;i<input.length;i++){
        let currentCommand = input[i].split(' | ');
        town.town = currentCommand[0];
        town.latitude = Number(currentCommand[1]).toFixed(2);
        town.longitude = Number(currentCommand[2]).toFixed(2);
        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);