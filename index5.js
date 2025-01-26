// Exercise 1.5: Array Transformations
// Level 1 - Exercise 1
const arrayNumbers = [1, 2, 3, 4];
const square = arrayNumbers.map(num => num ** 2);
console.log('Level 1 Exercise 1: ', square);

// Level 1 - Exercise 2
const evenNumbers = arrayNumbers.filter(num => num %2 === 0);
console.log('Level 1 Exercise 2: ',evenNumbers);

// Level 1 - Exercise 3
const customArray = [1, 10, 8, 11];
const firstBigger = customArray.find(num => num > 10);
console.log('Level 1 Exercise 3: ',firstBigger);

// Level 1 - Exercise 4
const myArray = [13, 7, 8, 21];
const totalSum = myArray.reduce((collect, current) => collect + current, 0);
console.log('Level 1 Exercise 4: ',totalSum);

// Level 2 - Exercise 5
const arrayMotion = arr => arr.filter(num => num >= 10).map(num => num * 2).reduce((sum, num) => sum + num, 0);
const theArray = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];
const totalOps = arrayMotion(theArray);
console.log('Level 2 Exercise 5: ',totalOps);

// Level 3 - Exercise 6
const numbers = [11, 12, 13, 14];
const allGreater = numbers.every(num => num > 10);
const someGreater = numbers.some(num => num > 10);
console.log('Level 3 Exercise 6: Are all greater than 10?: ', allGreater, ', are some of them greater than 10?: ' );
console.log(someGreater);