import {Map} from 'immutable'

const defaultState = Map({
    count:1
})

export default (state = defaultState,action)=>{
    switch (action.type) {
        case 'increment':
            return state.set('count', state.get('count') + 1)
        default:
            return state
    }
}