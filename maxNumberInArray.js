
const max = (arr) => {
    
    if (arr.length === 0) {
        return console.log("array is empty")
    }
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i]
        }

    }
    return maxNumber

}

console.log(max([4,2,9]));
console.log(max([-3, -1, -7])); 