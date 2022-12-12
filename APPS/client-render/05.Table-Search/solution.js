import { html, render } from '../node_modules/lit-html/lit-html.js'

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

}

function onClick() {
   (document.querySelectorAll('td')).forEach(el => el.parentElement.classList.remove('select'));
   let searchFieldValue = document.getElementById('searchField').value;
   (document.querySelectorAll('td')).forEach(el => {
      if ((el.textContent.toLowerCase()).includes(searchFieldValue.toLowerCase()) && el.parentElement.parentElement.tagName != 'TFOOT') {
         el.parentElement.classList.add('select');
      }
   });
   document.getElementById('searchField').value = '';
}

solve();

const root = document.querySelector('tbody');

async function getData() {
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await res.json();

   return data;
}

async function renderData() {
   const data = await getData();
   const tr = html`${Object.values(data).map(el => html`<tr>
   <td>${el.firstName + " " + el.lastName}</td>
   <td>${el.email}</td>
   <td>${el.course}</td>
</tr>`)}`;
   render(tr, root);
}

renderData()


