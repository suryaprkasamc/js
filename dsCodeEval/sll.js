class Node {
    constructor(v) {
        this.value = v;
        this.next = null;
    }
}
 class SingleLinkList {
    constructor() {
        this.head = null
        this.size = 0
    }

    append(n) {
        const node = new Node(n);
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next
            }
            curr.next = node;

        }
        this.size++;
        console.log(`${n} is inserted `)

    }
    delete(n) {
        let curr = this.head;
        //del at head 
        if (curr.value == n) {
            this.head = curr.next;
            console.log(`${n} is deleted`)
            this.size--;
        }
        else {
            while (curr) {
                if (curr.value === n) {
                    //del at last
                    if (curr.next == null) {
                        curr = null;
                        console.log(`${n} is deleted`)
                        this.size--;
                    }
                }
                else if (curr.next?.value == n) {
                    curr.next = curr.next.next
                    console.log(`${n} is deleted`)
                    this.size--;
                }
                else {
                    curr = curr.next;
                }
            }
        }


    }
    find(n) {
        let curr = this.head;
        let index = 0
        while (curr) {
            if (curr.value === n) {
                console.log(`present at ${index}`)
                return true
            }
            else {
                curr = curr.next;
                index++
            }
        }
        console.log('not found')
        return false
    }
    print() {
        if (this.isEmpty()) {
            console.log(`list empty`)
        }
        else {
            let a = []
            let curr = this.head;
            while (curr) {
                a.push(curr.value)
                curr = curr.next
            }
            console.log({ a })
        }
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    insertAt(v, p) {
        if (p > this.getSize() + 1 || p < 0) {
            console.log('invalid position position must be between 0 and ', this.getSize())
            return
        }
        else {
            if (p == 0) {
                this.prepend(v)
            }
            else if (p == this.getSize()) {
                this.append(v)
            }
            else {
                let node = new Node(v)
                let curr = this.head;
                let pos = 0;
                while (curr) {
                    if (pos == p - 1) {
                        let temp = curr.next;
                        curr.next = node;
                        node.next = temp
                    }
                    curr = curr.next;
                    pos++
                }
                console.log(`${v} is inserted `)

            }
        }

    }
    prepend(n) {
        let node = new Node(n);
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            let temp = node;
            node.next = this.head;
            this.head = temp
        }
        this.size++;
        console.log(`${n} is inserted `)
    }
    reverse(){
        if(this.isEmpty())
        console.log(`list is empty`)
        else{

            let prev = null ;
            let curr = this.head;
            while (curr){
                let  next = curr.next ;
                curr.next = prev ; 
                prev  = curr ; 
                curr = next 
            }
            this.head = prev;
            console.log(`reversed list is ${this.print()}`)
        }
    }
}

 class SllWithTail{
    constructor(){
        this.head = null ; 
        this.tail = null ;
        this. size = 0 
    }
    print() {
        if (this.isEmpty()) {
            console.log(`list empty`)
        }
        else {
            let a = []
            let curr = this.head;
            while (curr) {
                a.push(curr.value)
                curr = curr.next
            }
            console.log({ a })
        }
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    append(n){
        let  node = new Node(n)
        if(this.isEmpty())
        {
            this.head = node ; 
            this.tail = node ;
            console.log(`${n} is inserted `)
        }
        else{
            this.tail.next = node ; 
            this.tail = node;
            console.log(`${n} is inserted `)
        }
        this.size++
    }
    prepend(n){
        let node = new Node(n);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node 
        }
        else {
            
            node.next = this.head;
            this.head = node 
        }
        this.size++;
        console.log(`${n} is inserted `)
    }
    deleteAtHead(){
         console.log(`${this.head.value} is deleted `)
         this.head  = this.head.next;
         this.size--
    }
    deleteAtTail(){
        let curr = this.head 
        console.log(`${this.tail.value} is deleted `)
        while(curr.next != this.tail ){
            curr = curr.next 
        }
        this.tail = curr ;
        this.size--;
        

    }


}




// const readline = require('readline');
// // Create the readline interface
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// // let a = new SingleLinkList()
// let a = new SllWithTail()

// function processInput() {
//     rl.question('Enter an option (1)append 11)reverse   (2)delete  (3)find  (4)view  5)prepend 6)insertAtPosition (0)exit: ', (input) => {
//         switch (parseInt(input)) {
//             case 1:
//                 rl.question('Enter a value to push: ', (value) => {
//                     a.append(value);
//                     processInput();
//                 });
//                 break;
//             case 2:
//                 rl.question('Enter a value to be  delete: ', (value) => {
//                     a.delete(value);
//                     processInput();
//                 });
//                 processInput();
//                 break;
//             case 3:
//                 rl.question('Enter a value to find: ', (value) => {
//                     console.log(a.find(value));
//                     processInput();
//                 });
//                 processInput();
//                 break;
//             case 4:
//                 a.print();
//                 processInput();
//                 break;
//             case 5:
//                 rl.question('Enter a value to prepend: ', (value) => {
//                     a.prepend(value)
//                     processInput();
//                 });
//                 processInput();
//                 break;
//             case 6:
//                 rl.question('Enter position : ', (value) => {
//                     a.insertAt(99, value)
//                     processInput()
//                 });
//                 break;
//             case 11: a.reverse()
//                     processInput()
//                     break;
//             case 0:
//                 rl.close();
//                 break;
//             default:
//                 console.log('Invalid option. Try again.');
//                 processInput();
//         }
//     });
// }

// processInput();

module.exports = SllWithTail;
