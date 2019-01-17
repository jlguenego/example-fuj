'use strict';

const a = 3;

console.log('a', a);

hello();

function hello() {
    const b = 12;
    console.log('b', b);
    {
        const b = 5;
        console.log('b', b);
    }
    console.log('b', b);
    console.log('a', a);

}
