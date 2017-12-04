import {expect} from 'chai';

const FILL_ME_IN = undefined;

describe('4 - Filter, Map, and Reduce', () => {
    it('Filter returns a new array with the elements that fulfill a predicate', () => {
        const listOfIds = [3, 6, 19, 8, -1, 2, 13];

        const isOdd = FILL_ME_IN;
        const oddIds = FILL_ME_IN;

        expect(isOdd(2)).to.be.false;
        expect(isOdd(3)).to.be.true;
        expect(listOfIds).to.deep.equal([3, 6, 19, 8, -1, 2, 13]);
        expect(oddIds).to.deep.equal([3, 19, -1, 13]);
    });

    it('Find returns the first element that fulfills a predicate, or undefined if none', () => {
        const listOfIds = [3, 6, 19, 8, -1, 2, 13];

        const isInvalidId = FILL_ME_IN;
        const containsInvalidIds = FILL_ME_IN;

        expect(isInvalidId(-1)).to.be.true;
        expect(isInvalidId(0)).to.be.false;
        expect(containsInvalidIds).to.be.true;
    });

    it('It can be useful to compute the inverse of predicates for filtering arrays', () => {
        const listOfIds = [3, 6, 19, 8, -1, 2, 13];

        const isOdd = FILL_ME_IN;
        const not = FILL_ME_IN;
        const evenIds = FILL_ME_IN;

        expect(isOdd(3)).to.be.true;
        expect(not(isOdd)(3)).to.be.false;
        expect(evenIds).to.deep.equal([6, 8, 2]);
    });

    it('Map returns a new array with the same length, mapping each element as the mapper says', () => {
        const listOfIds = [3, 6, 19, 8, -1, 2, 13];

        const square = FILL_ME_IN;
        const squaredIds = FILL_ME_IN;

        expect(square(2)).to.equal(4);
        expect(squaredIds).to.deep.equal([9, 36, 361, 64, 1, 4, 169]);
    });

    it('Map, Filter and Find can be chained', () => {
        const developers = [
            {id: 1, role: 'backend'},
            {id: 2, role: 'backend'},
            {id: 3, role: 'fullstack'},
            {id: 4, role: 'frontend'},
            {id: 5, role: 'backend'},
            {id: 6, role: 'frontend'},
        ];

        const backendIds = FILL_ME_IN;
        const theFullstack = FILL_ME_IN;

        expect(backendIds).to.deep.equal([1, 2, 3, 5]);
        expect(theFullstack).to.equal(3);
    });

    it('Reduce folds an array into a single value', () => {
        const amounts = [4, 21, 43, 11, 8];

        const total = FILL_ME_IN;

        expect(total).to.equal(87);
    });

    it('Reduce can generate a new object', () => {
        const queryParams = ['type=name', 'id=42', 'q=test'];

        const params = FILL_ME_IN;

        expect(params).to.deep.equal({type: 'name', id: '42', q: 'test'});
    });

    it('Reduce can generate a new array', () => {
        const developers = [
            {id: 1, role: 'backend'},
            {id: 2, role: 'backend'},
            {id: 3, role: 'fullstack'},
            {id: 4, role: 'frontend'},
            {id: 5, role: 'backend'},
            {id: 6, role: 'frontend'},
        ];

        const develsByRole = FILL_ME_IN;

        expect(develsByRole).to.deep.equal([
            [{id: 1, role: 'backend'}, {id: 2, role: 'backend'}, {id: 5, role: 'backend'}],
            [{id: 3, role: 'fullstack'}],
            [{id: 4, role: 'frontend'}, {id: 6, role: 'frontend'}],
        ]);
    });

    it('Reduce can also be chained', () => {
        const developers = [
            {id: 1, role: 'backend'},
            {id: 2, role: 'backend'},
            {id: 3, role: 'fullstack'},
            {id: 4, role: 'frontend'},
            {id: 5, role: 'backend'},
            {id: 6, role: 'frontend'},
        ];

        const developerIdsByRole = FILL_ME_IN;

        expect(developerIdsByRole).to.deep.equal({
            backend: [1, 2, 5],
            fullstack: [3],
            frontend: [4, 6],
        });
    });
});
