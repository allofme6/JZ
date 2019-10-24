import React from 'react'
import { ImagePicker } from 'antd-mobile';


export default (props) => {
  return  <ImagePicker
            files={props.files}
            onChange={props.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={props.files.length < 7}
            multiple={true}
          />
}
