function companyUsers(input) {

    let companyObj = {};

    for (let line of input) {
        let [comp, emp] = line.split(' -> ');
        if (!companyObj.hasOwnProperty(comp)) {
            companyObj[comp] = [];
        }
        if(!companyObj[comp].includes(emp)){
            companyObj[comp].push(emp);
        }
    }

    let keys = Object.keys(companyObj);
    let sortedKeys = keys.sort((a, b) => a.localeCompare(b));
    for (let key of sortedKeys) {
        console.log(key);
        for (let item of companyObj[key]) {
            console.log('--', item);
        }
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);