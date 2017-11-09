import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
import {order, brokenOrder, items} from '../client';
import {alternativeGetRemainingStockOrReject as getRemainingStockOrReject, getRemainingStockOrCrash} from './5-error-handling';

describe('5. Error Handling', () => {
    it('getRemainingStockOrCrash should return the remaining stock after the order', () => {
        return expect(getRemainingStockOrCrash(order, items[0])).to.equal(3);
    });

    it('getRemainingStockOrCrash should throw an exception with message "Item not in order" if item was not found in order', () => {
        return expect(getRemainingStockOrCrash.bind(null, brokenOrder, items[0])).to.throw('Item not in order');
    });

    it('getRemainingStockOrReject should return a Promise', () => {
        return expect(getRemainingStockOrReject(order, items[0])).to.be.an.instanceof(Promise);
    });

    it('getRemainingStockOrReject should return the remaining stock after the order', () => {
        return expect(getRemainingStockOrReject(order, items[0])).to.eventually.equal(3);
    });

    it('getRemainingStockOrReject should reject if item or order are undefined. Note: Throwing an exception has the same effect', () => {
        return expect(getRemainingStockOrReject(undefined, undefined)).to.be.rejected;
    });

    it('getRemainingStockOrReject should reject with "Line not found" if order was not found', () => {
        return expect(getRemainingStockOrReject(brokenOrder, items[0])).to.be.rejectedWith('Line not found');
    });
});
