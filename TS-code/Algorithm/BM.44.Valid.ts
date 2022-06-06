/**
 * 44.有效括号
 * 数据范围：字符串长度 0\le n \le 100000≤n≤10000
 * 要求：空间复杂度 O(n)，时间复杂度 O(n))
 * "()[]{}" ==> true
 */
export function isValid(s: string): boolean {
    // write code here
    let stack:string[] = []
    for(let i=0;i<s.length;i++){
        let char = s[i]
        switch(char){
            case '(':
                stack.push(char)
                break
            case '[':
                stack.push(char)
                break
            case '{':
                stack.push(char)
                break
            case '}':
                if(stack.length === 0 || stack[stack.length-1] !== '{') return false
                stack.pop()
                break
            case ']':
                if(stack.length === 0 || stack[stack.length-1] !== '[') return false
                stack.pop()
                break
            case ')':
                if(stack.length === 0 || stack[stack.length-1] !== '(') return false
                stack.pop()
                break
        }
    }
    return stack.length === 0
}