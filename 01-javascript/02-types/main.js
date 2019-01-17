console.log('Hello world!');

var a = undefined;
var b;
console.log('a', a);
console.log('b', b);

var c = true;
console.log('c', c);

var d = false;
console.log('d', d);

var e = 'hello'
console.log('e', e);

var f = null;
console.log('f', f);

var g = {toto: 23, titi: 'world'};
console.log('g', g);

// Do not use ==, instead use ===.

console.log('2 == "2"', 2 == '2');
console.log('2 === "2"', 2 === '2');

console.log('typeof a', typeof a);
console.log('typeof b', typeof b);
console.log('typeof c', typeof c);
console.log('typeof d', typeof d);
console.log('typeof e', typeof e);
console.log('typeof f', typeof f);
console.log('typeof g', typeof g);

// Number :
console.log('2/0', 2/0);
console.log('-2/0', -2/0);
console.log('0/0', 0/0);
console.log('Infinity === Infinity', Infinity === Infinity);
console.log('NaN === NaN', NaN === NaN);
console.log('null === {}', null === {});