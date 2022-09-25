function cone(radius, height) {
    //V = (1/3)πr2h
    let V = (Math.PI * Math.pow(radius, 2) * height) / 3;
    //A = πr(r + √(r2 + h2))
    let A = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)))
    console.log('volume = ' + V.toFixed(4));
    console.log('area = ' + A.toFixed(4));
}

cone(3, 5);