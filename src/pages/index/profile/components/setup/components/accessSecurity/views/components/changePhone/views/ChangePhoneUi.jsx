import React from 'react'
import { ChangePhoneContainer, InputBorderStyle } from './ChangePhoneStyle'
import NavBar from 'components/navBar/NavBar'
import { Button, Toast } from 'antd-mobile'

function showToast(info, changeRoute) {
    Toast.config(
        {
            duration: 1
        }
    )
    if(info.code === 1) {
        changeRoute()
    }else {
        Toast.info(info.message);
    }
}

export default (props) => {
    return (
        <ChangePhoneContainer>
            <NavBar>
                <Button onClick={() => showToast(props.promptInformation , props.changeRoute)}>下一步</Button>
            </NavBar>
            <div className="Verify">
                <h2>验证登陆密码</h2>
                <p>请输入登陆密码，以验证身份</p>
                <InputBorderStyle>
                    <input type="text" value={props.passWord} onChange={props.changePassWord} />
                </InputBorderStyle>
            </div>
        </ChangePhoneContainer>
    )
}

