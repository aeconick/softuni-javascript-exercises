function cats(input) {
    class cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (const el of input) {
        splitEl = el.split(' ')
        let myCat = new cat(splitEl[0],splitEl[1]);
        myCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);