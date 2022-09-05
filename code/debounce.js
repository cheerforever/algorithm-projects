// 防抖 
// 每次高频时间触发后n秒内函数只会执行一次， 如果n秒内高频事件再次触发，则重新计算时间
// 思路：每次触发都会取消之前的延时调用方法
function debounce(fn, delay){
    let timeout = null
    return function(){
        clearTimeout(timeout) // 每当拥护输入时把前一个settimeout clear掉
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}