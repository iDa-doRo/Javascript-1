// Exercise 1.6: Array Loops
// Level 1 - Exercise 1
const names = ['Anna', 'Bernat', 'Clara'];
console.log('Level 1 Exercise 1: ');
const toPrint = names.forEach(name => console.log(name));

// Level 1 - Exercise 2
console.log('Level 1 Exercise 2: ');
for (const forename of names) {
    console.log(forename);
};

// Level 1 - Exercise 3
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(num => num %2 === 0);
console.log('Level 1 Exercise 3: ', even);

// Level 2 - Exercise 4
const obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };
console.log('Level 2 Exercise 4: ');
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
};

// Level 2 - Exercise 5
console.log('Level 2 Exercise 5: ');
for (const num of numbers) {
    if (num === 5) {
        break;
    }
    console.log(num);
};

// Level 3 - Exercise 6
console.log('Level 3 Exercise 6: ');
for (const[index, name] of names.entries()) {
    console.log(`Index: ${index}, Name: ${name}`);
};
