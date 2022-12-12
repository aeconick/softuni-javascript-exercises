function loadRepos() {
	let inputElementValue = document.getElementById('username').value;
	let url = `https://api.github.com/users/${inputElementValue}/repos`;

	let ulElement = document.getElementById('repos');
	ulElement.innerHTML = '';

	fetch(url)
		.then(response => response.json())
		.then(data => {
			data.map(repo => {
				let aElement = document.createElement('a');
				aElement.textContent = repo.full_name;
				aElement.href = repo.html_url;
				let liElement = document.createElement('li');
				liElement.appendChild(aElement);
				ulElement.appendChild(liElement);
			})
		})
		.catch(error => console.log(error));
}