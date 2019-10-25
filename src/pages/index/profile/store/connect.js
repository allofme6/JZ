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
    loadPublish(){
      dispatch(thunkLoadPublish())
    },
    editCard(data){
      dispatch(thunkEditCard(data))
    }
  }
}

export default connect(mapState,mapDispatch)