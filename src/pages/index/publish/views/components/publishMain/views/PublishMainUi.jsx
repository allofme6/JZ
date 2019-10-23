import React from 'react'
import { PublishMainContainer , GlobalStyle} from './styleCollection'
import NavBar from './components/NavBar'
import ImagePicker from './components/imagePicker'

export default (props) => {
    console.log(props)
    return (
        <PublishMainContainer>
            <GlobalStyle />
            <div className={`cover ${props.contentToast ? 'active' : ''}`}>内容不能为空</div>
            <NavBar
                publish={props.publish}
                addDrafts={props.addDrafts}
                fromPage={props.fromPage}
            ></NavBar>
            <div className="publish-inputBox">
                <div className={`titleBox ${props.fromPage === 'publish' ? 'active' : ''}`}>
                    标题:<input
                            className="title" 
                            type="text"
                            value={props.title}
                            onChange={props.changeTitle}
                        />
                </div>
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