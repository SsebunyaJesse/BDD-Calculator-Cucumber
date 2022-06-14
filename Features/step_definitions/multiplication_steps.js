const {Before, Given ,When ,Then} = require('@cucumber/cucumber')
const Calculator = require('../../CalculatorLibrary/calculator');
const assert = require('assert')
let calculators;
Given('the numbers multiplied are {int} and {int}', function (x,y) {
    calculator2 = new Calculator(x,y);
    
});


When('they are multiplied', function () {
    calculator2.multiply()
});

Then('should the multiplication result here be {int}', function (expected) {
    assert.equal(calculator2.getResult(),expected)
});
