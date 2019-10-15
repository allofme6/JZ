import React from 'react'
import NavBar from 'components/navBar/NavBar'
import SetItem from 'components/setItem/SetItem'
import { Modal, Button } from 'antd-mobile'
import { OptionStyle } from './AccessSecurityStyle'

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
                    title={<App question="是否修改手机号" title="修改手机号"></App>}
                    handleActions={() => {showAlert(props.question)}}
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

const alert = Modal.alert;

const showAlert = (question) => {
  const alertInstance = alert('', question , [
    { text: '不保存', onPress: () => console.log('cancel'), style: 'default' },
    { text: '保存', onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};

const App = (props) => (
    <Button onClick={() => showAlert(props.question)}>{props.title}</Button>
)