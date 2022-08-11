/**
 * @param {number} x
 * @return {boolean}
 */

// 我的的想法是把数字转换成字符串既然是回文，那么它翻转过来也是和原来是一样的
// 那么就判断翻转前后是否相等来判断是否是回文数
var isPalindrome1 = function(x) {
  if(x < 0) return false //x为负数时一定不是回文数，直接返回false
  x = x.toString()
  let y = x.split("").reverse().join("")
  if( y==x ){
    return true
  }else{
    return false
  }
};

//看了别人的解题思路
//不转换为字符串，类比字符串reverse，数字也可以进行反转，反转的主要思想是，以10为除数，将num取余得到的数字作为后续的最高位
var isPalindrome2 = function(x) {
  if(x < 0) return false
  let y = 0 , z = x
  while(z > 9){
    y = y*10 + z%10*10
    z = Math.floor(z/10)
  }
  y = y + z //最后结束循环时y得加上个位数的z才是将整个数组进行翻转
  return x == y 
};


