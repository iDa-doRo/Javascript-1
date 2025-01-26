// Exercise 1.4: Rest & Spread operators 
// Level 1 - Exercise 1
const array1 = [1, 3, 5];
const array2 = [9, 0, 4];
const array3 = [...array1, ...array2];
console.log(`Level 1 Exercise 1: ${array3}`);

// Level 1 - Exercise 2
function addition(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
// Use:
console.log(`Level 1 Exercise 2: 1+2+3+4 = ${addition(1, 2, 3, 4)}`);

// Level 2 - Exercise 3
const object1 = {
    name: 'Ambrosia',
    jobTitle: 'Designer',
    age: 32
};
const object2 = { ...object1 };
object2.jobTitle = 'Full Stack Developer';
// Use: 
console.log('Level 2 Exercise 3: ');
console.log('object1: ', object1);
console.log('object2: ', object2);

// Level 2 - Exercise 4
const customArray = [ 2, 4, 6, 8, 10];
const [firstElement, secondElement, ...otherElements] = customArray;
// Use:
console.log('Level 2 Exercise 4: ');
console.log('First Element: ', firstElement);
console.log('Second Element: ', secondElement);
console.log('Remaining Elements: ', otherElements);

// Level 3 - Exercise 5
function showElements (a, b, c) {
    console.log('Level 3 Exercise 5: ')
    console.log('First: ', a);
    console.log('Second: ', b);
    console.log('Third: ', c);
}
const elementsArray = ['Whale', 'Dolphin', 'Shark'];
showElements(...elementsArray);

// Level 3 - Exercise 6
const person = {
name: 'Ambrosia',
age: 35
};
const role = {
    jobTitle: 'Full Stack Developer',
    city: 'Barcelona'
};
const fullDescription = { ...person, ...role};
// Use:
console.log('Level 3 Exercise 6: ');
console.log('Person: ', person);
console.log('Role: ', role);
console.log('Full Description: ', fullDescription);
