const fib = (terms) => {

    if (terms < 1) return []
    if (terms === 1) return [0]

    let array = [0, 1]

    for (i = 2; i < terms; i++) {
        array.push(array[i - 1] + array[i - 2])
    }

    return array

}

console.log(fib(5)) //[ 0, 1, 1, 2, 3 ]
console.log(fib(10)) 

// [
//     0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34
//   ]