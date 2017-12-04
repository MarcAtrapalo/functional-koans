import {expect} from 'chai';
import curry from 'lodash/curry';

const FILL_ME_IN = undefined;

describe('3 - Immutability', () => {
    it('Values of variables should be immutable - use const wherever possible', () => {
        const test = [1, 12, undefined, 4, 8, 30, 5];

        const max2 = (a, b) => a > b ? a : b;
        const isDefined = a => typeof a !== 'undefined';

        const getMax = (arr, initialMax) => {
            if (arr.length === 0) {
                return {max: initialMax, error: false};
            } else {
                const {max: nextMax, error} = getMax(arr.slice(1), initialMax);
                return {
                    max: max2(nextMax, arr[0] || nextMax),
                    error: !isDefined(arr[0]) || error,
                };
            }
        };

        // Alternatively, though explained in later exercises:
        const max3 = curry(
            (a, b, c) => a > b
                ? (a > c ? a : max2(b, c))
                : max2(b, c)
        );
        const not = a => (...r) => !a(...r);

        const getMaxAlt = (arr, initialMax) => ({
            max: arr.reduce(max3(initialMax), initialMax),
            error: arr.filter(not(isDefined)).length > 0,
        });

        expect(getMax(test, 0).error).to.equal(true);
        expect(getMax(test, 0).max).to.equal(30);
    });

    it('Const does not protect objects from being modified', () => {
        const test = {a: 2, b: true};
        test.b = false;

        expect(test).to.deep.equal({a: 2, b: false});
    });

    it('Objects should be treated as immutable too', () => {
        const test = {a: 2, b: true, c: [32, 7, 11]};

        const orderArrayC = x => ({
            ...x,
            c: [...x.c].sort((a, b) => a - b) // Sort mutates the arguments, so we clone first
        });

        expect(orderArrayC(test)).to.deep.equal({a: 2, b: true, c: [7, 11, 32]});
        expect(test).to.deep.equal({a: 2, b: true, c: [32, 7, 11]});
    });
});