var o = {};
console.log('o', o);

var p = {
    hello: 1234,
    '!@#$': 'hey'
};
console.log('p', p);

// modify the prototype
// way #1
o.__proto__ = null;
console.log('o.__proto__', o.__proto__);

// way #2
Object.setPrototypeOf(o, p);

// adding property
o.a = 3;
o.b = false;

// remove property
delete o.a;

console.log('o.__proto__', o.__proto__);
console.log('o', o);
console.log('o.b', o.b);
console.log('o.hello', o.hello);
console.log('o["!@#$"]', o["!@#$"]);
console.log('o.toString', o.toString);
console.log('o.toString()', o.toString());
console.log('o.c', o.c);

