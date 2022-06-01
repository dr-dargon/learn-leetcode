// 树的数据结构

// 二叉树
// 节点
export class BinaryTreeNode<T> {
    public value: T // 值
    public left: BinaryTreeNode<T>
    public right: BinaryTreeNode<T>

    constructor(val: T) {
        this.value = val
        this.left = this.right = null
    }
} 

export class BinaryTreeDataStruct<T> {
    private root: BinaryTreeNode<T>

    constructor() {
        this.root = new BinaryTreeNode(null)
    }

    private insertNode(node:BinaryTreeNode<T>, newNode: BinaryTreeNode<T>): void{
        if(newNode.value <= node.value){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode)   
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertNode(node.right, newNode)
            }
        }
    }

    // 插入数据
    public insert(value: T):void {
        let node = new BinaryTreeNode(value)
        if(this.root.value === null){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }

    public isEmpty():boolean {
        return this.root === null
    }

    private minNode(node: BinaryTreeNode<T>):T {
        if(node.value){
            while(node.value && node.left !== null){
                return this.minNode(node.left)
            }
            return node.value
        }
        return null
    }

    private maxNode(node: BinaryTreeNode<T>):T {
        if(node.value){
            while(node.value && node.right !== null){
                return this.maxNode(node.right)
            }
            return node.value
        }
        return null
    }

    // 最小值
    public min(): T {
        return this.minNode(this.root)
    }

    // 最大值
    public max(): T {
        return this.maxNode(this.root)
    }

    private inOrderTraverseNode(node: BinaryTreeNode<T>, fun: CallableFunction): void {
        if(node !== null){
            this.inOrderTraverseNode(node.left, fun)
            fun(node.value)
            this.inOrderTraverseNode(node.right, fun)
        }
    }

    private preOrderTraverseNode(node: BinaryTreeNode<T>, fun: CallableFunction): void {
        if(node !== null){            
            fun(node.value)
            this.preOrderTraverseNode(node.left, fun)
            this.preOrderTraverseNode(node.right, fun)
        }
    }

    private postOrderTraverseNode(node: BinaryTreeNode<T>, fun: CallableFunction): void {
        if(node !== null){            
            this.postOrderTraverseNode(node.left, fun)
            this.postOrderTraverseNode(node.right, fun)
            fun(node.value)
        }
    }

    // 中序遍历
    public inOrderTraverse(fun: CallableFunction): void {
        this.inOrderTraverseNode(this.root, fun)
    }

    // 前序遍历
    public preOrderTraverse(fun: CallableFunction): void {
        this.preOrderTraverseNode(this.root, fun)
    }

    // 后序遍历
    public postOrderTraverse(fun: CallableFunction): void {
        this.postOrderTraverseNode(this.root, fun)
    }

    private searchNode(node: BinaryTreeNode<T>, val: T): boolean {
        if(node === null) return false
        if(val < node.value) {
            return this.searchNode(node.left, val)
        }else if(val > node.value){
            return this.searchNode(node.right, val)
        }else{
            return true
        }
    }

    // 搜索指定值
    public search(val: T): boolean {
        return this.searchNode(this.root, val)
    }

    private findMinNode(node: BinaryTreeNode<T>) {
        while(node && node.left != null) {
            node = node.left
        }
        return node
    }

    private removeNode(node: BinaryTreeNode<T>, val:T):null|BinaryTreeNode<T> {
        if(node === null) return null
        if(val < node.value){
            node.left = this.removeNode(node.left, val)
            return node
        }else if(val > node.value){
            node.right = this.removeNode(node.right, val)
            return node
        }else{
            // 没有节点的
            if(node.left === null && node.right === null) {
                return node = null
            }
            // 有一个子节点的
            if(node.left === null){
                return node = node.left
            }else if(node.right === null){
                return node = node.right
            }
            // 两个节点的
            let tempNode = this.findMinNode(node.right)
            node.value = tempNode.value
            node.right = this.removeNode(node.right, tempNode.value)
            return node
        }
    }

    public remove(val: T):BinaryTreeNode<T> {
        return this.root = this.removeNode(this.root, val)
    }

}