// Exercise 1.2: Ternary Operators 
// Level 1 - Exercise 1
const canDrive = (age) => {
    if (age >= 18) {
        return('Congratulations! You can drive!');
    } else {
        return('Apologize, you cannot drive yet...');
    }
};
console.log('Level 1 Exercise 1: ');
console.log('If you are 36, '+`${canDrive(36)}`);
console.log('If you are 15, '+`${canDrive(15)}`);

// Level 1 - Exercise 2
const compareNums = (num1, num2) => {
    console.log('Level 1 Exercise 2: ');
    if (num1 > num2) {
        return (`${num1} is bigger.`);
    } else {
        return (`${num2} is bigger.`);
    }
};
console.log('Comparing 5 and 9: '+`${compareNums(5,9)}`);

// Level 2 - Exercise 3
// Determine if values in array are negative, positive, or equal 0. 
const arrayNums = [3, -7, 0];
const determined = [];
const determineNum = (numbers) => {
    console.log('Level 2 Exercise 3: ');
    numbers.forEach((number) => {
        if (number > 0) {
            determined.push(`${number} is positive.`);            
        }
        else if (number === 0) {
            determined.push(`${number} equals 0.`);  
            
        } else if (number < 0) {
            determined.push(`${number} is negative.`);             
        }    
    });    
};

// Iterates over array of values to find highest
const findHighest = (numbers) => {
    let highest = numbers[0];
    numbers.forEach((number) => {
        if (number > highest) {
            highest = number;
        }
    });
    return highest;
};
determineNum(arrayNums);
console.log(determined);
// 
const highestValue = findHighest(arrayNums);
console.log(`The highest value between them is: ${highestValue}`);

// Level 3 - Exercise 4
const numbersToCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenOrOdd = numbs => {
    numbs.forEach(number => {
        console.log(`${number} is ${number % 2 === 0 ? 'even' : 'odd'}`);
    });
};
evenOrOdd(numbersToCheck);