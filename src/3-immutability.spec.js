import {expect} from 'chai';

const FILL_ME_IN = undefined;

describe('3 - Immutability', () => {
    it('Values of variables should be immutable - use const wherever possible', () => {
        let test = [1, 12, undefined, 4, 8, 30, 5];
        let error = false;

        function getMax(arr) {
            let max = test[0];
            try {
                for (let i = 1; i < test.length; i++) {
                    if (typeof test[i] === 'undefined') throw new Error('undefined values in array');
                    if (test[i] > max) max = test[i];
                }
            }
            catch (e) {
                error = true;
            }
            return max;
        }

        expect(getMax(test)).to.equal(30);
        expect(error).to.equal(true);
    });

    it('Const does not protect objects from being modified', () => {
        const test = {a: 2, b: true};
        test.b = false;

        expect(test).to.deep.equal(FILL_ME_IN);
    });

    it('Objects should be treated as immutable too', () => {
        const test = {a: 2, b: true, c: [32, 7, 11]};

        function orderArrayC(x) {
            x.c = x.c.sort();
            return x;
        }

        expect(orderArrayC(test)).to.deep.equal({a: 2, b: true, c: [7, 11, 32]});
        expect(test).to.deep.equal({a: 2, b: true, c: [32, 7, 11]});
    });
});