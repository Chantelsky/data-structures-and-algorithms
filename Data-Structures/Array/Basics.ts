const teamUniverse = ['Goku','Gohan', 'Piccolo', 'Krillin', 'Android 17']

// adds an element to the end of the array
teamUniverse.push('Vegeta') //O(1)

// removes and returns the last element
console.log(teamUniverse.pop(), 'unlocked a new form!') //O(1)
console.log(teamUniverse.pop(), 'has been defeated') //O(1)

console.log(teamUniverse)

console.log('Team Universe has', teamUniverse.push('Gohan'), 'strong teammates')

//unshift adds the specified elements to the beginning of the array
teamUniverse.unshift('Frieza') //O(n)

console.log('Frieza joins the team!')

// Splice(i, n) removes n elements starting from index i
teamUniverse.splice(2,1) //O(n)

console.log('Frieza still wants to destroy', teamUniverse[1])

teamUniverse.splice(2, 0, 'Vegeta') //O(n)

console.log('But Goku wins the tournament with', teamUniverse)