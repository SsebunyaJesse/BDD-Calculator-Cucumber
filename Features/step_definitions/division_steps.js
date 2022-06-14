const {Before, Given ,When ,Then} = require('@cucumber/cucumber')
const Calculator = require('../../CalculatorLibrary/calculator');
const assert = require('assert')
let calculators;
Given('the numbers divided {int} and {int}', function (x,y) {
    calculator2 = new Calculator(x,y);
    
});


When('they are divided amongst themselves', function () {
    calculator2.divide()
});

Then('should the answer be {int}', function (expected) {
    assert.equal(calculator2.getResult(),expected)
});
