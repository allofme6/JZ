import {connect} from 'react-redux'
import {initID}  from '../actionCreator'
const mapStateToProps = (state)=>{
    return {
        userID : state.login.userID
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        initID:(id)=>{
            dispatch(initID(id))
        }
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)