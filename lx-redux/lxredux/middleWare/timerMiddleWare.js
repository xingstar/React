/*
 * @Author: ministar 
 * @Date: 2019-09-06 11:39:24 
 * @Last Modified by:   ministar 
 * @Last Modified time: 2019-09-06 11:39:24 
 */

// time中间件， 接收的第二个next就是原先的dispatch方法，系列操作处理完成之后把原来的dispatch方法原封不动返回回去，接收的依然是action的参数

const timerMiddle = (store) => (nextDispatch) => (action) => {
    console.log('时钟状态', store.getState());
    console.log("timer  action", action);
    nextDispatch(action);
    console.log("时钟之后的状态", store.getState());
    console.log('timer=============');
}
export default timerMiddle;