const { default: expect } = require('expect');
const myFizzBuzz = require('./myFizzBuzz');

describe('Testa função myFizzBuzz', () => {
    it('Retona com o número esperado, de acordo com o parametro recebido.', () => {
        expect(myFizzBuzz(30)).toBe("fizzbuzz");
        expect(myFizzBuzz(6)).toBe("fizz");
        expect(myFizzBuzz(10)).toBe("buzz");
        expect(myFizzBuzz(32)).toBe(32);
        expect(myFizzBuzz('Casa')).toBe(false);
    }); 
});