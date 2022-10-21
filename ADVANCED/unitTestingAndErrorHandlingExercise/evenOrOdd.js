let { expect } = require('chai');

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('Is even or odd function tests', () => {
    it('should be undefined if number', () => {
        expect(isOddOrEven(2)).to.be.undefined;
    });

    it('should be undefined if array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('should be undefined if object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('should return odd if string is odd', () => {
        expect(isOddOrEven('hi!')).to.equal('odd');
    });

    it('should return even if string is even', () => {
        expect(isOddOrEven('hill')).to.equal('even');
    });
});
