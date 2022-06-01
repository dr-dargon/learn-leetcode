"use strict";
exports.__esModule = true;
var ds_1 = require("./ds");
var a = new ds_1.BinaryTreeDataStruct();
var data = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
data.forEach(function (ele) {
    a.insert(ele);
});
// console.log(a.min())
// console.log(a.max())
// console.log(a)
var print = function (val) {
    console.log(val);
};
console.log('mid');
a.inOrderTraverse(print);
console.log('pre');
a.preOrderTraverse(print);
console.log('post');
a.postOrderTraverse(print);
console.log(a.search(15));
console.log(a.search(4));
console.log('mid');
a.inOrderTraverse(print);
console.log('=====');
a.remove(15);
console.log('mid');
a.inOrderTraverse(print);
