function projectsCreation(input) {
    let name = input[0];
    let numProjects = input[1];
    let time = Number(numProjects) * 3;
    let result = `The architect ${name} will need ${time} hours to complete ${numProjects} project/s.`;

    console.log(result);
}

projectsCreation();