// 节流
// 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
// 思路： 每次触发事件时都判断当前是否有等待执行的延时函数
function throttle(fn, delay){
    let canRun = true
    return function (){
        if(!canRun) return;
        canRun = false; // 立即设置为false
        setTimeout(() => {
            fn.apply(this, arguments)
            canRun = true; // 最后在settimeout执行完毕后再把标记设置为true；表示可以执行下一次循环了
        }, delay);
    }
}