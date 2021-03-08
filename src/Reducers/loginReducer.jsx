
const loginReducer = (state=false, action)=>{
    switch(action.type){
        case 'LOGIN':
            return !state;
        case 'DECREMENT':
            return state-1;
        default: 
            return state
    }
}
export default loginReducer;