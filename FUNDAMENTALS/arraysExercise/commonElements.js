function commonElements(firstArr, secondArr) {
    for (const element1 of firstArr) {
        for (const element2 of secondArr) {
            if (element1 === element2) {
                console.log(element1);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);