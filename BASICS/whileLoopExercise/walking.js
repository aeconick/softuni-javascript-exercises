function walking(input) {
    let goal = 10000;

    index = 0;
    let steps = input[index];
    let totalSteps = 0;
    let goalReached = false;
    while (steps !== 'Going home') {
        steps = Number(input[index]);
        totalSteps += steps;
        if (totalSteps >= goal) {
            console.log('Goal reached! Good job!');
            console.log(`${totalSteps - goal} steps over the goal!`);
            goalReached = true;
            break;
        }
        index++;
        steps = input[index];
    }
    if (!goalReached) {
        index++;
        steps = Number(input[index]);
        totalSteps += steps;
        if (totalSteps >= goal) {
            console.log('Goal reached! Good job!');
            console.log(`${totalSteps - goal} steps over the goal!`);
        } else {
            console.log(`${goal - totalSteps} more steps to reach goal.`);
        }
    }
}

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);
