// Is both objects keys similar

const o1 = { name: 'name', age: 'age' }
const o2 = { name: 'name1', age: 'age' }

const isEqual = (obj1, obj2) => {
    const objKeys1 = Object.keys(obj1)
    const objKeys2 = Object.keys(obj2)

    for (let key of objKeys1) {

        if (!!objKeys2.find((item) => item === key)) {
            return true
        }

        return false
    }


}

console.log(isEqual(o1, o2))

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object