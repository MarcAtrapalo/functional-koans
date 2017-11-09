import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
import {getItemRemainingStock, getOrderPrice} from './2-chaining';

describe('2. Chaining', () => {
    it('getOrderPrice should return the formatted order price as "{amount} {currency}"', () => {
        return expect(getOrderPrice(0)).to.eventually.equal('10 €');
    });

    it('getOrderPrice should return zero if the order is not found', () => {
        return expect(getOrderPrice(2)).to.eventually.equal('0');
    });

    it.only('getItemRemainingStock should return current item stock minus ordered amount', () => {
        return expect(getItemRemainingStock(0, 0)).to.eventually.equal(3);
    });
});
