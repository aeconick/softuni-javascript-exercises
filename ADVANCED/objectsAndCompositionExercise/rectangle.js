function rectangle(width, height, color) {

    let letter = color[0].toUpperCase();
    for (let i = 1; i < color.length; i++) {
        letter += color[i];
    }
    let obj = {
        width,
        height,
        color: letter,
        calcArea: function () {
            return this.width * this.height;
        }
    }

    return obj;

}



let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
