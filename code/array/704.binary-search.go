/**
 * @since: 2022-02-05 17:34:31
 * @LastAuthor: darg0n
 * @lastTime: 2022-02-05 17:45:17
 * @FilePath: 704.binary-search
 * @Github: https://github.com/dr-dargon
 * @Author: darg0n
 * @Copyright 2022 darg0n, All Rights Reserved.
 */

// 题目来源: https://leetcode-cn.com/problems/binary-search/
package array

/**
 * @description: 二分查找
 * @param {[]int} nums 元素升序的有序整数数组
 * @param {int} target 目标值
 * @return {*} 返回下标或-1
 */
func BinarySearch(nums []int, target int) int {
	// 确定数组的上下界
	min, max := 0, len(nums)-1
	for min <= max {
		mid := min + (max-min)>>1 // 右移确定中间下标
		if nums[mid] == target {
			return mid
		} else if nums[mid] > target {
			max = mid - 1
		} else {
			min = mid + 1
		}
	}
	return -1
}
