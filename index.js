function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function nameFunction() {
        console.log('Return a named function.');
    }
}

function returnsAnAnonymousFunction () {
    //return () => console.log('Return an anonymous function.');
    return (() => console.log('Return an anonymous function.'));
}