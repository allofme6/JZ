import React from 'react'
import {RegisterContainer1,RegisterContainer2,LiContainer} from './StyledRegister'


export default (props)=>{
    let RegisterContainer = props.showPasswordInput?RegisterContainer2:RegisterContainer1
    return ( 
       <RegisterContainer>
            <div>
                <header>
                    <div>家装宝典</div>
                </header>
                <main>
                    <ul>
                        <LiContainer>
                            <div>
                                <div className='user'><img src="https://luckych.club/register/user.png" alt=""/></div>
                                <input type="text" value={props.phoneNumber} onChange={(e)=>{props.getPhoneNumber(e)}} onBlur={props.testPhoneNumber} placeholder="请输入手机号" maxLength='12'/>
                            </div>
                        </LiContainer>
                        <LiContainer>
                            <div>
                                <div className='lock'><img src="https://luckych.club/register/verificationCode.png" alt=""/></div>
                                <input type="text" maxLength='6' value={props.verificationCode} onChange={(e)=>{props.getverificationCode(e)}} onBlur={props.testverificationCode}  />
                                { props.testState==='send'?<p onClick={props.sentToast}>获取验证码</p>:(props.testState==='time'?<p >{props.count}</p>:<p onClick={props.sentToast}>重新获取</p>)}
                                
                            </div>
                        </LiContainer>
                        {
                            props.showPasswordInput?
                            (<LiContainer>
                                <div>
                                    <div className='password'><img src="https://luckych.club/register/lock.png" alt=""/></div>
                                    <input type={props.showPassword?'text':'password'} value={props.password} onChange={(e)=>{props.getPassword(e)}} onBlur={props.testPassword} placeholder="密码长度为9个字符" maxLength='9' minLength='9'/>
                                    <div className='switch' onClick={props.changeShowpassword}><img src="https://luckych.club/register/switch.png" alt=""/></div>
                                </div>
                            </LiContainer>)
                            :
                            ''

                        }
                        
                    </ul>
                    <div onClick={props.submit}>确定</div>
                </main>
                <footer>
                    <ul>
                        <li onClick={props.loginClick} className={props.match.path==='/login'?'active':''}>账号登录</li>
                        <li onClick={props.registerClick} className={props.match.path==='/register'?'active':''}>快速注册</li>
                    </ul>
                </footer>
            </div>
            
       </RegisterContainer>
    )
}