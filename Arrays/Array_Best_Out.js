// Write a function to find the best purchase/sale option. 
// Need to find the largest gap between the purchase and the sale.

const course = [130, 100, 90, 95, 97, 80, 85, 100, 95, 81, 125, 70]

const findBestCoursesToOut = (arr) => {
    let maxDiff = 0;
    let result = []

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]
        console.log('i :>> ', i);

        for (let j = i; j < arr.length; j++) {
            const maxCurrent = arr[j]
            const diff = maxCurrent - current

            if (diff > maxDiff) {
                maxDiff = diff;
                result = [current, maxCurrent]
            }
        }
    }

    return result
}

console.log('Best buy/sell:', findBestCoursesToOut(course));
