const obj = {
    [Symbol.iterator]: function () {
        let step =0
        const iterator = {
            next: function () {
                step++
                if (step == 1) {
                    return { value: 'hello', done: false, }
                }
                else if (step == 2) {
                    return { value: 'surya', done: false, }
                }
                return { value: undefined, done: true, }
            }
        }
        return iterator
    }
}
for(const a of obj){
    console.log({a})
}