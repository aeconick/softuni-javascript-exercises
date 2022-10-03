function search() {
   let towns = document.querySelectorAll('ul li');
   let input = document.getElementById('searchText').value;

   let townArr = Array.from(towns);
   let count = 0;
   for (let town of townArr) {
      if (town.textContent.includes(input)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         count++;
      } else {
         town.style.textDecoration = '';
         town.style.fontWeight = '';
      }
   }
   document.getElementById('searchText').value = '';
   document.getElementById('result').textContent = `${count} matches found`;
}
