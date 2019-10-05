export const increment = ()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type:'increment'
            })
        },3000)
    }
}