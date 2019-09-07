/*
 * @Author: ministar 
 * @Date: 2019-08-29 09:59:48 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-08-30 09:32:45
 */

import {createStore} from './redux/index.js';
let initState = {
    counter:{
        count:0
    },
    info:{
        name:'',
        description:''
    }
};
let store = createStore(initState);

// 进行订阅
store.subScribe(() => {
    let state = store.getState();
    console.log('🍎', state);
})
store.changState({
    ...store.getState(),
    info:{
        name:'ministar',
        description:'分析redux'
    }
});
setTimeout(function(){
    store.changState({
        ...store.getState(),
        info:{
            name:'ministar11',
            description:'分析redux11'
        },
        counter:{
            count: 2
        }
    });
},2000);