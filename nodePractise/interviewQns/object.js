

let obj ={

    a:'one',
    b:3,
    c:4
}


for (const key in obj) {
    if(typeof(obj[key])=='number'){
        obj[key] = 2* obj[key]
    }
    
}


console.log(obj)