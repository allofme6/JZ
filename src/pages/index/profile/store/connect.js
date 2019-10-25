import {connect} from 'react-redux'

import {
  thunkLoadCollection,
  thunkLoadPublish,
  thunkEditCard
} from './actionCreator'


import store from 'store'

const mapState = (state) => {
    return {
      userMessage: store.get("userMessage"),
      profilePublishData: state.profile.profilePublishData
    }
  }

const mapDispatch = (dispatch)=>{
  return{
    loadCollection(){
      dispatch(thunkLoadCollection())
    },
    loadPublish(uid){
      dispatch(thunkLoadPublish(uid))
    },
    editCard(data){
      dispatch(thunkEditCard(data))
    }
  }
}

export default connect(mapState,mapDispatch)