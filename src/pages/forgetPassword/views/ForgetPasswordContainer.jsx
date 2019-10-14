import React from 'react'
import ForgetPasswordUI from './ForgetPasswordUI'
import {withRouter} from 'react-router-dom'
class ForgetPassword extends React.PureComponent{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log(this.props.match)
    }
    render(){
        return (
            <ForgetPasswordUI match='this.props.match'>
            </ForgetPasswordUI>
        )
    }
}
export default withRouter(ForgetPassword)