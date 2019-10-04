import React, { Component } from 'react';
import HomeUi from './HomeUi'
import connect from './connect'
class HomeContainer extends Component {
    render() {
        return (
            <div>
                HomeContainer/{this.props.count}
                <HomeUi></HomeUi>
            </div>
        );
    }
    componentDidMount(){
        this.props.increment()
    }
}

export default connect(HomeContainer);