function distinctArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length;) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
            } else {
                j++;
            }
        }
    }
    return arr.join(' ');
}