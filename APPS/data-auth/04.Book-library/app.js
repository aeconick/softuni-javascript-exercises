window.onload = attachEvents;

const bseUrl = 'http://localhost:3030/jsonstore/collections/books';
const form = document.querySelector('form');
const h3 = form.querySelector('h3');
const formBtn = form.querySelector('button');

function attachEvents() {
    document.querySelector('#loadBooks').addEventListener('click', getAllBooks);
    form.addEventListener('submit', createOrUpdateBook)
}

async function getAllBooks() {
    const res = await fetch(bseUrl);
    const data = await res.json();

    document.querySelector('tbody').replaceChildren();
    Object.entries(data).forEach(([key, info]) => {
        let tr = generator('tr', '', document.querySelector('tbody'));
        tr.id = key;
        generator('td', `${info.title}`, tr);
        generator('td', `${info.author}`, tr);
        let buttonsTd = generator('td', '', tr);

        let editBtn = generator('button', 'Edit', buttonsTd);
        editBtn.addEventListener('click', editSingleBook);

        let deleteBtn = generator('button', 'Delete', buttonsTd);
        deleteBtn.addEventListener('click', deleteSingleBook);
    })
}

async function createOrUpdateBook(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    let title = data.get('title');
    let author = data.get('author');

    let bookData = {
        author,
        title
    }

    if (formBtn.textContent == 'Save') {
        if (!title || !author) {
            alert('All fields are reqquired!');
            return;
        } else {
            await fetch(`${bseUrl}/${bookId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            })
        }

        h3.textContent = 'FORM';
        formBtn.textContent = 'Submit';
        
    } else {
        if (!title || !author) {
            alert('All fields are reqquired!');
            return;
        } else {
            await fetch(`${bseUrl}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            })
        }
    }
    getAllBooks();
    form.reset();
}

async function editSingleBook(event) {
    event.preventDefault();
    bookId = event.target.parentNode.parentNode.id;

    h3.textContent = 'Edit FORM';
    formBtn.textContent = 'Save';

    form.querySelector('input[name=title]').value = event.target.parentNode.parentNode.children[0].textContent;
    form.querySelector('input[name=author]').value = event.target.parentNode.parentNode.children[1].textContent;
}

async function deleteSingleBook(event) {
    let bookId = event.target.parentNode.parentNode.getAttribute('id');

    await fetch(`${bseUrl}/${bookId}`, {
        method: 'DELETE',
    });

    getAllBooks();
}

function generator(tagName, content, parent) {
    let element = document.createElement(tagName);
    element.textContent = content;

    if (parent) {
        parent.appendChild(element);
    }
    return element;
}