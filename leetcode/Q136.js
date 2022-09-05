// 136. 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2,2,1]
// 输出: 1
// 示例 2:

// 输入: [4,1,2,1,2]
// 输出: 4

// 我的解法
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const arr = nums.sort()
    let res = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(res !== arr[i+1]){
            return res
        } else {
            i++
            res = arr[i+1]
        }
    }
    return res
};

// 位运算解法
// 使用位运算符^即可（注意位运算只针对数的整数部分，所以位运算最后的结果永远只保留整数部分）
// 该运算符的特点是：

// x ^ 0 === x
// x ^ x === 0
// 而这道题中，已经说明了，除了唯一的数，其他数字都出现了两次。
// 根据异或的特点，出现了两次的数进行异或后为0，而只出现了一次的数与0进行异或，为唯一出现的数。

// reduce: 计算数组元素相加后的总和
/**
* @param {number[]} nums
* @return {number}
*/
var singleNumber = function(nums) {
    return nums.reduce((pre, cur) => {
            return pre ^ cur;
    }, 0);
};
