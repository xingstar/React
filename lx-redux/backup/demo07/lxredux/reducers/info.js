/*
 * @Author: ministar 
 * @Date: 2019-09-05 22:35:45 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-09-05 22:38:53
 */
// 设置state的初始值
let initState = {
    name:'default name',
    value:''
};
export default function info(state, action){
    state = state || initState;
    switch(action.type){
        case "NAME" :
            return {
                ...state,
                name: action.value
            };
        default: 
            return state;
    }

}