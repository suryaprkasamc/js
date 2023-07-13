class Queue {
    constructor(size) {
        this.size = size;
        this.queueArr = [];
    }
    enqueue(n) {
        if (this.isFull()) {
            console.log('Q is full')
        }
        else {
            this.queueArr.push(n)
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log('Q is empty')
        }
        else {
            console.log(this.queueArr.shift())
        }

    }
    isFull() {
        return this.queueArr.length === this.size
    }
    isEmpty() {
        return this.queueArr.length === 0
    }
    view() {
        console.log('Q', this.queueArr)
    }
    peek() {
        console.log('current FI ', this.queueArr[0])

    }
}
class Queue1 {
    constructor(size) {
        this.size = size;
        this.queueArr = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(n) {
        if (this.isFull()) {
            console.log('Q is full')
        }
        else {

            this.queueArr[this.front] = n
            this.front++
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log('Q is empty')
        }
        else {
            console.log(this.queueArr[this.rear], '  dequeued')
            delete this.queueArr[this.rear]
            this.rear++
        }

    }
    isFull() {

        console.log(this.front, this.rear)
        if (this.front === this.rear) {
            this.front = 0; this.rear = 0;
            return false
        }
        return this.front === this.size

    }
    isEmpty() {
        console.log(this.front, this.rear)
        if (this.front === this.rear) {
            this.front = 0; this.rear = 0;
            return true
        }
    }
    view() {
        console.log(this.front, this.rear)
        console.log('Q', this.queueArr)
    }
    peek() {
        console.log('current FI ', this.queueArr[0])

    }

}
class CircularQ{
    constructor(size) {
        this.size = size;
        this.queueArr = new Array(this.size);
        this.front = -1;
        this.rear = -1;
    }
    enqueue(n) {
        if (this.isFull()) {
            console.log('Q is full')
        }
        else {

        }
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log('Q is empty')
        }
        else {
           
        }

    }
    isFull() {
      if(this.rear-this.front)
      

    }
    isEmpty() {
        
    }
    view() {
        console.log(this.front, this.rear)
        console.log('Q', this.queueArr)
    }
    peek() {
        console.log('current FI ', this.queueArr[this.rear])

    }

}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let a = new Queue1(5)
function processInput() {
    rl.question('Enter an option (1)enqueue  (2)dequeue  (3)peek  (4)view  (0)exit: ', (input) => {
        switch (parseInt(input)) {
            case 1:
                if (!a.isFull()) {
                    rl.question('Enter a value to enque: ', (value) => {
                        a.enqueue(value);
                        processInput();
                    });
                }
                else console.log('Q full')
                processInput();

                break;
            case 2:
                a.dequeue();
                processInput();
                break;
            case 3:
                a.peek();
                processInput();
                break;
            case 4:
                a.view();
                processInput();
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

