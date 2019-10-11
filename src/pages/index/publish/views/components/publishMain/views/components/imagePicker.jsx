import React from 'react'
import { ImagePicker, WingBlank } from 'antd-mobile';

const data = [
    {
        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        id: '2122',
    }
]

class ImagePickerExample extends React.Component {
  state = {
    files: data,
    multiple: true
  }

  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }

  render() {
    const { files } = this.state;
    return (
      <WingBlank>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
      </WingBlank>
    )
  }
}

export default ImagePickerExample