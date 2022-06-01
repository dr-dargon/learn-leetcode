"use strict";
exports.__esModule = true;
exports.LinkListDataStruct = void 0;
// 链表的数据结构
var LinkListNode = /** @class */ (function () {
    function LinkListNode(val, next) {
        this.element = val;
        this.next = next;
    }
    return LinkListNode;
}());
var LinkListDataStruct = /** @class */ (function () {
    function LinkListDataStruct() {
        this.head = new LinkListNode(null, null);
        this.length = 0;
    }
    // 追加
    LinkListDataStruct.prototype.append = function (ele) {
        var node = new LinkListNode(ele, null);
        if (this.head.element === null) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    };
    // 指定位置插值
    LinkListDataStruct.prototype.insert = function (position, ele) {
        if (position >= 0 && position <= this.length) {
            var node = new LinkListNode(ele, null);
            var current = this.head;
            var index = 0;
            var previous = void 0;
            if (position === 0) {
                node.next = current;
                this.head = node;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        return false;
    };
    // 删除指定位置值
    LinkListDataStruct.prototype.removeAt = function (position) {
        if (position < 0 && position >= this.length)
            return null;
        var current = this.head;
        var previous;
        var index = 0;
        if (position === 0)
            this.head = current.next;
        else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.element;
    };
    // 删除指定值
    LinkListDataStruct.prototype.remove = function (ele) {
        if (this.length === 0)
            return false;
        else {
            var current = this.head;
            var previous = void 0;
            while (current.next != null && current.element !== ele) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            this.length--;
            return true;
        }
    };
    // 链表大小
    LinkListDataStruct.prototype.size = function () {
        return this.length;
    };
    // 链表判空
    LinkListDataStruct.prototype.isEmpty = function () {
        if (this.length === 0)
            return true;
        return false;
    };
    LinkListDataStruct.prototype.indexOf = function (ele) {
        if (this.length === 0)
            return -1;
        else {
            var current = this.head;
            var index = 0;
            while (current) {
                if (ele === current.element) {
                    return index;
                }
                index++;
                current = current.next;
            }
            return -1;
        }
    };
    // 打印输出
    LinkListDataStruct.prototype.show = function () {
        if (this.length > 0) {
            var current = this.head;
            var nodeList = [];
            while (current.next != null) {
                nodeList.push(current.element);
                current = current.next;
            }
            console.log(nodeList.toString());
        }
        else {
            console.log('');
        }
    };
    return LinkListDataStruct;
}());
exports.LinkListDataStruct = LinkListDataStruct;
