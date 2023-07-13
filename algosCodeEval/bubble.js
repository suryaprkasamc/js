function bubbleSort(a) {
    let swap
    let count =0
    do {
        swap = false
        for (let i = 0; i < a.length - 1; i++) {

            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1]
                a[i + 1] = temp
                swap = true
                count++
            }

        0}
    }
    while (swap)
    console.log({count})
    return a
}
console.log(bubbleSort([1,43,123,13,43]))