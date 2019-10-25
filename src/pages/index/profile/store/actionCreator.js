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

const thunkLoadPublish = (uid)=>{
    return async(dispatch)=>{
        let res = (await http.Get({
            url:'/api/findbyuid',
            params:{
                uId: 1
            }
        })).data
        dispatch({
            type: 'profilePublish',
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
    thunkEditCard
}