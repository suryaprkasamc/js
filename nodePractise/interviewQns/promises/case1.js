console.log('start')
// function print(msg){
//     setTimeout(()=>{
//         return msg
//     },1000)
// }
function print(msg, cb ){
    setTimeout(()=>{
        // return msg
        cb(msg)
    },1000)
}
// const m = print('surya')
// console.log(m)

print('surya', (msg)=>{console.log(msg)})
console.log('sttop')