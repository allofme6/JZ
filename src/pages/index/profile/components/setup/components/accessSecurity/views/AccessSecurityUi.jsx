import React from 'react'
import NavBar from 'components/navBar/NavBar'
import SetItem from 'components/setItem/SetItem'
import { OptionStyle } from './AccessSecurityStyle'
import App from 'components/modal/Modal'

export default (props) => {
    return (
        <div>
            <NavBar 
                aligns="left"
                titleText="账号安全"
                isBack = "true"
            />
            <OptionStyle>
                <SetItem 
                    title={<App name="jahah" changeRouter={()=>{props.changeRoute('/profile/setup/changePhone')}} question="是否修改手机号" title="修改手机号"></App>}
                >
                </SetItem>
                <SetItem 
                    title='修改密码'
                    handleActions={()=>{props.changeRoute('/profile/setup/changePwd')}}
                />
            </OptionStyle>
        </div>
    )
}
