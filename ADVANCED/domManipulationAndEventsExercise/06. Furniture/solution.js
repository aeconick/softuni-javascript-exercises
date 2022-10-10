function solve() {
    let generateButton = document.querySelectorAll('button')[0];
    let buyButton = document.querySelectorAll('button')[1];

    generateButton.addEventListener('click', function () {
        let inputTextAreaText = document.querySelectorAll('textarea')[0].value;
        let parsed = JSON.parse(inputTextAreaText);

        for (let obj of parsed) {
            let divElement = document.getElementsByClassName('card-wrapper')[0];
            let newDivElement = document.createElement('div');

            newDivElement.innerHTML = `<div class="row"><div class="col-md-12"><table class="table"><thead><tr><th scope="col">Image</th><th scope="col">Name</th><th scope="col">Price</th><th scope="col">Decoration factor</th><th scope="col">Mark</th></tr></thead><tbody><tr><td><img src=${obj.img}></td><td><p>${obj.name}</p></td><td><p>${obj.price}</p></td><td><p>${obj.decFactor}</p></td><td><input type="checkbox" disabled /></td></tr></tbody></table></div>`;

            divElement.appendChild(newDivElement);

        }

        let checkboxElements = document.querySelectorAll('input[type="checkbox"]');
        let checkboxArr = Array.from(checkboxElements);
        for (let box of checkboxArr) {
            box.disabled = false;
        }
    });

    buyButton.addEventListener('click', function () {
        let checkboxElements = document.querySelectorAll('input[type="checkbox"]');
        let checkboxArr = Array.from(checkboxElements);

        let names = []; //!!!!!
        let totalPrice = 0; //!!!!
        let avrDecoration = 0;
        for (let box of checkboxArr) {
            if (box.checked) {
                names.push((box.parentElement.parentElement).getElementsByTagName('td')[1].innerText);
                totalPrice += Number((box.parentElement.parentElement).getElementsByTagName('td')[2].innerText);
                avrDecoration += Number((box.parentElement.parentElement).getElementsByTagName('td')[3].innerText);
            }
        }
        avrDecoration = avrDecoration / names.length; //!!!!!
        let outputTextAreaText = document.querySelectorAll('textarea')[1];
        outputTextAreaText.value += `Bought furniture: ${names.join(', ')}\n`;
        outputTextAreaText.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputTextAreaText.value += `Average decoration factor: ${avrDecoration}`;
    });

}