import {expect} from 'chai';
import flow from 'lodash/flow';

const FILL_ME_IN = undefined;

describe('6 - Higher Order Functions', () => {
    it('A function that takes a function and returns a new function is called HOF', () => {
        const not = FILL_ME_IN;

        expect(not(x => x > 10)(15)).to.be.false;
    });

    it('The most classical HOF is compose. compose(f, g)(x) == f(g(x))', () => {
        const compose = FILL_ME_IN;

        const addOne = x => x + 1;
        const timesTwo = x => x * 2;
        expect(compose(addOne, timesTwo)(1)).to.equal(3);
    });

    it('A common way to use compose for readability is composeRight, or order-reversed compose', () => {
        const composeRight = flow;
        const addOne = x => x + 1;
        const timesTwo = x => x * 2;

        expect(FILL_ME_IN).to.equal(3);
    });

    it('Function composition and other HOFs can be useful to achieve Readability Level AWESOME', () => {
        const developers = [
            {id: 1, role: 'backend', usesHalfTheLibraries: true},
            {id: 2, role: 'backend', usesHalfTheLibraries: false},
            {id: 3, role: 'fullstack', usesHalfTheLibraries: false},
            {id: 4, role: 'frontend', usesHalfTheLibraries: true},
            {id: 5, role: 'backend', usesHalfTheLibraries: true},
            {id: 6, role: 'frontend', usesHalfTheLibraries: false},
        ];

        const librariesNeeded = {
            backend: 15,
            frontend: 999999,
            fullstack: 1000014,
        };

        const usesHalfTheLibraries = FILL_ME_IN;    // dev => bool
        const half = FILL_ME_IN;                    // number => number
        const identity = FILL_ME_IN;                // number => number
        const when = FILL_ME_IN;                    // (condition, thenFunc, elseFunc) => dev => func
        const librariesHeNeeds = FILL_ME_IN;        // dev => number
        const totalSum = FILL_ME_IN;                // (acc, number) => acc
        const sumToMean = FILL_ME_IN;               // {num, total} => number

        const librariesUsedByDeveloper = when(usesHalfTheLibraries, half, identity);
        const toLibraries = (developer) => flow(librariesHeNeeds, librariesUsedByDeveloper(developer));
        const meanLibrariesUsed = developers.map(toLibraries).reduce(totalSum).map(sumToMean);
    });
});
