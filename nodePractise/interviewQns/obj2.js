const a ={}
const b = {key:'c'}
const c = {key :'d'}
a[b] = 123
a[c]=456

console.log(a[b])


//

for(var i=0;i<3;i++){

   (function(i){
    setTimeout(()=>{console.log(i)},1000)
   }) (i)
}
// json tr