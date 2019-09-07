/*
 * @Author: ministar 
 * @Date: 2019-08-29 09:59:48 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-07 09:53:00
 */
// 增加的点： replaceReducer 就是之前reducer写少了，没有想写那么多，后来有追加，就把reducer替换掉
import {createStore, combineReducers, applyMiddleware, bindActionCreators} from './redux/index.js';
import couterReducer from './reducers/counter.js';
import infoReducer from './reducers/info.js';

// 要引入中间件了，中间件是对 dispatch 的增强，就是最后返回的还是dispatch，接收的还是action的参数
import loggerMiddleWare from './middleWare/loggerMiddleWare.js';
import timerMiddleWare from './middleWare/timerMiddleWare.js'

// 引入actions
import increment from './actions/count.js';
import nameInfo from './actions/info.js';


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
// store.dispatch({
//     type:'INCREMENT'
// });
// store.dispatch({
//     type:'NAME',
//     value:'张三'
// })

// 这种是传递对象过去的
// const actions = bindActionCreators({increment,nameInfo}, store.dispatch)
// actions.increment();
// actions.nameInfo(); // 这里调用的方法名，bindActionCreators参数里传递的名字是要保持一致的。因为就是用的参数的这个值做的键值，保存对应的action的

// 这种是直接传递函数过去的，这两种方式都可以达到直接调用action,而不是放到dispatch的参数里的目的
bindActionCreators(increment, store.dispatch)();
bindActionCreators(nameInfo, store.dispatch)();