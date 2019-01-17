'use strict';

console.log('this global', this);

function hello(name) {
    console.log();
    console.log('hello', name, '!', 'this local', this);
}

hello('JL');

var a = { tutu: 32 };

// 3 ways to customize this
hello.apply(a, ['JL']);
hello.call(a, 'JLG');
hello.bind(a)('Jean-Louis');

var obj = {
    hello: hello,
    titi: 34
};
obj.hello('Suzana');

var aaa = 'toto';

// Browser: window === this
if (this.window === this) {
    console.log('we are in a browser API.');
    console.log('this.aaa', this.aaa);
    console.log('window.aaa', window.aaa);
} else {
    console.log('we are in a node API.');
}
