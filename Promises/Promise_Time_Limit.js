// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function.
// fn takes arguments provided to the time limited function.
// The time limited function should follow these rules:
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

const timeLimitPromises = function (fn, t) {
    return async (...args) => {
        const promise = fn(...args)

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        })

        return Promise.race([promise, timeoutPromise])
    }
}

const functionToTimeLimit = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
}

let limit = timeLimitPromises(functionToTimeLimit, 20)
limit(4).then(value => console.log('Result:', value));

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Closures