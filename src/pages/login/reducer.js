import {INIT_ID} from './actionTypes'
const defaultState = {
    userMessage : {}
}
export default (state = defaultState,action)=>{
    switch(action.type){
        case INIT_ID :  
        console.log(action.id,{ userMessage: action.id})
        return { userMessage: action.id}; break;
        default: return state
    }
    
}