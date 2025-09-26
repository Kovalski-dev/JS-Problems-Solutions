// Emplement Promise.all  

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

Promise.prototype.customAll = (promises) => {
    return new Promise((resolve, reject) => {
        let results = [];
        let count = 0;

        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((value => {
                results[i] = value
                count++
                if (count === promises.length) {
                    resolve(results)
                }
            }))
                .catch(err => console.log(err))
        }
    })
}

Promise.customAll([p1, p2]).then(values => console.log(values))

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Closures
// https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes