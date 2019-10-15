import { Modal, Button } from 'antd-mobile'
import React from 'react'

const alert = Modal.alert;

const showAlert = (props) => {
    console.log(props)
  const alertInstance = alert('', props.question , [
    { text: '不保存', onPress: () => console.log('cancel'), style: 'default' },
    { text: '保存', onPress: () => props.changeRouter && props.changeRouter() },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};

const App = (props) => (
    <Button onClick={() => showAlert(props)}>{props.title}</Button>
)

export default App