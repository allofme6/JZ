import {connect} from 'react-redux'
// import {toJs} from 'immutable'
import { showDialog } from '../actionCreator'

const mapStateToProps = (state)=>{
    return {
        visible : state.recommend.visible
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        showDialog : ()=>{
            dispatch(showDialog())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)