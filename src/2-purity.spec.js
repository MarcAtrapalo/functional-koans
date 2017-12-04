import {expect} from 'chai';
import * as sinon from 'sinon';

describe('2 - Purity', () => {
    it('In order to be pure, a function must be deterministic', () => {
        let counter = 0;
        const increment = (a) => {
            counter = counter + a;
            return counter;
        };
        expect(increment(1)).to.equal(increment(1));
    });

    it('In order to be pure, a function must also have no side effects', () => {
        let counter = 0;
        const increment = () => {
            counter++;
        };

        const counterAtBeginning = counter;
        increment();
        expect(counter).to.equal(counterAtBeginning);
    });

    it('Not all functions can be effect-free, but effects are better left apart', () => {
        const add = (a, b) => {
            console.log(a + b);
        };

        const consoleLog = sinon.spy(console, 'log');
        expect(add(1, 2)).to.equal(3);
        expect(consoleLog.called).to.be.false;
        console.log.restore();
    });
});
