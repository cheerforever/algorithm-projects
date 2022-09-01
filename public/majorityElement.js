// 169. 多数元素
// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

//  

// 示例 1：

// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：

// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2


// 方法一：
/**
 * @param {number[]} nums
 * @return {number}
 */
    var majorityElement = function(nums) {
    let temp = nums[0]
    let times = 1
    for(let i = 1; i< nums.length; i++){
        if(nums[i] === temp){
            times++
        } else {
            times--
            if(times === 0){
                temp = nums[i+1]
                i++
            }
        }
    }
    return temp
};

// 方法二：使用了 Map 来存储遍历时的数字，以数字作为key，以重复次数为value，当我们map.get(key)存在时，便将其值加1，否则插入新的数字，并将其值设为1。

/**
 * @param {number[]} nums
 * @return {number}
 */
  var majorityElement = function(nums) {
    const map = new Map()
		for(let num of nums){
			if(!map.get(num)){
				map.set(num, 1)
			} else {
				map.set(num, map.get(num)+1)
				if(map.get(num) > nums.length/2){
					return num
				}
			}
		}
};