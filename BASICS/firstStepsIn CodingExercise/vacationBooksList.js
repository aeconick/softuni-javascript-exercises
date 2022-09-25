function vacationBooksList(input) {
    let numberPages = input[0];
    let pagesPerHour = input[1];
    let daysToRead = input[2];

    let timePerBook = numberPages / pagesPerHour;
    let hoursPerDay = timePerBook / daysToRead;

    console.log(hoursPerDay);
}

vacationBooksList();