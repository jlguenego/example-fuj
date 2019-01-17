function Person(name) {
    this.name = name;
}

// A function is an object with a prototype property.

console.log('Person %O', Person);

Person.prototype.talk = function() {
    console.log('Hello, I am ', this.name);
}

const alice = new Person('Alice');
alice.talk();

const bob = new Person('Robert');
bob.talk();

console.log('alice.talk === bob.talk', alice.talk === bob.talk);
