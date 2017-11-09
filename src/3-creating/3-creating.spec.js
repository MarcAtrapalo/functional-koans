import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
import {getOrderDelayed} from './3-creating';

const delayFor = (millis) => new Promise((resolve, reject) => {
    setTimeout(reject, millis);
});

describe('3. Creating', () => {
    it('getOrderDelayed should return an order', () => {
        return expect(getOrderDelayed(0, 100)).to.eventually.have.keys('id', 'lines', 'price');
    });

    it('getOrderDelayed should add a delay of 100ms', () => {
        const firstPromise = Promise.race([delayFor(300), getOrderDelayed(0, 100)]);
        return expect(firstPromise).to.be.rejected;
    });
});
