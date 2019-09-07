export default function counter(state, action){
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