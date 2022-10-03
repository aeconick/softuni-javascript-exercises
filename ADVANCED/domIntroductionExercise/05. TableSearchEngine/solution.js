function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (let row of rows) {
         row.classList.remove('select');
         if (input.value !== '' && row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }
      input.value = '';
      // let tableElements = document.querySelectorAll('tbody tr td');
      // let input = document.getElementById('searchField').value;

      // let tableArr = Array.from(tableElements);
      // for (let el of tableArr) {
      //    el.classList.remove('select');
      //    if (el.textContent.includes(input) && el.textContent != '') {
      //       el.className = 'select';
      //    }
      // }
      // input = '';
   }
}