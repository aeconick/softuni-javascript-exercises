function validate() {
    let emailEl = document.getElementById('email');
    const myRegex = /^([a-z]+@{1}[a-z]+\.{1}[a-z]+)$/gm;
    emailEl.addEventListener('change', (event) => {
        console.log(event.target);
        if (myRegex.test(event.target.value)) {
            event.currentTarget.removeAttribute('class');
        } else {
            event.currentTarget.classList.add('error');
        }
    })
}