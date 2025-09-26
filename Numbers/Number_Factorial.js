const numberValue = 5;

const numToFactorial = (num) => {

    return num * numToFactorial(num - 1)
}

console.log('Factorial:', numToFactorial(5));