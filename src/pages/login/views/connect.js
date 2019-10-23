import {connect} from 'react-redux'
import {initID}  from '../actionCreator'
const mapStateToProps = (state)=>{
    return {
        userMessage : state.login.userMessage
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        initID:(id)=>{
           return dispatch(initID(id))
        }
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)