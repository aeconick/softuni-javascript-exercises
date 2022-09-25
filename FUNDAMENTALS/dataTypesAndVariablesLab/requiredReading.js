function requiredReading(totalPages, pagesPerHour, totalDays) {
    let totalTime = totalPages / pagesPerHour;
    let result = totalTime / totalDays;
    console.log(result);
}

requiredReading(212, 20, 2);