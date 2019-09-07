/*
 * @Author: ministar 
 * @Date: 2019-09-06 11:52:07 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-06 22:06:29
 * @description:  目的是啥，目的就是为了自动组合中间件， 看看怎么用
 */
// 将中间件 组成一个数组依次执行
export default function applyMiddleware(...middlewares) {
    return createStore => (...args) => { // ...args里是reducer 和 state
        let store = createStore(...args);
        // 1、还是调用所有的中间件
        // 2、目的还是依次执行
        let dispatch = store.dispatch;
        const chain = middlewares.map(middleware => middleware(store)); // 就是把每一个中间件执行了第一层，返回的都是接收dispach那一层的函数了
        chain.reverse().map(middleware => dispatch = middleware(dispatch));
        console.log('生成的结果', dispatch);
        store.dispatch = dispatch;
        return store;
    }
}