function extractText() {
    let listElements = document.getElementsByTagName('li');
    let arr = Array.from(listElements);
    let result = '';
    for (let el of arr) {
        let currentListItemText = el.textContent;
        result += currentListItemText + '\n';
    }
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}