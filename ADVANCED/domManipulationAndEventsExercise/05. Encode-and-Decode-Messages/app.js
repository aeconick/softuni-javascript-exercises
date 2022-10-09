function encodeAndDecodeMessages() {
    let sendButtonElement = document.getElementsByTagName('button')[0];
    let readButtonElement = document.getElementsByTagName('button')[1];
    let textAreaElement = document.querySelector('div textarea');


    let originalText = '';
    let encryptedTextArr = [];
    let encryptedText = '';

    sendButtonElement.addEventListener('click', function () {
        originalText = textAreaElement.value;
        textAreaElement.value = '';
        for (i = 0; i < originalText.length; i++) {
            encryptedTextArr.push(originalText.charCodeAt(i) + 1);
        }
        console.log(encryptedTextArr);
        encryptedText = String.fromCharCode(...encryptedTextArr);
        console.log(encryptedText);
        document.querySelectorAll('div textarea')[1].value = encryptedText;
        encryptedTextArr = [];
    });

    readButtonElement.addEventListener('click', function () {
        document.querySelectorAll('div textarea')[1].value = originalText;
    });
}