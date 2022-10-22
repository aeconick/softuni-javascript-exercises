const chooseYourCar = require('./chooseYourCar');
const { expect } = require('chai');

describe('tests for chooseYourCar', () => {
    describe('tests for choosingType function', () => {
        it('should throw an error if the year is less than 1900', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Pink', 1450)).to.throw(Error);
        });
        it('should throw an error if the year is more than 2022', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Pink', 2025)).to.throw(Error)(Error);
        });
        it('should throw an error if the value of the string type is different from "Sedan', () => {
            expect(chooseYourCar.choosingType('Pickup', 'Pink', 2019)).to.throw(Error);
        });
        it('should return string with the correct output for year above 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Pink', 2012)).to.equal('This Pink Sedan meets the requirements, that you have.');
        });
        it('should return string with the correct output for year below 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Pink', 2007)).to.equal('This Sedan is too old for you, especially with that Pink color.');
        });
    });
    describe('tests for brandName function', () => {
        it('should throw an error if passed brands parameter is not an array', () => {
            expect(chooseYourCar.brandName('lqlq', 5)).to.throw;
        });
        it('should throw an error if the index parameter is not a number', () => {
            expect(chooseYourCar.brandName(['BMW', 'AUDI'], 'lqlq')).to.throw(Error);
        });
        it('should throw an error if passed brands parameter is not an array', () => {
            expect(chooseYourCar.brandName(['BMW', 'AUDI'], 5)).to.throw(Error);
        });
        it('should return the updated cars as a string', () => {
            expect(chooseYourCar.brandName(['BMW', 'AUDI', 'MERCEDES'], 1)).to.equal('BMW, MERCEDES');
        });
        it('throw error with 0 as second parameter', () => {
            expect(chooseYourCar.brandName([], 0)).to.throw(Error);
        });
    });
    describe('tests for carFuelConsumption function', () => {
        it('should throw an error if parameter one is not a number', () => {
            expect(chooseYourCar.carFuelConsumption('lqlqlq', 9)).to.throw(Error);
        });
        it('should throw an error if parameter two is not a number', () => {
            expect(chooseYourCar.carFuelConsumption(15, 'lqlqlq')).to.throw(Error);
        });
        it('should throw an error if both parameters are not number', () => {
            expect(chooseYourCar.carFuelConsumption('lqlqlq', 'gugugaga')).to.throw(Error);
        });
        it('should throw an error if parameter one is a negative number', () => {
            expect(chooseYourCar.carFuelConsumption(-15, 9)).to.throw(Error);
        });
        it('should throw an error if parameter two is a negative number', () => {
            expect(chooseYourCar.carFuelConsumption(15, -9)).to.throw(Error);
        });
        it('should throw an error if both parameters are negative numbers', () => {
            expect(chooseYourCar.carFuelConsumption(-15, -9)).to.throw(Error);
        });
        it('should return output string if both parameters are correct', () => {
            expect(chooseYourCar.carFuelConsumption(15, 9)).to.equal('The car burns too much fuel - 60.00 liters!');
        });
        it('should throw an error if one parameter is 0', () => {
            expect(chooseYourCar.carFuelConsumption(15, 0)).to.throw(Error);
        });
        it('should throw an error if one parameter is 0', () => {
            expect(chooseYourCar.carFuelConsumption(0, 9)).to.throw(Error);
        });
        it('should throw an error if both parameters are 0', () => {
            expect(chooseYourCar.carFuelConsumption(0, 0)).to.throw(Error);
        });
    });
});


