/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let length = nums.length
    for(let i = 0; i < length;i++){
        if(nums[i] === 0){
            nums.push(0)
            nums.splice(i, 1)
            //当移动到末尾的元素，就不用再一次进行遍历了，所以遍历的长度要减去1位
            length--
            //当为0的元素删除后，下一个元素就会前进一位占据该位置，所以要从该位置在进行判断
            i--
        } 
    }
    return nums
};
// @lc code=end

// 快慢指针

// 慢指针移动条件：快指针指向的元素不等于0时
// 慢指针左边均为非零数，慢指针的右边直到快指针的范围均为0

var moveZeroes = function(nums) {
    let slow = 0, fast = 0
    while(fast < nums.length){
        if(nums[fast] !== 0){
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++
        }
        fast++
    }
};
