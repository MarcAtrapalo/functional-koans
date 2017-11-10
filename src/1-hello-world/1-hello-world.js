import * as API from '../client';

export function helloWorld() {
    return new Promise(resolve =>
        resolve('Hello World!')
    );
}

export function helloYou(name) {
    return API.getHello()
        .then(hello => hello + name);
}
