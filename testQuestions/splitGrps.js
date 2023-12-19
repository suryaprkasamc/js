function splitGroups(input){

    let val = input.split('')
    if (val.length%2 !==0) return 'invalid';
    let c=[]

    for(let  i=0 ; i<val.length;i=i+2){
        let a = val[i]
        let b = val[i+1]
        if(a!=='0'){         
            for(let j=0;j<parseInt(a);j++){
              c.push(b)
            }       
        }
    }
    return c;
}

let val = '1213141516171819'
console.log(splitGroups(val))