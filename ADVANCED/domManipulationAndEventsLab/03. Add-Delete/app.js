function addItem() {
    let inputElement = document.getElementById('newItemText');
    let inputText = inputElement.value;

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputText;
    //<a href="#">Delete</a>
    let newDeleteElement = document.createElement('a');
    newDeleteElement.textContent = '[Delete]';
    newDeleteElement.href = '#';

    newLiElement.appendChild(newDeleteElement);

    let ulElement = document.getElementById('items');
    ulElement.appendChild(newLiElement);

    newDeleteElement.addEventListener('click', deleteElement);

    function deleteElement(e) {
        newLiElement.remove();
    }
}