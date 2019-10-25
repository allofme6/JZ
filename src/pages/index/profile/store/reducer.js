

export default (state = {
    profilePublishData:[]
}, action)=>{
    switch(action.type){
        case 'collection' :
            return {
                ...state,
                collectionData: action.data
            }
        case 'profilePublish':
            return{
                ...state,
                profilePublishData: action.data
            }
        case 'editCard' :
            return{
                ...state,
                userMessage:{
                    cardImg: action.data
                }
            }
        default: return state
    }   
}