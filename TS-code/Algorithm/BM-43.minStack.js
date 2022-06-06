"use strict";
exports.__esModule = true;
exports.min = exports.top = exports.pop = exports.push = exports.minArr = exports.arr = void 0;
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param value int整型
 * @return 无
 */
exports.arr = [];
exports.minArr = [];
function push(value) {
    // write code here
    exports.arr.push(value);
    if (exports.minArr.length === 0 || value < exports.minArr[exports.minArr.length - 1])
        exports.minArr.push(value);
}
exports.push = push;
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param 无
 * @return 无
 */
function pop() {
    // write code here
    if (exports.minArr[exports.minArr.length - 1] === exports.arr[exports.arr.length - 1])
        exports.minArr.pop();
    return exports.arr.pop();
}
exports.pop = pop;
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param 无
 * @return int整型
 */
function top() {
    // write code here
    return exports.arr[exports.arr.length - 1];
}
exports.top = top;
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param 无
 * @return int整型
 */
function min() {
    // write code here
    return exports.minArr[exports.minArr.length - 1];
}
exports.min = min;
