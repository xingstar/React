/*
 * @Author: ministar 
 * @Date: 2019-09-05 09:30:10 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-05 10:03:47
 */

export default function combineReducers(reducers) {
    // 先把所有的reducer的键值取到， 这时reducers的对象书写规则就有要求了，键值就是要合并的reducer的名称
    /**
     * {
     *      couter: couterReducer,
     *      info: infoReducer
     * }
     */
    let couterKeys = Object.keys(reducers);
    console.log(couterKeys);
    // 返回的比然还是一个reducer的函数, 当然reducer必然接收的2个参数依然是state和action
    return function combine(state={}, action){
        let nextState = {};
        for(let item of couterKeys){
            let reducer = reducers[item]; // 把每一个reducer取出来
            let preState = state[item]; // 每次改变之后的state，作为下一个reducer中的初始state, 目的就是把state都依次保留下来
            nextState[item] = reducer(preState,action);
        }
        return nextState;
    }
}