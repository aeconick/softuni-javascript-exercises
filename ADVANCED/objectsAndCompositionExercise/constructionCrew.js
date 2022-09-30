function solve(obj) {

    let { weight, experience, levelOfHydrated, dizziness } = obj;

    let required = 0;
    if (dizziness) {
        required = 0.1 * weight * experience;
    } else {
        return obj;
    }
    levelOfHydrated += required;
    dizziness = false;
    let newObj = {
        weight,
        experience,
        levelOfHydrated,
        dizziness
    }
    return newObj;
}

solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
);