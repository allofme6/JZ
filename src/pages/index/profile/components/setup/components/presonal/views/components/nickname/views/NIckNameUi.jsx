import React from 'react'
import NavBar from 'components/navBar/NavBar'
import { InputBoxStyle , BorderReminderStyle} from './NickNameStyle'

export default (props) => {
    return (
        <div>
            <NavBar
                aligns="left"
                titleText="修改昵称"
                isBack="true"
                rightAction = {props.rightAction}
            >
                保存
            </NavBar>
            <InputBoxStyle>
                <input placeholder="请填入修改昵称" type="text" onChange={(e)=>{props.getValue(e.target.value)}}/>
            </InputBoxStyle>
            <BorderReminderStyle>
                昵称可以是中英文、数字的任意组合30天 只能修改一次哦。
            </BorderReminderStyle>
        </div>
    )
}