// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));


// Ver. 1
const twoPromises = async function (prs1, prs2) {
    let prs1Val = await prs1;
    let prs2Val = await prs2;

    return new Promise((resolve, reject) => {
        resolve(prs1Val + prs2Val);
    })
}


// Ver. 2
const twoPromisesV2 = async function (prs1, prs2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);

    return value1 + value2;
}

console.log('Result of two prms:', twoPromises(promise1, promise2).then(value => console.log('value :>> ', value)));

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/await