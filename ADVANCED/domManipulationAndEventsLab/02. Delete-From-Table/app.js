function deleteByEmail() {
    let inputElement = document.getElementsByName('email')[0];
    let inputText = inputElement.value;
    let resultElement = document.getElementById('result');

    let tableRowElements = document.querySelectorAll('tbody td:nth-child(2)');
    let tableRowArray = Array.from(tableRowElements);

    for (const row of tableRowArray) {
        if (row.textContent === inputText) {
            let parentRow = row.parentNode;
            parentRow.parentNode.removeChild(parentRow);
            resultElement.textContent = 'Deleted.';
        } else {
            resultElement.textContent = 'Not found.';
        }
    }
}