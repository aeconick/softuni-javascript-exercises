const { expect } = require('chai')

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

describe('Sum tests', () => {
    it('should return correct sum', () => {
        expect(sum([1, 2, 3, 4])).to.be.equal(10);
    });
    it('should work with floating point numbers', () => {
        expect(sum([1.6, 1.5])).to.be.equal(3.1);
    });
    it('should work with negative numbers', () => {
        expect(sum([-1, -1])).to.be.equal(-2);
    });
    it('should work with one number', () => {
        expect(sum([1])).to.be.equal(1);
    });
    it('should work with empty array  ', () => {
        expect(sum([])).to.be.equal(0);
    });
});
