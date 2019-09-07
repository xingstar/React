### ministar 跟着 分析 redux  React16.8新API+ 原理深入2  1:11:00

Redux分析
回一下第一周刚来的第一节
1、容器的概念  范畴论 世界对象和对象之间的关系 
container -> store
__value => currentState
f  => action
map => currentReducer
IO函子 => middleware
2.------------------------------------
applyMiddleware.js     redux管理中间件
bindActionCreators.js   能让我们直接的调用action
combineReducers.js     合并reducer
compose.js              组合函数 
createStore.js           创建一个store容器
index.js                
utils
3.react 纯函数
4.状态不能被修改


一步一步编写一个redux 
第一步：demo1
    创建createStore, createStore只接受一个state参数，有getState/subScribe方法

第二步：
    加入reducer, reducer是进行创建状态规则的， 不能瞎搞，谁都可以改变state，那是不行的，必须有reducer进行统一的管理， 所以reducer接收2个参数一个是要改变的state的数据，一个是action,action里就是规定的规则，比如加、减、设置名字、设置描述等
