import {connect} from 'react-redux'

import {
  thunkLoadCollection,
  thunkLoadPublish,
  thunkLoadTopic,
  thunkEditCard
} from './actionCreator'

import card from 'images/profile/cardImg.png'

const mapState = (state) => {
    return {
      userMessage: {
          userName: '可爱的小用户',
          cardImg: card
      },
      ProfilePublishData:{
        // 发布的信息
      }
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
    loadTopic(){
      dispatch(thunkLoadTopic())
    },
    editCard(data){
      dispatch(thunkEditCard(data))
    }
  }
}

export default connect(mapState,mapDispatch)