import {expect} from 'chai';
const FILL_ME_IN = undefined;

describe.only('1 - Functions as first class citizens', () => {
    it('Functions can be assigned to variables', () => {
        // Int and Strings are first class objects in a language and can
        // be assigned to var. Similary functions can be assigned to vars

        const multiply = FILL_ME_IN;

        expect(multiply(2,3)).to.equal(6);
    });

    it('Functions can be passed as argument to another function', () => {
        const add = (a, b) => a + b;
        const multiply = (a, b) => a * b;

        const calculate = FILL_ME_IN;

        expect(calculate(add, 5, 10)).to.equal(15);
        expect(calculate(multiply, 5, 10)).to.equal(50);
    });

    it('Functions can be returned from other functions', () => {
        const greeter = FILL_ME_IN;

        const hello = greeter();
        expect(hello('Logan')).to.equal('Hello Logan');
    });

    it('Predicates are functions that return a boolean value', () => {
        const isEven = FILL_ME_IN;

        expect(isEven(4)).to.be.true;
        expect(isEven(3)).to.be.false;
        expect(isEven('hello')).to.be.false;
    });
});