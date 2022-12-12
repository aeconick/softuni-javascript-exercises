import { html, render } from '../node_modules/lit-html/lit-html.js'

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const menu = document.getElementById('menu');
const form = document.querySelector('form');
const input = document.getElementById('itemText');

form.addEventListener('submit', addItem);

async function getData() {
    const res = await fetch(url);

    const data = await res.json();

    return data;
}

async function renderElements() {
    const data = await getData();
    const options = html`${Object.entries(data).map(el => html`<option value="${el[1]._id}">${el[1].text}</option>`)}`;
    render(options, menu);
}

renderElements();

async function addItem(event) {
    event.preventDefault();
    const body = {
        text: input.value
    }
    input.value = '';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await res.json();

    renderElements();

    return data;
}

addItem();