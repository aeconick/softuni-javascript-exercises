function attachEvents() {
    const sendButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');
    const textArea = document.getElementById('messages');

    sendButton.addEventListener('click', sendMessage);
    refreshButton.addEventListener('click', async () => {
        const messages = await getAllMessages();
        let text = '';
        messages.forEach(message => {
            text += `${message.author}: ${message.content}\n`;
        });
        textArea.textContent = text.slice(0, -1);
    });
}

attachEvents();

async function getAllMessages() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const res = await fetch(url);
    const data = await res.json();

    return Object.values(data);
}

async function sendMessage() {
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]');

    let body = {
        author: author.value,
        content: content.value
    };

    const url = 'http://localhost:3030/jsonstore/messenger';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await res.json();

    return data;
}

