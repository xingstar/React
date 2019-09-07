/*
 * @Author: ministar 
 * @Date: 2019-08-29 09:59:48 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-05 10:01:57
 */

import {createStore, combineReducers} from './redux/index.js';
import couterReducer from './reducers/counter.js';
import infoReducer from './reducers/info.js';
let initState = {
    counter:{
        count:0
    },
    info:{
        name:'',
        description:''
    }
};
let reducer =  combineReducers({
    counter: couterReducer,
    info: infoReducer
});
let store = createStore(reducer,initState);

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