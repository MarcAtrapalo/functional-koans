import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
import {probeForGetHello} from "../client";
import {helloWorld, helloYou} from './1-hello-world';

describe('1. Hello World', () => {
    it('helloWorld should return a promise', () => {
        expect(helloWorld()).to.be.an.instanceof(Promise);
    });

    it('helloWorld should resolve with a hello world', () => {
        return expect(helloWorld()).to.eventually.equal('Hello World!');
    });

    it('helloYou should return a promise', () => {
        expect(helloYou('Batman')).to.be.an.instanceof(Promise);
    });

    it('helloYou should resolve with "Hello {name}', () => {
        return expect(helloYou('Batman')).to.eventually.equal('Hello Batman');
    });

    it('helloYou should use API.getHello', () => {
        expect(probeForGetHello).to.be.ok;
    });

});
