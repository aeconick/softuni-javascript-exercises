function extractFile(input) {
    let inputArr = input.split('\\');
    let fileName = inputArr.pop().split('.');
    let extension = fileName.pop();
    console.log(`File name: ${fileName.join('.')}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');