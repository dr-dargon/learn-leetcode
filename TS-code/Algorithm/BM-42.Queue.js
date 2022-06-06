"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.inArr = [];
        this.outArr = [];
    }
    Queue.prototype.push = function (node) {
        var _this = this;
        if (this.outArr.length === 0)
            this.inArr.push(node);
        this.outArr.forEach(function (ele) {
            _this.inArr.unshift(ele);
        });
    };
    Queue.prototype.pop = function () {
        var _this = this;
        if (this.outArr.length === 0) {
            this.inArr.forEach(function (ele) {
                _this.outArr.unshift(ele);
            });
            this.inArr.shift();
            var popNum = this.outArr.pop();
            this.outArr = [];
            return popNum;
        }
    };
    Queue.prototype.show = function () {
        console.log(this.inArr.toString());
        console.log(this.outArr.toString());
    };
    return Queue;
}());
exports.Queue = Queue;
