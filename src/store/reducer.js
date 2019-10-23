import {combineReducers} from 'redux'
import {reducer as recommend} from 'pages/index/recommend/'
import {reducer as profile} from 'pages/index/profile/'

export default combineReducers({
    recommend,
    profile
})