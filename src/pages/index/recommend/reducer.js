const defaultState = {
    collectActive:false,
    color: false,
}

export default  (state=defaultState, action) =>{
    switch (action.type){
        case 'handleCollect':
            return {
                collectActive: !state.collectActive,
                color: state.color
            }
        case 'changeState':
            return {
                color: ! state.color,
                collectActive: state.collectActive,
            }
            default:
                return state
    }
}