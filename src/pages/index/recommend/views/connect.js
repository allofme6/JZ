import {connect} from 'react-redux'
// import {toJs} from 'immutable'
import {increment} from '../actionCreator'

const mapStateToProps = (state)=>{
    return (state.get('recommend')).toJS()
}
const mapDispatchToProps = (dispatch)=>{
    return {
        increment : ()=>{
            dispatch(increment())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)