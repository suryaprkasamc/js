//default methods in stack

class Stack {
    constructor(size) {
        this.SIZE = size;
        this.top = -1;
        this.stackArr = []
    }
    pop() {
        if (this.isEmpty()) {
            console.log('stack is empty')
        }
        else {
            console.log('popped out', this.stackArr[this.top])
            this.top--;
            this.stackArr.pop()
        }
    }
    push(n) {
        if (this.isFull()) {
            console.log('stack is full')
        }
        else {
            this.top++
            this.stackArr[this.top] = n
        }
    }
    peek() {
        if(!this.isEmpty())
        console.log('current top value', this.stackArr[this.top])
        else
        console.log('empty stack')
    }
    view() {
        console.log('stack is ', this.stackArr)
    }
    isEmpty() {
        console.log('top is ',this.top)
        return (this.top == -1&& this.stackArr.length ===0)
    }
    isFull() {
        console.log('is full check current top is ',this.top,'array length', this.stackArr.length )
        return (this.top < this.SIZE && this.stackArr.length ===this.SIZE)
    }

}
const readline = require('readline');
// Create the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let a = new Stack(5)
function processInput() {
    rl.question('Enter an option (1)push  (2)pop  (3)peek  (4)view  (0)exit: ', (input) => {
      switch (parseInt(input)) {
        case 1:
          rl.question('Enter a value to push: ', (value) => {
            a.push(value);
            processInput();
          });
          break;
        case 2:
          a.pop();
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


