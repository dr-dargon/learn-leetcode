/**
 * 思路: 
 * 
 */

// 递归
// 时间复杂度: O(n²)
export function fibonacciRecursion(n:number):number {
    if(n < 0) return -1
    if(n === 1 || n === 2) return 1
    return fibonacciRecursion(n-1)+fibonacciRecursion(n-2)
}

// 动态规划
// 时间复杂度: O(n) 
// 空间复杂度: O(n)
export function fibonacciDynamic_1(n:number):number {
    let arr = [1, 1]
    while(arr.length < n) {
        arr.push(arr[arr.length-1]+arr[arr.length-2])
    }
    return arr[n-1]
}

// 动态规划
// 时间复杂度: O(n) 
// 空间复杂度: O(1)
export function fibonacciDynamic_2(n:number):number {
    if(n===1||n===2) return 1
    let a = 0
    let b = 1
    let res = 0
    for(let i=2;i<=n;i++){
        res = a +b 
        a = b
        b = res
    }
    return res
}