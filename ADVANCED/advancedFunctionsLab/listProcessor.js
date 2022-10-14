function solve(input) {
    let processor = (function () {
        let result = [];
        return {
            add: (item) => result.push(item),
            remove: (item) => result = result.filter(x => x !== item),
            print: () => console.log(result.join(",")),
        }
    })();

    for (let line of input) {
        let [command, text] = line.split(" ");
        processor[command](text);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])