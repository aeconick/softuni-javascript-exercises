function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTickedCounter = 0;

    while (command !== 'Finish') {
        let name = command;
        index++;
        let freeSpaces = Number(input[index]);
        index++;
        let tickedType = input[index];
        let ticketCounter = 0;
        while (tickedType !== 'End') {
            ticketCounter++;
            switch (tickedType) {
                case 'student': studentCounter++; break;
                case 'standard': standardCounter++; break;
                case 'kid': kidCounter++; break;
            }
            if (ticketCounter >= freeSpaces) {
                break;
            }
            tickedType = input[++index];
        }
        totalTickedCounter += ticketCounter;
        let resultSingleFilm = ticketCounter / freeSpaces * 100;

        console.log(`${name} - ${resultSingleFilm.toFixed(2)}% full.`);
        command = input[++index];
    }
    console.log(`Total tickets: ${totalTickedCounter}`);
    console.log(`${(studentCounter / totalTickedCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalTickedCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTickedCounter * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);