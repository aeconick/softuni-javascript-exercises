let {expect} = require('chai');

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('Invalid input format', () => {
    it('Should return undefined if inputs are floats', () => {
        expect(rgbToHexColor(2.5, 3.8, 4.5)).to.be.equal(undefined);
    });
    it('Should return undefined if inputs are negative', () => {
        expect(rgbToHexColor(2, -2, -1)).to.be.equal(undefined);
    });
    it('Should return undefined if inputs are above 255', () => {
        expect(rgbToHexColor(255, 255, 256)).to.be.equal(undefined);
    });
    it('Should return undefined if one input missing', () => {
        expect(rgbToHexColor(255, 255)).to.be.equal(undefined);
    });
    it('Should return undefined if no input', () => {
        expect(rgbToHexColor()).to.be.equal(undefined);
    });
    it('Should return undefined if input is string', () => {
        expect(rgbToHexColor('0', '240', '15')).to.be.equal(undefined);
    });
});

describe('Valid input format', () => {
    it('Should work if inputs are integers', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it('Should work with floating point integers', () => {
        expect(rgbToHexColor(0.0, 0.0, 0.0)).to.be.equal('#000000');
    });
});
