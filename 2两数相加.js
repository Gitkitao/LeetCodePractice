/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 解题思路
//1.先申明两个参数代表链表头部和尾部,和一个进位的参数
//2.循环遍历,第一次循环head等于tail,new一个链表传入的参数为两个链表第一位数相加除以10取余
//3.之后的数相加存入下一个地址中,并且tail重新赋值tail.next
//4.carry每次赋值为sum除以10的向下取整
//5.l1和l2每次都判断是否还有值有的话就取下一个节点的值
//6.重点最后还得判断一次最后一次carry是否还有进位，有的话还需添加一个新的节点

var addTwoNumbers1 = function(l1, l2) {
  let head = null, tail = null
  let carry = 0
  while(l1 || l2){
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    let sum = val1 + val2 + carry
    if(!head){
      head = tail = new ListNode(sum%10)
    }else{
      tail.next = new ListNode(sum%10)
      tail = tail.next
    }
    carry = Math.floor(sum/10)
    if(l1){
      l1 = l1.next
    }
    if(l2){
      l2 = l2.next
    }
  }
  if(carry>0){
    tail.next = new ListNode(carry)
  }
  return head
};
// 看了别人的解题思路
//巧妙的点在于while循环时判断了carry，这样一来最后就不用再判断一遍carry是否大于0
var addTwoNumbers2 = function(l1, l2){
  let head  = new ListNode(0)
  let tail = head
  let carry = 0
  while(l1 || l2 || carry){
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    let sum = val1 + val2 + carry
    tail.next = new ListNode(sum % 10)
    tail = tail.next
    carry = Math.floor(sum / 10)
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  return head.next
}

// 扩展知识点
/**
 *什么是链表？
 *链表是物理存储上，非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表的指针地址实现，有一系列节点（地址）组成，节点可动态生成。
 *节点包括两部分：1.存储数据元素的数据域，2.存储指向下一个节点的指针域
 *
 * 与数组对比
 * 1.数组时一块连续的内存空间地址去存放数据
 * 2.使用多个不连续的内存空间去存储数据，可以节省内存资源
 */