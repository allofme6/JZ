import React from 'react'
import NavBar from 'components/navBar/NavBar'
import { InputBoxStyle , BorderReminderStyle} from './NickNameStyle'

export default (props) => {
    return (
        <div>
            <NavBar
                aligns="left"
                titleText="修改昵称"
            />
            <InputBoxStyle>
                <input placeholder="请填入修改昵称" type="text"/>
            </InputBoxStyle>
            <BorderReminderStyle>
                昵称可以是中英文、数字的任意组合30天 只能修改一次哦。
            </BorderReminderStyle>
        </div>
    )
}