function solve(arr) {

    let sorted = arr.sort((a, b) => a.localeCompare(b));

    let i = 1;
    for (const el of sorted) {
        console.log(`${i}.${el}`);
        i++;
    }
}

solve(["John", "Bob", "Christina", "Ema"]);