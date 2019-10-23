import {INIT_ID} from './actionTypes'
const initID = (id)=>{
    console.log(1)
    return {
        type:INIT_ID,
        id
    }
}
export {
    initID
}