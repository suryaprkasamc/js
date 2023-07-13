// check if n ===2 power of x
//  8 == 2 power of 3

function isPowerOf2(n){
    // console.log({n})
    // if(n<1) return false
    // while (n>1){
    //     if(n%2 !==0)
    //     return false;
    //     else
    //     n = n/2
    // }
    // return true;
    //bitwise operator
    if(n<1) return false

    return ((n & (n-1))===0)
  
}

console.log(isPowerOf2(63))