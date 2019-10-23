import {INIT_ID} from './actionTypes'
const defaultState = {
    userID : ""
}
export default (state = defaultState,action)=>{
    switch(action.type){
        case INIT_ID :  
        console.log(action.id,{ userID: action.id})
        return { userID: action.id}; break;
        default: return state
    }
    
}