/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// 暴力解法双重循环
var twoSum1 = function(nums, target){
  for(let i = 0, len = nums.length; i < len; i++ ){
    // j为i的后一位，但是最大值依然是小于nums的总长
    for(let j = i + 1; j < len; j++){
      if(nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
  return []
};

//看了别人的解题思路，利用hashmap方法进行解决
/**
 *1.首先创建一个map对象（map是叫做字典的数据结构）
 *2.遍历一遍数组
 *3.在遍历数组时，判断字典中是否存在与目标值、当前值之差相等的键
 *4.如果有则返回map中的键和当前i的数组，没有则在map中设置键名num[i]对应的键值为i
 */
var twoSum2 = function(nums, target) {
  let map = new Map();
  for(let i = 0,len = nums.length; i<len;i++){
    if(map.has(target-nums[i])){
      return [map.get(target-nums[i]),i]
    }else{
      map.set(nums[i],i)
    }
  }
  return []
};

// 扩展知识点
/**
 *Map是一种叫做字典的数据结构
 */

let map = new Map();
//增：map.set(key,value);
map.set('a',1);
//删：map.delete(key);
map.delete('a');
//改：map.set(key);
map.set('a',2);
//查：map.has(key);===>true&false
map.has('a')