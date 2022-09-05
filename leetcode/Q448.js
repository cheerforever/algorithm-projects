/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 *
 * https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (65.83%)
 * Likes:    1063
 * Dislikes: 0
 * Total Accepted:    228.3K
 * Total Submissions: 346.8K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums
 * 中的数字，并以数组的形式返回结果。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,1]
 * 输出：[2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 
 * 1 
 * 
 * 
 * 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 遍历1至n个数，判断每个数是否在nums数组中，不在则push到结果数组中。最后返回结果数组
var findDisappearedNumbers = function(nums) {
    const len = nums.length
    let result = []
    for(let i = 1; i<= len; i++){
        if(nums.indexOf(i) < 0){
            result.push(i)
        }
    }
    return result
};
// @lc code=end

