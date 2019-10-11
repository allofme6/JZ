import React from 'react'
import { PublishContainer , OptionStyle } from './StylePublish'
import { GlobalStyle} from 'components/styled/styledPublish'
import { ActionSheet } from 'antd-mobile';

export default (props) => {
    return (
        <PublishContainer>
            <GlobalStyle />
            <OptionStyle />
            <div className="publish-container">
                <p className="publish-jiazhuang">家装宝典</p>
                <h2 className="publish-word">为你发布精美家装</h2>
                <div className="publish-houseicon">
                    <img src="https://upload-images.jianshu.io/upload_images/18464133-227039e6be393346.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                </div>
                <div className="publish-closebg">
                    <img src="https://upload-images.jianshu.io/upload_images/18464133-a8f9594483db7156.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                </div>
                <div className="publish-close" onClick={props.onBack}>
                    <img src="https://upload-images.jianshu.io/upload_images/18464133-b15b1760fb48faaa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>                    
                </div>
                <div className="pulish-camerabg">
                    <img src="https://upload-images.jianshu.io/upload_images/18464133-2a47db1a8b2f70bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                </div>
                <div className="publish-camera" onClick={showActionSheet}>
                    <img src="https://upload-images.jianshu.io/upload_images/18464133-ec9d0d4d26d93ef5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
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
