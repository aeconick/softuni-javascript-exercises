function colorize() {
    let tableElement = document.getElementsByTagName('tr');
    for (i = 0; i < tableElement.length; i++) {
        if (i % 2 != 0) {
            tableElement[i].style.backgroundColor = 'Teal';
        }
    }
}