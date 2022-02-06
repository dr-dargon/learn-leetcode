/**
 * @since: 2022-02-06 09:38:09
 * @LastAuthor: darg0n
 * @lastTime: 2022-02-06 09:58:47
 * @FilePath: 27.remove-element
 * @Github: https://github.com/dr-dargon
 * @Author: darg0n
 * @Copyright 2022 darg0n, All Rights Reserved.
 */
package array

/**
 * @description: 移除元素(快慢指针)
 * @param {[]int} nums
 * @param {int} val
 * @return {*}
 */
func RemoveElementSlowFast(nums []int, val int) int {
	max := len(nums) // 获取数组长度
	res := 0         // 结果长度
	for i := 0; i < max; i++ {
		if val != nums[i] {
			nums[res] = nums[i]
			res++
		}
	}
	return res
}

/**
 * @description: 移除元素(穷举暴力)
 * @param {[]int} nums
 * @param {int} val
 * @return {*}
 */
func RemoveElementExhaustively(nums []int, val int) int {
	// 时间复杂度：O(n^2)
	// 空间复杂度：O(1)
	size := len(nums)
	for i := 0; i < size; i++ {
		if nums[i] == val { // 发现目标元素，数组集体向前移动
			for j := i + 1; j < size; j++ {
				nums[j-1] = nums[j]
			}
			i--    // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
			size-- // 同时数组的大小-1
		}
	}
	return size
}
