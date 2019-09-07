export default function info(state, action){
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