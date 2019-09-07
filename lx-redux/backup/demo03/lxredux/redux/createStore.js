
export default function createStore(reducer,initState) {
    let state = initState;
    let listerns = [];
    function getState(){
        return state;
    }
    // 注册一个订阅者
    function subScribe(listener){
        listerns.push(listener);
    }
    function dispatch(action){
        state = reducer(state, action)
        for(let listern of listerns){
            listern();
        }
    }
    return {
        getState,
        subScribe,
        dispatch
    }
}