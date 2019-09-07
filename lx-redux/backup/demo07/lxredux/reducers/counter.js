/*
 * @Author: ministar 
 * @Date: 2019-09-05 22:34:22 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-05 22:35:07
 */
// 设置初始值，防止没有传值时导致代码运行错误
let initState = {
    count: 0
};
export default function counter(state, action){
    state = state || initState;
    switch(action.type){
        case "INCREMENT" :
            return {
                ...state,
                count: state.count + 10
            };
        default: 
            return state;
    }

}