const sll = require('./sll.js')
class Queue {
    constructor(s) {
        this.queue = new  sll()
        this.queueSize = s;
    }

    enque(n) {
        this.queue.append(n);

    }
    deque() {
        this.queue.deleteAtHead()
    }
    view() {
        this.queue.print();
    }

    getSize() {
        return this.queue.getSize()
    }
    isEmpty() {
        return this.queue.isEmpty()
    }
    isFull() {
        return this.queueSize === this.stack.getSize()
    }
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let a = new Queue(5)

function processInput() {
    rl.question('Enter an option (1)enq    (2)de q    (4)view  (0)exit: ', (input) => {
        switch (parseInt(input)) {
            case 1:
                rl.question('Enter a value to push: ', (value) => {
                    a.enque(value);
                    processInput();
                });
                break;
            case 2:
                    a.deque();
                processInput();
                break;
           
            case 4:
                a.view();
                processInput();
                break
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