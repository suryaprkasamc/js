function fib(n)
{  
    // let a = 0, b=1 , c= a+b;
    // console.log(a, b , c )
    // for (let i =1 ; i <= n; i++){
    //     a = b ; 
    //     b = c ; 
    //     c = a+ b; 
    //     console.log(c)
    // }
    let  fib = [0, 1]
    for(let i =0 ; i<n ;i++){
        fib.push(fib[i]+fib[i+1])
    }
    console.log(fib)
}
fib(5)
