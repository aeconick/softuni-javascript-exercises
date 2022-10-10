function solve(input, crit) {
    let employees = JSON.parse(input);
    let [data, criteria] = crit.split('-');
    let i = 0;
    if (criteria == 'all') {
        for (let employee of employees) {
            console.log(`${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
            i++;
        }
    } else {
        for (let employee of employees) {
            if (employee[data] == criteria) {
                console.log(`${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
                i++;
            }
        }
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-all'
);