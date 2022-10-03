function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let costArr = Array.from(costElements);
    let sumElement = costArr.pop();
    let result = 0;
    for (const el of costArr) {
        result += +el.textContent;
    }
    sumElement.textContent = result;

}
