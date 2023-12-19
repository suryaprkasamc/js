let inputVal = '000'

function countAdjOnes(input){
let val = input.split('')
let count =0
for (let i=0 ; i <val.length; i++){
    if(val[i]=== '1' &&val[i+1]==='1' && val[i-1]!=='1'){
  count++;
    }
}
console.log(count)
}
countAdjOnes(inputVal)