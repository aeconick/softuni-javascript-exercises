function solve(arr) {
    let coffees = arr[0].split(' '); //['Arabica', 'Liberica', 'Charrieriana', 'Magnistipula', 'Robusta', 'BulkCoffee', 'StrongCoffee']
    let numberOfCommands = Number(arr[1]);

    for(i=2;i<=numberOfCommands+1;i++){
        let command = arr[i].split(' ');
        //console.log(command);
        if (command.includes('Include')){
            coffees.push(command[1]);
        } else if (command.includes('Remove')){
            if(command.includes('first')){
                if(Number(command[2]<=coffees.length)){
                    coffees.splice(0,Number(command[2]));
                }
            } else if(command.includes('last')){
                if(Number(command[2]<=coffees.length)){
                    for(j=1;j<=Number(command[2]);j++){
                        coffees.pop();
                    }
                }
            }
        } else if(command.includes('Prefer')){
            if(Number(command[1])<=coffees.length-1 && Number(command[2])<=coffees.length-1){
                let temp = coffees[Number(command[1])];
                coffees.splice(Number(command[1]),1,coffees[Number(command[2])]);
                coffees.splice(Number(command[2]),1,temp);
            }
        } else if(command.includes('Reverse')){
            coffees.reverse();
        }
    }
    console.log('Coffees:');
    console.log(coffees.join(' '));
}

solve(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
"3",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 4 1"]);


