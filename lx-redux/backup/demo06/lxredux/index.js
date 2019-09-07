/*
 * @Author: ministar 
 * @Date: 2019-08-29 09:59:48 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-06 21:32:55
 */
// 增加的点： replaceReducer 就是之前reducer写少了，没有想写那么多，后来有追加，就把reducer替换掉
import {createStore, combineReducers, applyMiddleware} from './redux/index.js';
import couterReducer from './reducers/counter.js';
import infoReducer from './reducers/info.js';

// 要引入中间件了，中间件是对 dispatch 的增强，就是最后返回的还是dispatch，接收的还是action的参数
import loggerMiddleWare from './middleWare/loggerMiddleWare.js';
import timerMiddleWare from './middleWare/timerMiddleWare.js'



// let initState = {
//     counter:{
//         count:0
//     },
//     info:{
//         name:'',
//         description:''
//     }
// };

let reducer =  combineReducers({
    counter: couterReducer,
    info: infoReducer
});

const rewriteCreateStoreFunc = applyMiddleware(timerMiddleWare, loggerMiddleWare);
let store = createStore(reducer,{}, rewriteCreateStoreFunc);

// let nextReducer = combineReducers({
//     counter: couterReducer,
//     info: infoReducer
// });

// store.replaceReducer(nextReducer); // 进行替换的时候，是会把state都合并一下子的，这是必须的
// 获取当前默认状态试一把
// console.log('当前默认值', store.getState());

// 进行订阅
store.subScribe(() => {
    let state = store.getState();
    console.log('🍎', state);
})
store.dispatch({
    type:'INCREMENT'
});
store.dispatch({
    type:'NAME',
    value:'张三'
})