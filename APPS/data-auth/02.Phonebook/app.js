function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoadAllRecords);
    document.getElementById('btnCreate').addEventListener('click', handleCreateRecord)
}

attachEvents();

function handleCreateRecord() {
    const personEl = document.getElementById('person');
    const phoneEl = document.getElementById('phone');

    onCreateRecord(personEl.value, phoneEl.value);

    personEl.value = '';
    phoneEl.value = '';
}


function renderRecord(data) {
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';
    Object.values(data).forEach(rec => {
        const li = document.createElement('li');
        li.textContent = `${rec.person}: ${rec.phone}`;
        li.setAttribute('data-id', rec._id);
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', onDelete);
        li.appendChild(button);
        ul.appendChild(li);
    });
}

function onDelete(e) {
    const li = e.target.parentElement;
    const id = li.getAttribute('data-id');

    OnDeleteRecord(id);
    li.remove();
}

async function onLoadAllRecords() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const res = await fetch(url);
    const data = await res.json();

    return renderRecord(data);
}

async function onCreateRecord(person, phone) {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const body = {
        person,
        phone
    }

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    onLoadAllRecords();
    return data;
}

async function OnDeleteRecord(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;

    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(null)
    });
    const data = await res.json();

    return data;
}