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
    preorder(root) {
        if (!root)
            return
        else {
            console.log(root.value)
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


        }

    }
    Inorder(root) {
        if (!root)
            return
        else {
            this.Inorder(root.left)
            console.log(root.value)
            this.Inorder(root.right)
        }
    }
    searchNode(root, val) {

        if (!root) {
            return false
        }
        else {
            console.log(root.value)
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
        console.log('preorder ')
        this.preorder(this.root)
        console.log('post order ')
        this.postorder(this.root)
        console.log('In order ')
        this.Inorder(this.root)
    }
}



const bst = new Bst();

bst.insert(14)
bst.insert(24)
bst.insert(65)
bst.insert(69)
bst.insert(90)
bst.insert(87)
bst.insert(4)
bst.insert(3)
bst.print()
console.log('is tree empty ?', bst.isEmpty())
