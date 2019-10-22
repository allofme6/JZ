import React from 'react'
import { PublishMainContainer , GlobalStyle} from './styleCollection'
import NavBar from './components/NavBar'
import ImagePicker from './components/imagePicker'

export default (props) => {
    console.log(props)
    return (
        <PublishMainContainer>
            <GlobalStyle />
            <NavBar
                publish={props.publish}
            ></NavBar>
            <div className="publish-inputBox">
                <textarea
                    placeholder="多多分享想法和经验。参与合适的话题会获得更多浏览"
                    value={props.publishContent}
                    onChange={props.textareaContent}
                >
                </textarea>
            </div>
            {/* <ImagePicker
                files={props.files}
                onChange={props.onChange}
            ></ImagePicker> */}
            <div className="imgWarp">
                {
                    props.files.map((item, index) => {
                        console.log(item.url)
                        return (
                            <div
                                key={index} 

                                className="imgBox" 
                                style={{
                                    backgroundImage: `url(${item.url})`,
                                    backgroundSize: 'cover'         
                            }}>
                                <div onClick={() => props.deleteImage(index)} className="icon"></div>
                            </div>
                        )
                    })
                }
                <div className="chooseImage">
                    <input type="file" 
                        accept="image/*" 
                        multiple="multiple" 
                        id="file" 
                        onChange={(e)=>{props.chooseImg(e)}} 
                    /> 
                </div>
            </div>
            
        </PublishMainContainer>
    )
}