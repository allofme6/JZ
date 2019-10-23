import React from 'react'
import { PublishContainer , OptionStyle } from './StylePublish'
import { GlobalStyle} from 'components/styled/styledPublish'
import { ActionSheet } from 'antd-mobile'

import camera from 'images/publish/camera.png'
import cameraBg from 'images/publish/cameraBg.png'
import close from 'images/publish/close.png'
import closeBg from 'images/publish/closeBg.png'
import house from 'images/publish/house.png'

export default (props) => {
    return (
        <PublishContainer>
            <GlobalStyle />
            <OptionStyle />
            <div className="publish-container">
                <p className="publish-jiazhuang">家装宝典</p>
                <h2 className="publish-word">为你发布精美家装</h2>
                <div className="publish-houseicon">
                    <img src={house} alt=""/>
                </div>
                <div className="publish-closebg">
                    <img src={closeBg} alt=""/>
                </div>
                <div className="publish-close" onClick={props.onBack}>
                    <img src={close} alt=""/>                    
                </div>
                <div className="pulish-camerabg">
                    
                    <img src={cameraBg} alt=""/>
                </div>
                <div className="publish-camera">
                    <input type="file" 
                        accept="image/*" 
                        capture="camera"
                        multiple="multiple" id="file" 
                        onChange={(e)=>{props.handlecamera(e)}} 
                    /> 
                    <img src={camera} alt=""/>
                </div>
            </div>
        </PublishContainer>
    )
}

let showActionSheet = () => {
    const BUTTONS = ['拍照', '从手机相册选择', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
    //   destructiveButtonIndex: BUTTONS.length - 2,
      maskClosable: true,
      'data-seed': 'logId',
    },
    (buttonIndex) => {
    //   this.setState({ clicked: BUTTONS[buttonIndex] });
    })
}
