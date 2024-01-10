//map 

var num =[1,2,3,4,5]

const mulBy2 = num.map((num,i,arr)=>num*2 +i )

console.log(mulBy2)



//polyfill 

Array.prototype.myMap = function(cb){

    let temp =[]

    for(let i=0;i<this.length;i++){
        temp.push (cb(this[i],i,this))
    }
    return temp
}


console.log(num.myMap((x)=>x*5))





