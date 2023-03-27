const {encode , decode } = require('./mapString')

describe('Testando as funções encode e decode', () => {
    it('Se decode foi definida', () => {
        expect(decode).toBeDefined();
    });
    it('Testando se decode é uma function', () =>{
        expect(typeof decode).toEqual('function');
    });
    it('Se o número 1 é convertido na vogal "a"', () => {
        expect(decode('h1v131n1')).toEqual('havaiana');
    });
    it('Se o número 2 é convertido na vogal "e"', () => {
        expect(decode('2l2v1d4r')).toEqual('elevador');
    });
    it('Se o número 3 é convertido na vogal "i"', () => {
        expect(decode('3n3c34')).toEqual('inicio');
    });
    it('Se o número 4 é convertido na vogal "o"', () => {
        expect(decode('4v4')).toEqual('ovo');
    });
    it('Se o número 5 é convertido na vogal "u"', () => {
        expect(decode('5r5b5')).toEqual('urubu');
    });
    it('Se decode foi definida', () => {
        expect(encode).toBeDefined();
    });
    it('Testando se decode é uma function', () => {
        expect(typeof encode).toEqual('function')
    });
    it('Se a vogal "a" é convertido no numero 1', () => {
        expect(encode('havaiana')).toEqual('h1v131n1');
    });
    it('Se a vogal "e" é convertido no numero 2', () => {
        expect(encode('elevador')).toEqual('2l2v1d4r');
    });
    it('Se a vogal "i" é convertido no numero 3', () => {
        expect(encode('inicio')).toEqual('3n3c34');
    });
    it('Se a vogal "o" é convertido no numero 4', () => {
        expect(encode('ovo')).toEqual('4v4');
    });
    it('Se a vogal "u" é convertido no numero 5', () => {
        expect(encode('urubu')).toEqual('5r5b5');
    });
});
