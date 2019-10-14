import {connect} from 'react-redux'
// import {toJs} from 'immutable'
import { handleCollect ,changeState } from '../actionCreator'

const mapStateToProps = (state)=>{
    return {
        collectActive: state.recommend.collectActive,
        color: state.recommend.color,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleCollect : ()=>{
            dispatch(handleCollect())
        },
        changeState : ()=>{
            dispatch(changeState())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)