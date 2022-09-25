function schoolGrades(input) {

    let student = {};
    for (let line of input) {
        line = line.split(' ');
        let name = line.shift();
        let grades = line.map(Number);
        if (student.hasOwnProperty(name)) {
            for (const el of grades) {
                student[name].push(el);
            }
        } else {
            student[name] = grades;
        }

    }
    let keys = Object.keys(student);
    for (const key of keys) {
        let sum = 0;
        let count = 0;
        for (const el of student[key]) {
            sum += el;
            count++;
        }
        student[key] = (sum / count).toFixed(2);
    }
    let sorted = keys.sort();
    for (const key of sorted) {
        console.log(`${key}: ${student[key]}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);