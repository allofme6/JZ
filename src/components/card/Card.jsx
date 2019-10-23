import React, { Component } from 'react';
import {CardContainer} from './StyledCard'




class Card extends Component {
    render() {
        return (
            <CardContainer 
                left={this.props.left} 
                top={this.props.top} 
                onClick={()=>{this.props.handleClick && this.props.handleClick(this.props.type)}}>
                    <div className="card-img-box">
                        <img src={this.props.cardImg} alt=""/>
                    </div>
            </CardContainer>
        );
    }
}

export default Card;