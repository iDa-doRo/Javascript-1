// Exercise 1.7: Promises & Async/Await 
// Level 1 - Exercise 1
const hello = new Promise((resolve) => {
    console.log('Level 1 Exercise 1: Wait 2 seconds...');
    setTimeout(() => {
    resolve('Exercise 1: Hello World!');        
    }, 2000);
});

// Level 1 - Exercise 2
hello.then((message) => {
    console.log('Level 1 Exercise 2: then...', message);
}); 

// Level 1 - Exercise 3
function checkInput(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hello') {
                resolve('Correct!');
            } else {
                reject('Incorrect...');
            }
        }, 2000);
    });
}

// Level 1 - Exercise 4
async function printResult() {
    console.log('Level 1 Exercise 4: Wait 2 seconds...');
    const result = await hello; 
    console.log('Exercise 4: Reslut from Exercise 1 > ', result);
}
printResult();

// Level 2 - Exercise 5
async function printResultErrorFree() {
    console.log('Level 2 Exercise 5: Wait 2 seconds...');
    try {
    const result = await hello; 
    console.log('Exercise 5: Reslut Error Free: ', result);
} catch (error) {
    console.error('An error ocurred: ', error); 
    }
}
printResultErrorFree();

// Level 3 - Exercise 6
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('2 seconds, promise 1');
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('3 seconds, promise 2');
    }, 3000);
});

Promise.all([promise1, promise2])
.then((results) => {
    console.log('Level 3 Exercise 6: All resolved: ');
    console.log(results);
})
.catch((error) => {
    console.error('An error occurred: ', error);
});