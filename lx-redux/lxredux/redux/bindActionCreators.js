/*
 * @Author: ministar 
 * @Date: 2019-09-06 22:25:59 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-07 10:02:18
 */
// 目的是 能直接调用action
/**
 *store.dispatch({
    type:'NAME',
    value:'张三'
 })
 *
 * 改为可以这样调用
 * const actions = bindActionCreators({ incerment }, store.dispatch)
    actions.incerment();

    // incerment.js
    function incerment() {
        return { type: "INCERMENT" }
    }
 */
function bindActionCreator(actionCreators, dispatch){
    return function(){
        return dispatch(actionCreators.apply(this,arguments));// 返回的都是这个函数，最终需要执行
    }
}
export default function bindActionCreators(actionCreators, dispatch){
    // 接收2种参数格式，第一种可以是函数，就直接调用执行了，第二种是对象，这种就遍历键值对，返回的依然是键值对的形式，等调用的时候就是取键，然后调用。也就是最后调用bindActionCreators时候都需要执行一下子。
    if(typeof actionCreators == 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }
    if(typeof actionCreators !== 'object' || actionCreators === null){
        throw new Error('actionCreators必须是函数或者数组');
    }

    const keys = Object.entries(actionCreators);

    const boundActionsCreators = {};

    for(let item of keys){
        const[key, actionCreator] = item;
        if(typeof actionCreator === 'function') { // 这里为什么写成函数，为了绑定this时使用apply进行函数的执行一下子，这样就可以得到函数里return的action了，跟正常的dispatch({type:xxxx})形式一样了
            boundActionsCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    console.log("合并好的Action",boundActionsCreators);
    return boundActionsCreators;
}