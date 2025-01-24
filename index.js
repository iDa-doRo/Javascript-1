// Exercise 1.1: Arrow Functions
// Level 1 - Exercise 1
const addNums = (a,b) => a+b;
console.log('Level 1 Exercise 1: ' + addNums(3, 9)); //expect 12

// Level 1 - Exercise 2
const randomNumber = () => {
    return Math.floor(Math.random() * 101);
};
console.log('Level 1 Exercise 2: ' + randomNumber());

// Level 1 - Exercise 3
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet = () => {
        console.log('Level 1 Exercise 3: '+ `Hi there ${this.name}`);
    }
}
const trialPerson = new Person("Ambrosia");
trialPerson.greet(); //expect: 'Hit there Ambrosia'

// Level 2 - Exercise 4
const printNumbers = (numbers) => {
    console.log('Level 2 Exercise 4: ');
    for (let number of numbers) {
        console.log(number);
    }
};
const arrayNums = [2,4,6,8,0];
printNumbers(arrayNums);

// Level 3 - Exercise 5
const setTimeOut = () => {
    console.log('Level 3 Exercise 5: wait...');
    setTimeout(() => {
        console.log('3 seconds have past!');
    }, 3000);
};
setTimeOut();