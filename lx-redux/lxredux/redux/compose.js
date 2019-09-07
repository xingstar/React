/*
 * @Author: ministar 
 * @Date: 2019-09-07 14:14:01 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-07 14:25:48
 */
// 函数组合 从右向左一次执行
export default function compose(...funs){
    if(funs.length == 0){
        return arg => arg;
    }
    if(funs.length === 1){
        return funs[0]
    }
    // reduce是上一个结果作为下一个的输入
    return funs.reduce((a,b)=> (...args) => a(b(...args)))
}