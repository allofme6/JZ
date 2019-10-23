const defaultState = {
    masagee: '23'
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case 'collection' :
            return {
                ...state,
                collectionData: action.data
            }
        case 'profilePublish':
            return{
                ...state,
                ProfilePublishData: action.data
            }
        case 'profileTopic':
            return{
                ...state,
                profileTopicData : action.data
            }
        case 'editCard' :
            console.log(action.data);
            return{
                ...state,
                userMessage:{
                    cardImg: action.data
                }
            }
        default: return state
    }   
}