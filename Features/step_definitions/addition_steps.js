const {Before, Given ,When ,Then} = require('@cucumber/cucumber')
const Calculator = require('../../CalculatorLibrary/calculator');
const assert = require('assert')
let calculator;
Given('the numbers {int} and {int}', function (x,y) {
    calculator = new Calculator(x,y);
    
});


When('they are added together', function () {
    calculator.add()
});

Then('should the result be {int}', function (expected) {
    assert.equal(calculator.getResult(),expected)
});
