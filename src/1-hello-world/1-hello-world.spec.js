import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
import helloWorld from './1-hello-world';

describe('1. Hello World', () => {
    it('should return a promise', () => {
        expect(helloWorld()).to.be.an.instanceof(Promise);
    });

    it('should resolve with a hello world', () => {
        return expect(helloWorld()).to.eventually.equal('Hello World!');
    });

});
