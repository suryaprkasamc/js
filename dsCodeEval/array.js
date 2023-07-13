//array 

//one dimensional array 
let a = [1,2,3,4,5]
console.log('array', a)
a.push(50)
console.log('push 50 ', a)
a.pop()
console.log('pop', a)
a.shift(1)
console.log('shift ', a)
a.unshift(1)
console.log('unshift ', a)
//2 dimensional array 

let arr = []
let rows = 3 , column = 3 ;

for(let i = 0 ; i<3 ;i ++){
    arr[i] = []
    for(let j = 0 ; j<column; j++){
        arr[i][j]=1;
    }
}
console.log({arr})