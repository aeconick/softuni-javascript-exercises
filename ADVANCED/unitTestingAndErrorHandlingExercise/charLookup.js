let { expect } = require('chai');

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Tests for lookupChar function', () => {
    it('check whether first parameter type is valid', () => {
        expect(lookupChar(0, 0)).to.equal(undefined);
    });
    it('check whether second parameter type is valid', () => {
        expect(lookupChar('hello', 'test')).to.equal(undefined);
    });
    it('check whether second parameter is valid integer', () => {
        expect(lookupChar('hello', 0.1)).to.equal(undefined);
    })
    it('check value with index bigger than string length', () => {
        expect(lookupChar('hi', 10)).to.equal('Incorrect index');
    });
    it('check value with negative index', () => {
        expect(lookupChar('hi', -10)).to.equal('Incorrect index');
    });
    it('check value with valid parameters', () => {
        expect(lookupChar('hello', 1)).to.equal('e');
    });
});