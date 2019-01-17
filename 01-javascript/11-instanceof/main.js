// a instanceof b --> true if b.prototype === a.__proto__ || b.prototype === a.__proto__.__proto__ || ...

console.log('12 instanceof Object', 12 instanceof Object);
console.log('"asdf" instanceof Object', "asdf" instanceof Object);
console.log('false instanceof Object', false instanceof Object);

console.log('Object instanceof Object', Object instanceof Object);
console.log('Object instanceof Function', Object instanceof Function);
console.log('Function instanceof Function', Function instanceof Function);
console.log('Function instanceof Object', Function instanceof Object);
console.log('{} instanceof Object', {} instanceof Object);
console.log('{} instanceof Function', {} instanceof Function);
