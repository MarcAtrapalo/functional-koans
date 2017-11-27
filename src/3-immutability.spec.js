import {expect} from 'chai';

const FILL_ME_IN = undefined;

describe('3 - Immutability', () => {
    it('Values of variables should be immutable - use const wherever possible', () => {
        let x = [];



        expect(x).to.equal(42);
    });

    it('Const does not protect objects from being modified', () => {
        const x = {a: 2, b: true};
        x.b = false;

        expect(x).to.deep.equal(FILL_ME_IN);
    });

    it('Objects should be treated as immutable too');
});