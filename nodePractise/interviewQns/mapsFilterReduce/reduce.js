
//reduce
var num =[1,2,3,4,5]

const red = num.reduce((acc,cur)=>acc+=cur,0)

console.log(red)

Array.prototype.myReduce = function(cb,initial){
    var acc = initial
    for(let i=0;i<this.length;i++){
        cb(acc,this[i],i,this)

        acc = acc?cb(acc,this[i],i,this):this[i]

    }

    return acc;


}

console.log(num.myReduce((acc,x)=>acc+=x,10))