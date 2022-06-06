"use strict";
exports.__esModule = true;
exports.isValid = void 0;
/**
 * 44.有效括号
 */
function isValid(s) {
    // write code here
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        switch (char) {
            case '(':
                console.log(char);
                stack.push(char);
                break;
            case '[':
                console.log(char);
                stack.push(char);
                break;
            case '{':
                console.log(char);
                stack.push(char);
                break;
            case '}':
                console.log(char);
                if (stack.length === 0 || stack[stack.length - 1] !== '{')
                    return false;
                stack.pop();
                break;
            case ']':
                console.log(char);
                if (stack.length === 0 || stack[stack.length - 1] !== '[')
                    return false;
                stack.pop();
                break;
            case ')':
                console.log(char);
                if (stack.length === 0 || stack[stack.length - 1] !== '(')
                    return false;
                stack.pop();
                break;
        }
    }
    return stack.length === 0;
}
exports.isValid = isValid;
