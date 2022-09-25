function makeADictionary(input) {

    let outputObj = {};
    for (const el of input) {
        let obj = JSON.parse(el);
        let key = Object.keys(obj);
        let value = Object.values(obj);
        outputObj[key] = value.toString();
    }

    const sorted = Object.keys(outputObj)
        .sort()
        .reduce((accumulator, key) => {
            accumulator[key] = outputObj[key];

            return accumulator;
        }, {});

    for (const [key, val] of Object.entries(sorted)) {
        console.log(`Term: ${key} => Definition: ${val}`)
    }
}

makeADictionary(
    ['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);