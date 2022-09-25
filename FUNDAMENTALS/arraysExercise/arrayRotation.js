function arrayRotation(initArr, rotations) {
    for (let i = 0; i < rotations; i++) {
        initArr.push(initArr.shift());
    }
    console.log(initArr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);