window.addEventListener("load", solve);

function solve() {
  let buttonElement = document.getElementById('form-btn');

  buttonElement.addEventListener('click', (e) => {
    let firstNameElementValue = document.getElementById('first-name').value;
    let lastNameElementValue = document.getElementById('last-name').value;
    let ageElementValue = document.getElementById('age').value;
    let storyTitleElementValue = document.getElementById('story-title').value;
    let genreElementValue = document.getElementById('genre').value;
    let textAreaElementValue = document.getElementById('story').value;

    if (firstNameElementValue == '' || lastNameElementValue == '' || ageElementValue == '' || storyTitleElementValue == '' || genreElementValue == '' || textAreaElementValue == '') {
      return;
    }

    let liElement = document.createElement('li');
    liElement.classList.add('story-info');
    liElement.innerHTML = `<article><h4>Name: ${firstNameElementValue} ${lastNameElementValue}</h4><p>Age: ${ageElementValue}</p><p>Title: ${storyTitleElementValue}</p><p>Genre: ${genreElementValue}</p><p>${textAreaElementValue}</p></article><button class="save-btn">Save Button</button><button class="edit-btn">Edit Button</button><button class="delete-btn">Delete Button</button>`;

    let PreviewListElement = document.getElementById('preview-list');
    PreviewListElement.appendChild(liElement);

    let firstNameElementValueHolder = document.getElementById('first-name').value;
    let lastNameElementValueHolder = document.getElementById('last-name').value;
    let ageElementValueHolder = document.getElementById('age').value;
    let storyTitleElementValueHolder = document.getElementById('story-title').value;
    let genreElementValueHolder = document.getElementById('genre').value;
    let textAreaElementValueHolder = document.getElementById('story').value;

    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('story-title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('story').value = '';
    buttonElement.disabled = true;

    let editButtonElement = document.getElementsByClassName("edit-btn")[0];
    let saveButtonElement = document.getElementsByClassName('save-btn')[0];
    let deleteButtonElement = document.getElementsByClassName('delete-btn')[0];

    editButtonElement.addEventListener('click', () => {
      document.getElementById('first-name').value = firstNameElementValueHolder;
      document.getElementById('last-name').value = lastNameElementValueHolder;
      document.getElementById('age').value = ageElementValueHolder;
      document.getElementById('story-title').value = storyTitleElementValueHolder;
      document.getElementById('genre').value = genreElementValueHolder;
      document.getElementById('story').value = textAreaElementValueHolder;
      buttonElement.disabled = false;
      PreviewListElement.removeChild(liElement);
    })

    let mainDivElement = document.getElementById('main');
    saveButtonElement.addEventListener('click', () => {
      mainDivElement.innerHTML = '<h1>Your scary story is saved!</h1>';
    })

    deleteButtonElement.addEventListener('click', () => {
      PreviewListElement.removeChild(liElement);
      buttonElement.disabled = false;
    })

  })
}
