/**
 * @since: 2022-02-05 17:48:05
 * @LastAuthor: darg0n
 * @lastTime: 2022-02-05 18:07:36
 * @FilePath: 704.binary-search_test
 * @Github: https://github.com/dr-dargon
 * @Author: darg0n
 * @Copyright 2022 darg0n, All Rights Reserved.
 */

package array

import (
	"testing"
	"fmt"
)

func TestBinarySearch(t *testing.T) {
	nums := []int{-1, 0, 3, 5, 9, 12}
	target := 9
	nums_2 := []int{}
	target_2 := 2
	result := BinarySearch(nums, target)
	result_2 := BinarySearch(nums_2, target_2)

	fmt.Println(result)
	fmt.Println(result_2)
	if result != 4 {
		t.Error("测试失败")
	}
	if result_2 != -1 {
		t.Error("测试失败")
	}
}
