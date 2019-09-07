
export default function createStore(initState) {
    let state = initState;
    let listerns = [];
    function getState(){
        return state;
    }
    // 注册一个订阅者
    function subScribe(listener){
        listerns.push(listener);
    }
    function changState(newState){
        state = newState;
        for(let listern of listerns){
            listern();
        }
    }
    return {
        getState,
        subScribe,
        changState
    }
}