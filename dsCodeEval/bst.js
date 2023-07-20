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
    insertA(arr) {
        arr = arr.split(" ").map(x => Number(x));
        console.log(arr)
        for (const a of arr) {
            console.log(`inserting ${a}`)
            this.insert(a)
        }
    }
    // insert(value) {
    //     const newNode = new Node(value);
    //     if (this.isEmpty()) {
    //       this.root = newNode;
    //     } else {
    //       this.insertNode(this.root, newNode);
    //     }
    //   }

    //   insertNode(root, newNode) {
    //     if (newNode.value < root.value) {
    //       if (root.left === null) {
    //         root.left = newNode;
    //       } else {
    //         this.insertNode(root.left, newNode);
    //       }
    //     } else {
    //       if (root.right === null) {
    //         root.right = newNode;
    //       } else {
    //         this.insertNode(root.right, newNode);
    //       }
    //     }
    //   }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    preorder(root) {
        if (!root)
            return
        else {
            console.log(root.value)
            //  this.a.push(root.value)
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
            console.log(root.value)
            // this.a.push(root.value)
        }

    }
    Inorder(root) {
        if (root !== null) {
            this.Inorder(root.left)
            console.log(root.value)
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
        return this.searchNode(this.root, val)
    }
    print() {
        console.log('In order ')
        this.Inorder(this.root)
        // console.log(this.a)
    }
    insertLoop(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
    height(root) {
        if (!root) { return -1 }
        let lh = this.height(root.left)
        let rh = this.height(root.right)
        return (lh > rh ? lh + 1 : rh + 1)
    }
    findHeight() {
        console.log(`height of the tree is ${this.height(this.root)}`)
    }
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    dfs(type) {
        console.log('received ', type)
        switch (parseInt(type)) {
            case 1: console.log('Pre order book')
                this.preOrder(this.root);
                console.log('Pre order mine')
                this.preorder(this.root)
                break;

            case 2: console.log('In order book')
                this.inOrder(this.root);
                console.log('In order mine')
                this.Inorder(this.root)
                break;
            case 3: this.postorder(this.root); break;
        }
    }
    clear() {
        this.root = null;
        console.log(`tree is deleted `)
    }
    bfs() {
        let q = [];
        q.push(this.root)
        console.log(`root length is ${q.length}`)
        while (q.length) {
            let curr = q.shift();
            console.log(curr.value)
            if (curr.left)
                q.push(curr.left)
            if (curr.right)
                q.push(curr.right)
        }

    }
    minNode(root){
        if(!root.left ){
            console.log('min value is ', root.value)
            return root.value
        }
        else{
            this.minNode(root.left)
        }
    }
    maxNode(root){
        if(root.right ===null){
            console.log('max value ius ', root.value)
        }
        else{
            this.maxNode(root.right)
        }
    }
    minMax(){
        // this.minNode(this.root);
        // this.maxNode(this.root);
        this.minNodeLoop(this.root)
        this.maxNodeLoop(this.root)
    }
    minNodeLoop(root){
        if(root.left ===null)
        {
            console.log('min value is ', this.root.value)
        }
        else{
            let curr = this.root
            while(curr.left){
                    curr = curr.left
            }
            console.log('min is ', curr.value)
        }
    }
    maxNodeLoop(){
        if(this.root.right ===null)
        {
            console.log('min value is ', this.root.value)
        }
        else{
            let curr = this.root
            while(curr.right){
                    curr = curr.right
            }
            console.log('min is ', curr.value)
        }
    }
    delete(value){
       if( this.search(value))
        this.deleteNode(this.root, value)
        else
        console.log(`value not found`)
    }
    deleteNode(root, value){
        if(root ===null) return root;
        if(value <root.value){
            root.left = this.deleteNode(root.left, value)
        }
        else if(value> root.value){
            root.right = this.deleteNode(root.right, value)
        }
        else{
            if(!root.left&&!root.right){
                return null
            }
            else if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value = this.minNodeLoop(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
    }

}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const a = new Bst();

function processInput() {
    rl.question('Enter an option (1) insert (2)delete   3)search  (4)view 5)tree height   6)clear 7)BFS 8)min max (0)exit: ', (input) => {
        switch (parseInt(input)) {
            case 1:
                rl.question('Enter a array split by space  to insert: ', (value) => {
                    a.insertA
                        (value);
                    processInput();
                });
                break;
            case 2:rl.question('Enter a value to delete: ', (value) => {
                a.delete(value);
                processInput();
            });
                break;

            case 3:
                rl.question('Enter a value to search: ', (value) => {
                    a.search(value);
                    processInput();
                });
                break
            case 4: rl.question('Enter a 1)inorder 2)pre 3)post : ', (value) => {
                a.dfs(value);
                processInput();
            });
                break;
            case 5: a.findHeight()
                processInput();
                break;
            case 6: a.clear(); processInput(); break;
            case 7: a.bfs(); processInput(); break;
            case 8: a.minMax(); processInput(); break;
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
