const boxes = ['a', 'b', 'c', 'd', 'e']

function logAllPairs(array: Array<any>): void {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

function printNumbersThenPairSums(numbers: Array<number>): void {
    console.log('These are the numbers')
    numbers.forEach(function(number) {
        console.log(number)
    })

    console.log('and these are their sums')
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber)
        })
    })
}

logAllPairs(boxes) // O(n^2)

printNumbersThenPairSums([1,2,3,4,5]) //O(n^2)