function Person(name, age) {
    this.name = name;
    this.age = age;
    this.talk = function() {
        console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
    }
}

const alice = new Person('Alice', 23);
alice.talk();
const bob = new Person('Bob', 31);
bob.talk();

// what is doing exactly the "new" operator ?
const charly = {};
charly.__proto__ = Person.prototype;
Person.bind(charly)('Charly', 45);
charly.talk();

// or shorter
const daniel = Object.create(Person.prototype);
Person.bind(daniel)('Daniel', 67);
daniel.talk();


// oups... each instance has its own copy of the talk method.
console.log('daniel.talk === charly.talk', daniel.talk === charly.talk);
