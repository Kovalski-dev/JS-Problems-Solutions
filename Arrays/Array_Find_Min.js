const arrOfNum = [10, 5, 1, 4, 5, 7, 1, 25, 55, 33]

const findMin = (arr) => {
    let result

    for (let i = 0; i < arr.length; i++) {
        if (result > arr[i] || result === undefined) result = arr[i]
    }

    return result
}

console.log('Min num:', findMin(arrOfNum));