
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
    // 增加replaceReducer
    function replaceReducer(nextReducer){
        reducer = nextReducer;
        dispatch({type:Symbol()}); // 这一句是关键，因为Symbol()都是独一无二的，所以遍历的所有的reducer, type没有一个匹配到的，所以都返回了defauLt处理的state数据
    }
    return {
        getState,
        subScribe,
        dispatch,
        replaceReducer
    }
}