function bs(arr, n) {
    let center = Math.floor(arr.length / 2)
    console.log({center})
    if (arr[center] === n)
        return center
    else if (arr[center] < n) {
        for (let i = center; i < arr.length; i++) {
            if (arr[i] === n)
                return i
        }
    }
    else if (arr[center] > n) {
        for (let i = 0; i < center; i++) {
            if (arr[i] === n)
                return i
        }
    }

    return -1
}

console.log(bs([1,2,3,4,5,653,900], 3))