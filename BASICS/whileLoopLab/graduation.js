function graduation(input) {

    let studentName = input[0];
    let grades = 1;
    let index = 0;
    let sum = 0;
    let excluded = 0;

    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);

        if (grade >= 4) {
            sum += grade;
            grades++;
        } else {
            excluded++;
            break;
        }
    }
    let avgGrade = sum / 12;

if (excluded >= 1) {
    console.log(`${studentName} has been excluded at ${grades} grade`);
} else {
    console.log(`${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`);
}
}


graduation(["Mimi","5","6","5","6","5","6","6","2","3"]);
