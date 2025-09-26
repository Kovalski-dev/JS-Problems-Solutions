// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
// If there are no elements in the array, it should return -1.

Array.prototype.myLast = function () {
    if (!this?.length) return -1
    return this[this.length - 1]
}

let a = [1, 2]
let b = []

console.log(b.myLast())

// https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
