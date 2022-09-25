function salary(input) {
    let numberOfTabs = Number(input[0]);
    let salary = Number(input[1]);

    let isLost = false;
    for (let index = 2; index <= numberOfTabs + 2; index++) {
        if (salary <= 0) {
            isLost = true;
            console.log('You have lost your salary.');
            break;
        }
        switch (input[index]) {
            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50;
                break;
        }

    }
    if (!isLost) {
        console.log(salary);
    }
}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
    ;