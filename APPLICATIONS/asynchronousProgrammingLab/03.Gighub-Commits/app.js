function loadCommits() {
    let usernameElementValue = document.getElementById('username').value;
    let repoElementValue = document.getElementById('repo').value;
    let ulElement = document.getElementById('commits');

    let url = `https://api.github.com/repos/${usernameElementValue}/${repoElementValue}/commits`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                let liElement = document.createElement('li');
                liElement.textContent = `Error: ${response.status} (Not Found)`;
                ulElement.appendChild(liElement);
            }
            return response.json();
        })
        .then(data => {
            data.map(data => {
                let liElement = document.createElement('li');
                liElement.textContent = `${data.commit.author.name}: ${data.commit.message}`;
                ulElement.appendChild(liElement);
            })
        })
        .catch(error => console.log(error));
}