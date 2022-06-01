"use strict";
exports.__esModule = true;
exports.StackDataStruct = void 0;
// 栈的数据结构
var StackDataStruct = /** @class */ (function () {
    // 初始化
    function StackDataStruct() {
        this.data = [];
        this.top = 0;
    }
    // 入栈
    StackDataStruct.prototype.push = function (item) {
        this.data.push(item);
        this.top++;
    };
    // 出栈
    StackDataStruct.prototype.pop = function () {
        this.top--;
        return this.data.pop();
    };
    // 返回栈顶元素
    StackDataStruct.prototype.peek = function () {
        return this.data[this.top];
    };
    // 栈判空
    StackDataStruct.prototype.isEmpty = function () {
        return this.top === 0;
    };
    // 栈大小
    StackDataStruct.prototype.size = function () {
        return this.top;
    };
    // 清空
    StackDataStruct.prototype.clear = function () {
        delete this.data;
        this.top = 0;
        this.data = [];
    };
    StackDataStruct.prototype.show = function () {
        console.log(this.data.toString());
    };
    return StackDataStruct;
}());
exports.StackDataStruct = StackDataStruct;
