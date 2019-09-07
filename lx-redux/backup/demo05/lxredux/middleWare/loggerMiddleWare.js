const loggerMiddle =  (store) => (nextDispatch) => (action) => {
    console.log('logger查看状态', store.getState());
    nextDispatch(action);
    console.log('logger之后的状态', store.getState());
    console.log('loger============')
}

export default loggerMiddle;