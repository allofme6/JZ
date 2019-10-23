import * as http from 'utils/http'


const thunkLoadCollection = ()=>{
    return async(dispatch)=>{
         let res = await http.Get({
             url:'/api/collection' // 我的收藏
         })
         dispatch({
             type: 'collection',
             data: res.data
         })
    }
}

const thunkLoadPublish = ()=>{
    return async(dispatch)=>{
        let res = await http.Get({
            url:'/api/publish' // 发布信息的路径
        })
        dispatch({
            type: 'profilePublish',
            data: res.data
        })
    }
}

const thunkLoadTopic = ()=>{
    return async(dispatch) =>{
        let res = await http.Get({
            url:'/api/topic' // 我的讨论
        })
        dispatch({
            type: 'profileTopic',
            data: res.data
        })
    }
}

const thunkEditCard = (data)=>{
    return async(dispatch) =>{
        let res = await http.Get({
            url: '/api/user/updateheadimg',
            data,
            method: 'POST'
        })
        dispatch({
            type: 'editCard',
            data: res.data
        })
    }
}

export{
    thunkLoadCollection,
    thunkLoadPublish,
    thunkLoadTopic,
    thunkEditCard
}