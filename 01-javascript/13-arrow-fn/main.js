const power2 = x => x * x;
console.log('power2(5)', power2(5));

const hello = (name, age) => {
    console.log(`Hello, my name is ${name}...`);
    console.log(`...and I am ${age} old.`);
}
hello('Alice', 21);

// avantages:
// 1) shorter syntax
// 2) this is the outside this.
