import React from 'react'
import {LoginContainer,LiContainer} from './StyledLogin'


export default (props)=>{
    return ( 
       <LoginContainer>
            <div>
                <header>
                    <div>家装宝典</div>
                </header>
                <main>
                    <ul>
                        <LiContainer>
                            <div>
                                <div className='username'><img src="https://luckych.club/login/user.png" alt=""/></div>
                                <input type="text" value={props.username}  onChange={(e)=>{props.getUsername(e)}} onBlur={props.testUsername} placeholder="手机号/邮箱" maxLength='20'/>
                            </div>
                        </LiContainer>
                        <LiContainer>
                            <div>
                                <div className='password'><img src="https://luckych.club/login/lock.png" alt=""/></div>
                                <input type='password' value={props.password} onChange={(e)=>{props.getPassword(e)}} onBlur={props.testPassword} placeholder="密码长度为9个字符" maxLength='9' minLength='9'/>
                                <div className='switch' onClick={props.changeShowpassword}><img src="https://luckych.club/login/switch.png" alt=""/></div>
                            </div>
                        </LiContainer>
                    </ul>
                    <div className='sure' onClick={props.submit}>确定</div>
                    {/* <div className='forget' onClick={props.findPassword}>忘记密码</div> */}
                </main>
                <footer>
                    <ul>
                        <li onClick={props.loginClick} className={props.match.path==='/login'?'active':''}>账号登录</li>
                        <li onClick={props.registerClick} className={props.match.path==='/register'?'active':''}>快速注册</li>
                    </ul>
                </footer>
            </div>
            
       </LoginContainer>
    )
}