import React from 'react'
import { ForgetPasswordContainer } from './styledForgetPassword'
import { Link } from 'react-router-dom'
export default (props)=>{
    return(
        <ForgetPasswordContainer>
            <div>
                <ul>
                    <li>
                        <Link to="email">
                            通过邮箱找回密码
                        </Link>
                    </li>
                    <li>
                        <Link to='phone'>
                            通过手机号找回密码
                        </Link>
                    </li>


                </ul>
            </div>
        </ForgetPasswordContainer>
    )
}