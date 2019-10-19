import React from 'react'
import NavBar from 'components/navBar/NavBar'
import { ModifyPhoneContainer, AreaCodeBorder, InputPhoneBorde, InputPwdBorder } from './ModifyPhoneStyle'

export default (props) => {
    return (
        <ModifyPhoneContainer>
            <NavBar />
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
                                type="text" value={props.phoneNumber} 
                                onChange={props.changePhoneNumber}
                            />
                            
                        </InputPhoneBorde>
                    </div>
                    <InputPwdBorder>
                        <div className="Verification-Code">
                            <input placeholder="输入验证码" type="text"/>
                            <p>{props.remind}</p>
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