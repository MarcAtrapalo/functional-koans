import {expect} from 'chai';

const FILL_ME_IN = undefined;

describe('4 - Filter, Map, and Reduce', () => {
    it('Filter returns a new array with the elements that fulfill a predicate', () => {
        const listOfIds = [3, 6, 19, 8, -1, 2, 13];

        const isOdd = x => x % 2 !== 0;
        const oddIds = listOfIds.filter(isOdd);

        expect(isOdd(2)).to.be.false;
        expect(isOdd(3)).to.be.true;
        expect(listOfIds).to.deep.equal([3, 6, 19, 8, -1, 2, 13]);
        expect(oddIds).to.deep.equal([3, 19, -1, 13]);
    });

    it('Find returns the first element that fulfills a predicate, or undefined if none', () => {
        const listOfIds = [3, 6, 19, 8, -1, 2, 13];

        const isInvalidId = x => x < 0;
        const containsInvalidIds = typeof (listOfIds.find(isInvalidId)) !== 'undefined';

        expect(isInvalidId(-1)).to.be.true;
        expect(isInvalidId(0)).to.be.false;
        expect(containsInvalidIds).to.be.true;
    });

    it('It can be useful to compute the inverse of predicates for filtering arrays', () => {
        const listOfIds = [3, 6, 19, 8, -1, 2, 13];

        const isOdd = (x, y) => x % 2 !== 0;
        const not = func =>
            (x) => !func(x);
        // const not = f => (...x) => !f(...x);
        const evenIds = listOfIds.filter(not(isOdd));

        expect(isOdd(3)).to.be.true;
        expect(not(isOdd)(3)).to.be.false;
        expect(evenIds).to.deep.equal([6, 8, 2]);
    });

    it('Map returns a new array with the same length, mapping each element as the mapper says', () => {
        const listOfIds = [3, 6, 19, 8, -1, 2, 13];

        const square = x => x * x;
        const squaredIds = listOfIds.map(square);

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

        const backendIds = developers.filter(d => d.role === 'backend' || d.role === 'fullstack').map(d => d.id);
        const theFullstack = developers.find(d => d.role === 'fullstack').id;

        expect(backendIds).to.deep.equal([1, 2, 3, 5]);
        expect(theFullstack).to.equal(3);
    });

    it('Reduce folds an array into a single value', () => {
        const amounts = [4, 21, 43, 11, 8];

        const total = amounts.reduce((sum, x) => sum + x);

        expect(total).to.equal(87);
    });

    it('Reduce can generate a new object', () => {
        const queryParams = ['type=name', 'id=42', 'q=test'];

        const params = queryParams.reduce((acc, queryParam) => {
            const [key, value] = queryParam.split('=');
            return {...acc, [key]: value};
        }, {});

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

        const develsByRole = developers.reduce((arr, d) => {
            const frontend = d.role === 'frontend' ? [d] : [];
            const backend = d.role === 'backend' ? [d] : [];
            const fullstack = d.role === 'fullstack' ? [d] : [];
            return [
                [...arr[0], ...backend],
                [...arr[1], ...fullstack],
                [...arr[2], ...frontend],
            ];
        }, [[], [], []]);

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

        const developerIdsByRole = developers.reduce((acc, dev) => ({
            ...acc,
            [dev.role]: [...acc[dev.role], dev.id],
        }), {backend: [], fullstack: [], frontend: []});

        expect(developerIdsByRole).to.deep.equal({
            backend: [1, 2, 5],
            fullstack: [3],
            frontend: [4, 6],
        });
    });
});
