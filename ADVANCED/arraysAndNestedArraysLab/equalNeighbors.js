function solve(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let currVariable = arr[i][j];
           
            if (i < arr.length - 1) {
                
                let down = arr[i + 1][j];
                

                if (currVariable === down) {
                    count++;
                }
            }

            if(j < arr[i].length - 1){
                
                let right = arr[i][j + 1];

                if(currVariable === right){
                    count++;
                }
            }
        }
    }

    return count;
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)