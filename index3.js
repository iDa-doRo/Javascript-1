// Exercise 1.3: Callbacks 
// Level 1 - Exercise 1
const process = (number, callback) => {
    callback(number);
};
// Use: 
const callNumber = num => {
    console.log(`Level 1 Exercise 1: Number ${num}`);
};
process(36, callNumber);

// Level 1 - Exercise 2
const calculator = (num1, num2, callback) => {
    return callback(num1, num2);
};
const add = (a, b) => a+b; //Adds two values
const result = calculator(6, 8, add);
console.log(`Level 1 Exercise 2: 6 + 8 = ${result}`);

// Level 2 - Exercise 3
const waitAndHi = (forename, callback) => {
    console.log('Level 2 Exercise 3: Wait 2 seconds...');
    setTimeout(() => {
        callback(forename);
    }, 2000); // 2 seconds
};
// Use: 
const sayHi = forename => {
    console.log(`Hello ${forename}`);
};
waitAndHi('Ambrosia', sayHi);

// Level 2 - Exercise 4
const processElements = (array, callback) => {
    console.log('Level 2 Exercise 4: ')
    array.forEach(element => callback(element));
};
// Use: 
const logElements = element => {
    console.log(`Element: ${element}`);
};
processElements([25, 36, 42, 89], logElements);

// Level 3 - Exercise 5
const processString = (str, callback) => {
    const capitalString = str.toUpperCase();
    callback(capitalString);
};
// Use:
const logString = capitalString => {
    console.log(`Level 3 Exercise 5: it academy to upper case: ${capitalString}`);
};
processString('it academy', logString);
