const { callbackify } = require('util')
const  sll  = require('./sll')
class Stack{
    constructor(size )
    { 
      this.stack = new  sll()
      this.stackSize = size
    }

    push(n){
        if(!this.isFull())
            this.stack.prepend(n)
        else
        console.log(`stack is full`)
    }
    pop(){
        if(this.isEmpty()){
            console.log(`stack is empty`)
        }
        else
        {
            this.stack.deleteAtHead()
        }
    }
    view(){
        this.stack.print();
    }

    getSize(){
        return this.stack.getSize()
    }
    isEmpty(){
        return this.stack.isEmpty()
    }
    isFull(){
        return  this.stackSize ===this.stack.getSize()
    }

}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let a = new Stack(5)

function processInput() {
    rl.question('Enter an option (1)push    (2)pop   (4)view  (0)exit: ', (input) => {
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