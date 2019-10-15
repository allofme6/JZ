import React from 'react';

import {ChangePwContainer,Input} from './StyledChangePw';

import NavBar from 'components/navBar/NavBar';


export default (props)=>{
    return (
        <ChangePwContainer isBtnClick={props.isBtnClick}>
            <NavBar 
                isBack = 'true'
            />
            <h3>修改密码</h3>
            <div className="inputList">
                <Input>
                    <input placeholder="请输入原始密码"  type="password" onChange={props.original}/>
                </Input>
                <Input>
                    <input placeholder="请输入新密码"  type="password" onChange={props.newpwd}/>
                </Input>
                <Input>
                    <input placeholder="请确认新密码"  type="password" onChange={props.confirmpwd}/>
                </Input>
            </div>
            <div className="submit" onClick={props.handleSubmit}>
                <div>提交</div>
            </div>
        </ChangePwContainer>
    )
}



