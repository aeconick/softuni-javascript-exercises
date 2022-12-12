import { html, render } from '../node_modules/lit-html/lit-html.js';

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let towns = formData.get('towns');
    towns = towns.split(', ');
    renderList(towns);
    form.reset();
}

function renderList(towns) {
    const result = createList(towns);
    render(result, document.querySelector('#root'));
}

function createList(towns) {
    const ul = html`<ul>
    ${towns.map(town => html`<li>${town}</li>`)}</ul>`
    return ul;
}