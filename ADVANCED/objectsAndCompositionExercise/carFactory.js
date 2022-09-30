function solve(obj) {
    //Small engine: { power: 90, volume: 1800 }
    // Normal engine: { power: 120, volume: 2400 }
    // Monster engine: { power: 200, volume: 3500 }


    // Hatchback: { type: 'hatchback', color: <as required> }
    // Coupe: { type: 'coupe', color: <as required> }

    let { model, power, color, carriage, wheelsize } = obj;
    if (power <= 90) {
        power = { power: 90, volume: 1800 };
    } else if (power <= 120) {
        power = { power: 120, volume: 2400 };
    } else {
        power = { power: 200, volume: 3500 };
    }


if (wheelsize % 2 == 0) {
    wheelsize--;
}
let wheels = [wheelsize, wheelsize, wheelsize, wheelsize]

let car = {};
if(carriage=='hatchback'){
    car = {
        model,
        engine: power,
        carriage: {type: 'hatchback', color },
        wheels
    }
    } else {
        car = {
            model,
            engine: power,
            carriage: {type: 'coupe', color },
            wheels
        }
    }

    return car;

    //console.log(car.carriage);

}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);