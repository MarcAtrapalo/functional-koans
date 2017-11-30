import {expect} from 'chai';
import curry from 'lodash/curry';

const FILL_ME_IN = undefined;

describe('5 - Partial Application', () => {
    it('A function can return another function', () => {
        const f = () => {
            return FILL_ME_IN;
        };

        expect(f()()).to.equal('hello world');
    });

    it('The function inside can access the arguments of the one in the outside. That is called closure', () => {
        const add = (a) => {
            return FILL_ME_IN;
        };

        expect(add(4)(6)).to.equal(10);
    });

    it('A function works the same way whether if it takes all arguments at once, or one by one', () => {
        const f = (a, b, c) => a + b + c;

        const g = FILL_ME_IN;

        expect(
            f('he', 'll', 'o')
        ).to.equal(
            g('he')('ll')('o')
        );
    });

    it('Partial application is giving some arguments to a function and getting in return a function that expects the rest of the arguments', () => {
        const add = (a) => (b) => (c) => a + b + c;
        const add5 = FILL_ME_IN;
        const add5and4 = FILL_ME_IN;

        expect(add5(3)(2)).to.equal(10);
        expect(add5and4(10)).to.equal(19);
    });

    it('Partial application is useful for filters', () => {
        const nums = [2, 5, 11, 32, 4, 7];

        const higherThan = FILL_ME_IN;

        expect(nums.filter(higherThan(10))).to.deep.equal([11, 32]);
    });

    it('Partial application is also useful for maps', () => {
        const developers = [
            {id: 1, role: 'backend'},
            {id: 2, role: 'backend'},
            {id: 3, role: 'fullstack'},
            {id: 4, role: 'frontend'},
            {id: 5, role: 'backend'},
            {id: 6, role: 'frontend'},
        ];

        const developerTo = FILL_ME_IN;

        expect(developers.map(developerTo('id'))).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('Declaring functions this way is painful. We can curry them instead', () => {
        const add = curry(FILL_ME_IN);

        expect(
            add(2, 3, 8)
        ).to.equal(
            add(2, 3)(8)
        ).and.to.equal(
            add(2)(3, 8)
        ).and.to.equal(
            add(2)(3)(8)
        );
    });
});
