// FILEPATH: /workspaces/skills-copilot-codespaces-vscode-jkc/test.js
const Calculator = require('./Calculator'); // Assuming Calculator is in a file named Calculator.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add() should correctly add two numbers', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('subtract() should correctly subtract two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('multiply() should correctly multiply two numbers', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
    });

    test('divide() should correctly divide two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });

    test('divide() should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });
});