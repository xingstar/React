/*
 * @Author: ministar 
 * @Date: 2019-08-29 09:59:48 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-06 11:42:39
 */
// 增加的点： replaceReducer 就是之前reducer写少了，没有想写那么多，后来有追加，就把reducer替换掉
import {createStore, combineReducers} from './redux/index.js';
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
    counter: couterReducer
});
// let store = createStore(reducer, initState);
let store = createStore(reducer);
// 首先各个middle先接受的参数就是store
let logger = loggerMiddleWare(store);
let timer = timerMiddleWare(store);
// 第一步函数执行返回接收的参数就是dispatch了, 然后返回一个加强版的dispath,接收的参数依然是action
//原有的dispatch做一个引用
let currentDispatch = store.dispatch;
// 柯里化函数 + 函数组合  先执行timer的部分，然后执行loger，执行完成再返回到timer继续执行，类似洋葱穿心的模式
store.dispatch = timer(logger(currentDispatch));

let nextReducer = combineReducers({
    counter: couterReducer,
    info: infoReducer
});

store.replaceReducer(nextReducer); // 进行替换的时候，是会把state都合并一下子的，这是必须的
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