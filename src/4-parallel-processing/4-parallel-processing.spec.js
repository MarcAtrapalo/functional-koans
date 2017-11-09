import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
import {getFirstResolvedValue, getMaxResolvedValue, getItemsStocks} from './4-parallel-processing';

const promise1 = new Promise(r => setTimeout(() => r(-1), 50));
const promise2 = promise1.then(() => new Promise(r => setTimeout(() => r(1), 50)));
const promise3 = promise2.then(() => new Promise(r => setTimeout(() => r(5), 50)));

const promises = [promise1, promise2, promise3];

describe('4. Parallel Processing', () => {
    it('getFirstResolvedValue should return the resolved value of the first promise to resolve', () => {
        return expect(getFirstResolvedValue(promises)).to.eventually.equal(-1);
    });

    it('getMaxResolvedValue should return the maximum of the resolved values', () => {
        return expect(getMaxResolvedValue(promises)).to.eventually.equal(5);
    });

    it('getItemsStocks should return an array of {itemId, remainingStock} for each item in the order', () => {
        return expect(getItemsStocks(0)).to.eventually.deep.equal([
            {itemId: 0, remainingStock: 3},
            {itemId: 1, remainingStock: 20},
            {itemId: 2, remainingStock: 6},
        ])
    });
});
