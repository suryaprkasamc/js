class Node {
    constructor(v) {
        this.value = v;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }
    insert(n) {
        let newNode = new Node(n)
        if (this.isEmpty()) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            }
            else {
                this.insertNode(root.left, newNode)
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right, newNode)
            }
        }

    }
    a = []
    preorder(root) {
        if (!root)
            return
        else {
            //console.log(root.value)
            this.a.push(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }

    }
    postorder(root) {
        if (!root)
            return
        else {
            this.postorder(root.left)
            this.postorder(root.right)
            //console.log(root.value)
            this.a.push(root.value)
        }

    }
    Inorder(root) {
        if (!root)
            return
        else {
            this.Inorder(root.left)
            // console.log(root.value)
            this.a.push(root.value)
            this.Inorder(root.right)
        }
    }
    searchNode(root, val) {

        if (root == null) {
            return false
        }
        else {
            if (root.value === val) {
                // console.log(root.value ,'is present')
                return true
            }
            else if (val < root.value) {
                this.searchNode(root.left, val)
            }
            else {
                this.searchNode(root.right, val)
            }
        }
    }
    search(val) {
         console.log(this.searchNode(this.root, val))
    }
    print() {
        // console.log('preorder ')
        // this.preorder(this.root)
        // console.log(this.a)
        // console.log('post order ')
        // this.postorder(this.root)
        // console.log(this.a)
        this.a = [];
        console.log('In order ')
        this.Inorder(this.root)
        console.log(this.a)

    }
    height(root) {
        if (!root) { return -1 }
        let lh = this.height(root.left)
        let rh = this.height(root.right)
        return (lh > rh ? lh + 1 : rh + 1)
    }
    findHeight(){
       console.log(`height of the tree is ${this.height(this.root)}`) 
    }
}




const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const a = new Bst();

function processInput() {
    rl.question('Enter an option (1) insert (2)delete   3)search  (4)view 5)tree height  (0)exit: ', (input) => {
        switch (parseInt(input)) {
            case 1:
                rl.question('Enter a value to insert: ', (value) => {
                    a.insert(value);
                    processInput();
                });
                break;
            case 2:

                processInput();
                break;

            case 3:
                rl.question('Enter a value to search: ', (value) => {
                    a.search(value);
                    processInput();
                });
                break
            case 4: a.print()
                processInput()
                break;
            case 5: a.findHeight()
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
