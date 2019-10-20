import React from 'react'
import NavBar from 'components/navBar/NavBar'
import { ModifyPhoneContainer, AreaCodeBorder, InputPhoneBorde, InputPwdBorder } from './ModifyPhoneStyle'
import { Button, Toast } from 'antd-mobile'

function showToast(info, sendMessage) {
    Toast.config(
        {
            duration: 1
        }
    )
    if(!(/^1[3456789]\d{9}$/.test(info)) && sendMessage === 'true'){ 
        Toast.info('请输入正确的手机号')
    }
}

export default (props) => {
    return (
        <ModifyPhoneContainer
        loginButton={props.loginButton}        
        >
            <NavBar
                isBack={true}
            />
            <div className="ChangeBindPhone">
                <h2>修改手机号</h2>
                <div className="inputBox">
                    <div className="phoneNumber">
                        <AreaCodeBorder>
                            <div className="AreaCode">+86</div>
                        </AreaCodeBorder>
                        <InputPhoneBorde>
                            <input 
                                placeholder="请输入手机号"
                                type="text"
                                value={props.phoneNumber}
                                onChange={props.changePhoneNumber}
                            />
                        </InputPhoneBorde>
                    </div>
                    <InputPwdBorder
                    sendmessage={props.sendMessage}
                    >
                        <div className="Verification-Code">
                            <input 
                                placeholder="输入验证码" 
                                value={props.verificationCode}
                                onChange={props.changeCode}
                                type="text" 
                            />
                            <p onClick={props.getVerificationCode}><Button onClick={() => showToast(props.phoneNumber, props.sendMessage)}>{props.remind}</Button></p>
                        </div>
                    </InputPwdBorder>
                    <p className="problem">遇到问题?</p>
                    <div className="submit">
                        提交
                    </div>
                </div>
            </div>
        </ModifyPhoneContainer>
    )
}