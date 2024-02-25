const findthelargestelement = (arr) => {

    let largest = -Infinity

    function findLargest(arr) {

        arr.forEach((ele) => {
            if (Array.isArray(ele)) {
                findLargest(ele)
            } else {
                if (ele > largest) {
                    largest = ele
                }
            }
        })


    }
    findLargest(arr)
    return largest
}

console.log(findthelargestelement([1, [2, 3], [4, 5, [6, 7]], 8]))