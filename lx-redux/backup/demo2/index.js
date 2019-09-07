/*
 * @Author: ministar 
 * @Date: 2019-08-29 09:59:48 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-08-30 09:56:01
 */

import {createStore} from './redux/index.js';
import reducer from './reducer.js';
let initState = {
    count:0
};
let store = createStore(reducer,initState);

// 进行订阅
store.subScribe(() => {
    let state = store.getState();
    console.log('🍎', state);
})
store.dispatch({
    type:'INCREMENT'
})