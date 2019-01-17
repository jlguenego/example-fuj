'use strict';

console.log('a', a);

var a = 3;

console.log('a', a);

hello();

function hello() {
    console.log('b', b);
    {
        var b = 5;
        console.log('b', b);
    }
    console.log('b', b);
}
