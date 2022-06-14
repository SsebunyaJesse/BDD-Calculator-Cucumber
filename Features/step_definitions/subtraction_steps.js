const {Before, Given ,When ,Then} = require('@cucumber/cucumber')
const Calculator = require('../../CalculatorLibrary/calculator');
const assert = require('assert')
let calculators;
Given('the numbers subtracted {int} and {int}', function (x,y) {
    calculator2 = new Calculator(x,y);
    
});


When('they are subtracted', function () {
    calculator2.subtract()
});

Then('should the result subtracting be {int}', function (expected) {
    assert.equal(calculator2.getResult(),expected)
});
