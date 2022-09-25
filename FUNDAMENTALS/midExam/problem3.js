function solve(arr) {

    let books = arr[0].split('&');
    //console.log(books);
    let i = 1;
    let command = arr[i].split(' | ');
    //console.log(command);
    while (command != 'Done') {
        if (command.includes('Add Book')) {
            if (!books.includes(command[1])) {
                books.unshift(command[1]);
            }
        } else if (command.includes('Take Book')) {
            if (books.includes(command[1])) {
                let index = books.indexOf(command[1]);
                books.splice(index, 1);
            }
        } else if (command.includes('Swap Books')) {
            if (books.includes(command[1]) && books.includes(command[2])) {
                let bookOneToSwap = command[1]; //Anna Karenina 
                let bookTwoToSwap = command[2]; //Catch-22
                let indexBookOne = books.indexOf(bookOneToSwap); //Anna Karenina index in [books] array
                let temp = books[indexBookOne]; // temp = 'Anna Karenina'
                let indexBookTwo = books.indexOf(bookTwoToSwap);//Catch-22 index in [books] array
                books.splice(indexBookOne, 1, bookTwoToSwap);
                books.splice(indexBookTwo, 1, temp);
            }
        } else if (command.includes('Insert Book')) {
            if (!books.includes(command[1])) {
                books.push(command[1]);
            }
        } else if (command.includes('Check Book')) {
            if (Number(command[1]) >= 0 && Number(command[1]) <= books.length - 1) {
                //console.log(books.at(Number(command[1])));
                for (m = 0; m <= books.length; m++) {
                    if (m == Number(command[1])) {
                        console.log(books[m]);
                    }
                }
            }
        }
        i++;
        command = arr[i].split(' | ');
    }
    console.log(books.join(', '));
}

solve(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]);

