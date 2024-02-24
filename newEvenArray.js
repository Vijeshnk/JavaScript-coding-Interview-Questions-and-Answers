const evenArray = (arr) => {



    return arr.filter((i) =>
        i % 2 === 0
    )
}

console.log(evenArray([1, 2, 3, 4]))
console.log(evenArray([1, 2, 3, 4, 5, 6]))
console.log(evenArray([10, 21, 32, 43, 54, 65]))