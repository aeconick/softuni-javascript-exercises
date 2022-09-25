function solve1(input) {

    let text = input[0];

    let index = 1;
    let line = input[index];

    while (line != 'Finish') {
        let currentLine = line.split(' ');
        let command = currentLine.shift();
        let p1 = currentLine[0];
        let p2 = currentLine[1];
        if (command == 'Replace') {
            let newText = text.split(p1).join(p2);
            console.log(newText);
            text = newText;
        } else if (command == 'Cut') {
            let l = text.length;
            p1 = Number(p1);
            p2 = Number(p2);
            if (p1 >= 0 && p2 >= 0 && p1 < l && p2 < l) {
                let left = text.slice(0, p1);
                let right = text.slice(p2 + 1);
                let newText = left + right;
                console.log(newText);
                text = newText;
            } else {
                console.log('Invalid indices!');
            }
        } else if (command == 'Make') {
            if (p1 == 'Upper') {
                newText = text.toUpperCase();
                console.log(newText);
                text = newText;
            } else if (p1 == 'Lower') {
                newText = text.toLowerCase();
                console.log(newText);
                text = newText;
            }
        } else if (command == 'Check') {
            if (text.includes(p1)) {
                console.log(`Message contains ${p1}`);
            } else {
                console.log(`Message doesn't contain ${p1}`);
            }
        } else if (command == 'Sum') {
            let l = text.length;
            p1 = Number(p1);
            p2 = Number(p2);
            if (p1 >= 0 && p2 >= 0 && p1 < l && p2 < l) {
                let substr = text.slice(p1, p2 + 1);
                let sum = 0;
                for (let char of substr) {
                    let num = char.charCodeAt();
                    sum += num;
                }
                console.log(sum);

            } else {
                console.log('Invalid indices!');
            }
        }




        index++;
        line = input[index];
    }
}

solve1(["ILikeSoftUni",
    "Replace I We",
    "Finish"]);

