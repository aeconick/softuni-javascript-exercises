function solution() {
    let result = {
        protein: 0,
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        apple() {
            this.carbohydrate -= 1;
            this.flavour -= 2;
        },
        lemonade() {
            this.carbohydrate -= 10;
            this.flavour -= 20;
        },
        burger() {
            this.carbohydrate -= 5;
            this.fat -= 7
            this.flavour -= 3;
        },
        eggs() {
            this.protein -= 5
            this.fat -= 1;
            this.flavour -= 1;
        },
        turkey() {
            this.protein -= 10;
            this.carbohydrate -= 10;
            this.fat -= 10;
            this.flavour -= 10;
        },
        report() {
 
            return `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`;
        }
 
 
    } //the closure is the result
 
    return function make(input) {
 
        if (input.includes('restock')) {
            let [_, microelement, quantity] = input.split(' ');
            quantity = Number(quantity)
            result[microelement] += quantity;
            return 'Success';
        } else if (input.includes('prepare')) {
            let [_, recipe, quantity] = input.split(' ');
            quantity = Number(quantity)
            for (let i = 0; i < quantity; i++) {
 
                result[recipe]();
                let entries = Object.entries(result);
                for (let [key, value] of entries) {
                        if (value < 0){
                            return `Error: not enough ${key} in stock`
                        };
                }
            }
            return 'Success';
 
        } else if (input.includes('report')) {
            let res = result['report']();
            return res;
        }
    }
}
 
 
 
let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager(('report')));