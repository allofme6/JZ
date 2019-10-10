import React from 'react'
import { NavBarBorderContainer } from '../styleCollection'
import back from 'images/back.png'
import { withRouter } from 'react-router-dom'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile'

export default withRouter((props) => {
    return (
        <NavBarBorderContainer>
            <div className="publish-back" onClick={() => handleBack(props)}>
                <img src={back} alt=""/>
            </div>
            <div className="publish-operation">
                <div className="publish-drafts">
                    草稿箱
                </div>
                <div className="publish-save">
                    发布
                </div>
            </div>
            <Button onClick={showAlert}>customized buttons</Button>
        </NavBarBorderContainer>
    )
})

function handleBack(props) {
    props.history.goBack()
}

var showAlert = () => {
    const alertInstance = alert('Delete', 'Are you sure???', [
      { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
      { text: 'OK', onPress: () => console.log('ok') },
    ]);
    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log('auto close');
      alertInstance.close();
    }, 500000);
  };