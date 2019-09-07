export default function reducer(state, action){
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