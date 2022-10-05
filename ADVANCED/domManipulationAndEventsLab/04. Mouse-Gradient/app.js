function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', gradientMove);
    gradientElement.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let result = event.offsetX / (event.target.clientWidth - 1);
        result = Math.trunc(result * 100);
        document.getElementById('result').textContent = result + "%";
    }

    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
};
