function create(words) {
   words.forEach(word => {
      let pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = word;
      let divElement = document.createElement('div');
      divElement.appendChild(pElement);
      document.getElementById('content').appendChild(divElement);
   });

   //console.log(document.querySelector('#content div p'));
   Array.from(document.querySelectorAll('#content div')).forEach(x => x.addEventListener('click', function () {
      x.firstChild.style.display = 'block';
   }))
}