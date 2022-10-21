let { assert, expect } = require('chai');

function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

describe('Outer function should return object', () => {
    it('should return object', () => {
        assert.isObject(createCalculator());
    });
    it('should return object with property add', () => {
        expect(createCalculator()).to.have.property('add');
    });
    it('should return object with property subtract', () => {
        expect(createCalculator()).to.have.property('subtract');
    });
    it('should return object with property get', () => {
        expect(createCalculator()).to.have.property('get');
    });
});

describe('Add', () => {
    it('should return the correct result', () => {
        let operations = createCalculator();
        operations['add']('50');
        operations['add'](100);
        expect(operations['get']()).to.be.equal(150)
    });
});

describe('Subtract', () => {
    it('should return the correct result', () => {
        let operations = createCalculator();
        operations['add']('50');
        operations['add'](100);
        operations['subtract'](20);
        expect(operations['get']()).to.be.equal(130)
    });
});