function extract(content) {

    let text = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;
    let resultArr = [];

    let match = pattern.exec(text);
    while (match) {
        resultArr.push(match[1]);
        match = pattern.exec(text);
    }

    return resultArr.join('; ');
}