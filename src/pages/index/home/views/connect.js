import {connect} from 'react-redux'
// import {toJs} from 'immutable'
import {increment} from '../actionCreator'

const mapStateToProps = (state)=>{
    console.log((state.get('home')).toJS())
    return (state.get('home')).toJS()
}
const mapDispatchToProps = (dispatch)=>{
    return {
        increment : ()=>{
            dispatch(increment())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)