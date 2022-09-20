/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 *
 * https://leetcode.cn/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (51.52%)
 * Likes:    1616
 * Dislikes: 0
 * Total Accepted:    845.8K
 * Total Submissions: 1.6M
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos
 * 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
 * 
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目范围是 [0, 10^4]
 * -10^5 <= Node.val <= 10^5
 * pos 为 -1 或者链表中的一个 有效索引 。
 * 
 * 
 * 
 * 
 * 进阶：你能用 O(1)（即，常量）内存解决此问题吗？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 方法一：快慢指针
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(head === null) return false
    let slow = head; let fast =  head.next
    while(fast && fast.next){
        if(slow.next == fast.next.next) return true
        slow = slow.next
        fast = fast.next.next
    }
    return false
};
// @lc code=end

// 方法二：标记法
// 给遍历过的节点打标记，如果遍历到打过标记的节点，证明有环
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    while(head){
        if(head.tag == true) return true
        head.tag = true
        head = head.next
    }
    return false
};
// @lc code=end

// 方法三：利用js
// 除非不报错，报错就是有环
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    try {
        JSON.stringify(head)
    } catch (error) {
        return true
    }
    return false
};
// @lc code=end
