class Hex {

    constructor(number) {
        this.value = Number(number);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${(this.value.toString(16)).toUpperCase()}`;
    }

    plus(input) {
        let result = (this.value + Number(input.valueOf()));
        return new Hex(result);
    }

    minus(input) {
        let result = (this.value - Number(input.valueOf()));
        return new Hex(result);
    }

    parse(text) {
        return parseInt(text, 16);
    }
}