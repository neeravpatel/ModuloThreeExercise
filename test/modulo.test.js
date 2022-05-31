const moduloThree = require('../index.js');

describe('ModuloThree', () => { 
    it('for input string "110" it should return output for state S0', () => {
        const inputString = '110';
        const result = moduloThree(inputString);
        expect(result).toBe('0');
    });

    it('for input string "1010" it should return output for state S1', () => {
        const inputString = '1010';
        const result = moduloThree(inputString);
        expect(result).toBe('1');
    });


    it('for input string "0000" it should return output for state S1', () => {
        const inputString = '0101';
        const result = moduloThree(inputString);
        expect(result).toBe('2');
    });
 })