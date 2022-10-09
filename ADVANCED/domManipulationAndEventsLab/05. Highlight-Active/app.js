function focused() {
    let textElements = document.querySelectorAll('div div input');
    let textArr = Array.from(textElements);
    for (const el of textArr) {
        el.addEventListener('focus', function () {
            for (const a of textArr) {
                console.log('slay');
                a.parentElement.classList.remove('focused');
            }
            el.parentElement.className = 'focused';
        });
    };
}