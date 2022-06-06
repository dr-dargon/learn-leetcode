/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param value int整型 
 * @return 无
 */
export let arr = []
export let minArr = []
 
 export function push(value: number) {
     // write code here
    arr.push(value)
    if(minArr.length === 0||value<minArr[minArr.length-1]) minArr.push(value)
 }
 
 /**
  * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
  *
  * 
  * @param 无 
  * @return 无
  */
 export function pop():number {
     // write code here
    if(minArr[minArr.length-1]===arr[arr.length-1])
        minArr.pop()
    return arr.pop()
 }
 
 /**
  * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
  *
  * 
  * @param 无 
  * @return int整型
  */
 export function top(): number {
     // write code here
    return arr[arr.length - 1]
 }
 
 /**
  * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
  *
  * 
  * @param 无 
  * @return int整型
  */
 export function min(): number {
     // write code here
    return minArr[minArr.length-1]
 }