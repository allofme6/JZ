import React from 'react'
import { NavBarBorderContainer } from '../styleCollection'
import back from 'images/back.png'
import { withRouter } from 'react-router-dom'
import { Modal, Button } from 'antd-mobile'


export default withRouter((props) => {
    return (
        <NavBarBorderContainer>
            <div className="publish-back" onClick={() => handleBack(props)}>
                <img src={back} alt=""/>
            </div>
            <div className="publish-operation">
                <div className="publish-drafts">
                    <App question="要保存到草稿箱吗？" title="草稿箱"></App>
                </div>
                <div onClick={props.publish} className="publish-save">
                    发布
                </div>
            </div>
        </NavBarBorderContainer>
    )
})

function handleBack(props) {
    props.history.goBack()
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
