window.onload = attachEvents;

const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

function attachEvents() {
    document.querySelector('#form').addEventListener('submit', createSingleStudent);
    getAllStudents();
}

async function getAllStudents() {
    let res = await fetch(baseUrl);
    let data = await res.json();

    document.querySelector("#results tbody").replaceChildren();
    Object.values(data).forEach(student => {
        let tr = generate('tr', '', document.querySelector("#results tbody"));
        generate('td', `${student.firstName}`, tr);
        generate('td', `${student.lastName}`, tr);
        generate('td', `${student.facultyNumber}`, tr);
        generate('td', `${student.grade}`, tr);
    })
}

function generate(tagName, content, parent) {
    let el = document.createElement(tagName);
    el.textContent = content;

    if (parent) {
        parent.appendChild(el);
    }
    return el;
}

async function createSingleStudent(e) {
    e.preventDefault();

    let info = new FormData(e.target);
    let firstName = info.get('firstName');
    let lastName = info.get('lastName');
    let facultyNumber = info.get('facultyNumber');
    let grade = info.get('grade');

    if (!firstName || !lastName || !facultyNumber || !grade) {
        alert('All fields are required!');
    } else {
        let studentData = {
            firstName,
            lastName,
            facultyNumber,
            grade
        }
        await request(baseUrl, studentData);
        getAllStudents();
    }
}

async function request(baseUrl, body) {
    if (body) {
        let post = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        let res = await fetch(baseUrl, post);
        return await res.json();
    }
}
