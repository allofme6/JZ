import React, { Component } from 'react';
import {CardContainer} from './StyledCard'


import card from 'images/profile/cardImg.png'

class Card extends Component {
    render() {
        return (
            <CardContainer 
                left={this.props.left} 
                top={this.props.top} 
                onClick={()=>{this.props.handleClick(this.props.type)}}>
                <img src={card} alt=""/>
            </CardContainer>
        );
    }
}

export default Card;