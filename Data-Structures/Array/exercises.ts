/*
** Reverse an array
*/

const reverseString = str => str.split('').reverse().join('')

reverseString('Hi My name is Chantel')

function reverseAnotherString(str: string) {
    return str.split('').reverse().join('')
}

reverseAnotherString('Hello! My name is Chantel')

/*
** Merge an array
*/

const animals = ['🐶', '🐱', '🐭', '🐹', '🐰']
const wildAnimals = ['🦊', '🐻', '🐼', '🐻', '🐨']

const allArrays = [...animals, ...wildAnimals]

console.log(allArrays)


const arr1 = ['🌍', '🌏', '🪐']
const arr2 = ['🌈', '🌤', '🌞']

function mergeSortedArrays(arr1: Array<string>, arr2: Array<string>) {
    let mergedArray = []
    return mergedArray = [...arr1, ...arr2].sort((a: any, b: any) => a - b)
}

console.log(mergeSortedArrays(arr1, arr2))