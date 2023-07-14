class Node {
    constructor(v) {
        this.value = v;
        this.next = null;
        this.prev = null;
    }
}
class Dll {
    constructor() {
        this.size = 0;
        this.head = null;
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
            node.prev = curr

        }
        this.size++;
        console.log(`${n} is inserted `)
    }
    print(){
        if(this.isEmpty())
       {
        console.log('Dll is empty')
        return
       }
        let curr = this.head
        let a ;
        while(curr)
        {
           a += `  ${curr.value}`
            curr = curr.next
        }
        console.log(`dll is ${a}`)
    }
    printReverse(){
        let a ; 
        let curr = this.head;
        while(curr.next != null )
        {
            curr = curr.next;
        }
        let r = curr.prev
        while(r)
        {
            a += `  ${r.value}`;
             r = r.prev;
        }
        console.log('reversed dll is', a)

    }

    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size;
    }
}


const readline = require('readline');
// Create the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// let a = new SingleLinkList()
let a = new Dll()

function processInput() {
    rl.question('Enter an option (1)append 11)reverse   (2)delete  (3)reverse Print  (4)view  5)prepend 6)insertAtPosition (0)exit: ', (input) => {
        switch (parseInt(input)) {
            case 1:
                rl.question('Enter a value to push: ', (value) => {
                    a.append(value);
                    processInput();
                });
                break;
            case 2:
                rl.question('Enter a value to be  delete: ', (value) => {
                    a.delete(value);
                    processInput();
                });
                processInput();
                break;
            case 3:
               a.printReverse()
                processInput();
                break;
            case 4:
                a.print();
                processInput();
                break;
            case 5:
                rl.question('Enter a value to prepend: ', (value) => {
                    a.prepend(value)
                    processInput();
                });
                processInput();
                break;
            case 6:
                rl.question('Enter position : ', (value) => {
                    a.insertAt(99, value)
                    processInput()
                });
                break;
            case 11: a.reverse()
                    processInput()
                    break;
            case 0:
                rl.close();
                break;
            default:
                console.log('Invalid option. Try again.');
                processInput();
        }
    });
}

processInput();