"use strict";
// 树的数据结构
exports.__esModule = true;
exports.BinaryTreeDataStruct = exports.BinaryTreeNode = void 0;
// 二叉树
// 节点
var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(val) {
        this.value = val;
        this.left = this.right = null;
    }
    return BinaryTreeNode;
}());
exports.BinaryTreeNode = BinaryTreeNode;
var BinaryTreeDataStruct = /** @class */ (function () {
    function BinaryTreeDataStruct() {
        this.root = new BinaryTreeNode(null);
    }
    BinaryTreeDataStruct.prototype.insertNode = function (node, newNode) {
        if (newNode.value <= node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    // 插入数据
    BinaryTreeDataStruct.prototype.insert = function (value) {
        var node = new BinaryTreeNode(value);
        if (this.root.value === null) {
            this.root = node;
        }
        else {
            this.insertNode(this.root, node);
        }
    };
    BinaryTreeDataStruct.prototype.isEmpty = function () {
        return this.root === null;
    };
    BinaryTreeDataStruct.prototype.minNode = function (node) {
        if (node.value) {
            while (node.value && node.left !== null) {
                return this.minNode(node.left);
            }
            return node.value;
        }
        return null;
    };
    BinaryTreeDataStruct.prototype.maxNode = function (node) {
        if (node.value) {
            while (node.value && node.right !== null) {
                return this.maxNode(node.right);
            }
            return node.value;
        }
        return null;
    };
    // 最小值
    BinaryTreeDataStruct.prototype.min = function () {
        return this.minNode(this.root);
    };
    // 最大值
    BinaryTreeDataStruct.prototype.max = function () {
        return this.maxNode(this.root);
    };
    BinaryTreeDataStruct.prototype.inOrderTraverseNode = function (node, fun) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, fun);
            fun(node.value);
            this.inOrderTraverseNode(node.right, fun);
        }
    };
    BinaryTreeDataStruct.prototype.preOrderTraverseNode = function (node, fun) {
        if (node !== null) {
            fun(node.value);
            this.preOrderTraverseNode(node.left, fun);
            this.preOrderTraverseNode(node.right, fun);
        }
    };
    BinaryTreeDataStruct.prototype.postOrderTraverseNode = function (node, fun) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, fun);
            this.postOrderTraverseNode(node.right, fun);
            fun(node.value);
        }
    };
    // 中序遍历
    BinaryTreeDataStruct.prototype.inOrderTraverse = function (fun) {
        this.inOrderTraverseNode(this.root, fun);
    };
    // 前序遍历
    BinaryTreeDataStruct.prototype.preOrderTraverse = function (fun) {
        this.preOrderTraverseNode(this.root, fun);
    };
    // 后序遍历
    BinaryTreeDataStruct.prototype.postOrderTraverse = function (fun) {
        this.postOrderTraverseNode(this.root, fun);
    };
    BinaryTreeDataStruct.prototype.searchNode = function (node, val) {
        if (node === null)
            return false;
        if (val < node.value) {
            return this.searchNode(node.left, val);
        }
        else if (val > node.value) {
            return this.searchNode(node.right, val);
        }
        else {
            return true;
        }
    };
    // 搜索指定值
    BinaryTreeDataStruct.prototype.search = function (val) {
        return this.searchNode(this.root, val);
    };
    BinaryTreeDataStruct.prototype.findMinNode = function (node) {
        while (node && node.left != null) {
            node = node.left;
        }
        return node;
    };
    BinaryTreeDataStruct.prototype.removeNode = function (node, val) {
        if (node === null)
            return null;
        if (val < node.value) {
            node.left = this.removeNode(node.left, val);
            return node;
        }
        else if (val > node.value) {
            node.right = this.removeNode(node.right, val);
            return node;
        }
        else {
            // 没有节点的
            if (node.left === null && node.right === null) {
                return node = null;
            }
            // 有一个子节点的
            if (node.left === null) {
                return node = node.left;
            }
            else if (node.right === null) {
                return node = node.right;
            }
            // 两个节点的
            var tempNode = this.findMinNode(node.right);
            node.value = tempNode.value;
            node.right = this.removeNode(node.right, tempNode.value);
            return node;
        }
    };
    BinaryTreeDataStruct.prototype.remove = function (val) {
        return this.root = this.removeNode(this.root, val);
    };
    return BinaryTreeDataStruct;
}());
exports.BinaryTreeDataStruct = BinaryTreeDataStruct;
