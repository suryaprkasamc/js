class inputProcess{
    mapInput(a){
        console.log(a, ' inside input class')

    }
     processInput() {
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
}
module.exports = inputProcess;