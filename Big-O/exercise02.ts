function anotherFunChallenge(input: number) {
    let a = 5 // 0(1)
    let b = 10 // O(1)
    let c = 50 // O(1)
    for (let i = 0; i < input; i++) {
        let x = i + 1 //O(n)
        let y = i + 2 //O(n)
        let z = i + 3 //O(n)
    }

    for (let j = 0; j < input; j++) { //O(n)
        let p = j * 2 //O(n)
        let q = j * 2 //O(n)
    }
    let whoAmI = "I don't know" //(1)
}

// Big O (4 + 7n (if we include the for loops))
// but we don't actually calculate precisely so it becomes simplified and therefore exercise 2 would be O(n)