class HashTable {
    constructor(s) {
        this.table = new Array(s);
        this.size = s;
    }
    hash(n){
        let total= 0;
        for(let i=0 ;i<n.length ;i++){
            total = n.charCodeAt(i)
        }
        return total%this.size
    }
    set(key , value){
        const index = this.hash(key);
        console.log(`setting value at index ${index}`)
        if(this.table[index]){
            console.log(`collision detected at ${index}`) 
        }
        this.table[index] = value;
    }
    get(key){
        const index = this.hash(key)
        console.log(index)
        return ( this.table[index])
    }
    print(){
        console.log(`Hash table is ${this.table}`)
    }
    remove(key){
        const index = this.hash(key);
        this.table[index]= undefined;
    }
}

const a = new HashTable(5)
a.print()
a.set("AU", "Australia")
a.set("IND", "India")
a.set("PRC", "China")
a.set("12","asdfasd")
a.set("2","9-0")
a.set("109","lkm,nlkk")
a.set("190-","hkk")


a.print()
console.log('AU --',a.get("AU"))
a.remove("AU")
a.print()
