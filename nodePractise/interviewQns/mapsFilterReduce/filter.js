
// filter 
var num =[1,2,3,4,5]
const fil = num.filter((num,i)=>num>3)

console.log(fil)


//polyfill


Array.prototype.myFilter = function (cb){

    let temp =[]

    for (let i=0; i <this.length;i++){
        if(cb(this[i],i,this)) temp.push(this[i])
    }

    return temp
}


console.log(num.myFilter((x)=>x>4))