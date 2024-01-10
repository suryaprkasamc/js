const students = [
    { name: 'surya', mark: 90 },
    { name: 'madan', mark: 20 }, 
     { name: 'ram', mark: 10 },
    { name: 'sushmi', mark: 99 }
]


let a = students.map((x)=>x.mark+20)

console.log(students.map((x)=>{ if(x.mark<60){return {...x, mark :x.mark+20 }}else{return x} }).filter((x)=>x.mark>80))


