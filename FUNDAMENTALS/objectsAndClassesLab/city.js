function city(inputObj) {
    for (const key of Object.keys(inputObj)) {
        console.log(`${key} -> ${inputObj[key]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);