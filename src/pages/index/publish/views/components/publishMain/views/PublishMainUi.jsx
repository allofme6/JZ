import React from 'react'
import { PublishMainContainer , GlobalStyle} from './styleCollection'
import NavBar from './components/NavBar'
import ImagePicker from './components/imagePicker'

export default (props) => {
    return (
        <PublishMainContainer>
            <GlobalStyle />
            <NavBar></NavBar>
            <div className="publish-inputBox">
                <textarea placeholder="多多分享想法和经验。参与合适的话题会获得更多浏览"></textarea>
            </div>
            <ImagePicker></ImagePicker>
        </PublishMainContainer>
    )
}