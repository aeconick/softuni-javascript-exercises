function addItem() {
    let optionElement = document.createElement('option');
    optionElement.textContent = document.getElementById('newItemText').value;
    optionElement.value = document.getElementById('newItemValue').value;
    document.getElementById('menu').appendChild(optionElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}