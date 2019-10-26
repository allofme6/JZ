import React from 'react'
import { ChangePhoneContainer, InputBorderStyle } from './ChangePhoneStyle'
import NavBar from 'components/navBar/NavBar'
import { Button, Toast } from 'antd-mobile'



function showToast(info, changeRoute,pwd,repwd) {
    if(pwd===repwd){
        changeRoute()
    }else{
        Toast.fail('密码输入有误请重新输入',1)
    }
}


const ChangPhoneUi = (props) => {
    return (
        <ChangePhoneContainer>
            <NavBar
                isBack={true}
            >
                <Button onClick={() => showToast(props.promptInformation , props.changeRoute,props.userpassword,props.passWord)}>下一步</Button>
            </NavBar>
            <div className="Verify">
                <h2>验证登陆密码</h2>
                <p>请输入登陆密码，以验证身份</p>
                <InputBorderStyle>
                    <input type="password" value={props.passWord} onChange={props.changePassWord} />
                </InputBorderStyle>
            </div>
        </ChangePhoneContainer>
    )
}

export default ChangPhoneUi