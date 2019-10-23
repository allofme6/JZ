import {combineReducers} from 'redux'
import {reducer as recommend} from 'pages/index/recommend/'
import {reducer as login} from 'pages/login/'

export default combineReducers({
    recommend,
    login
})