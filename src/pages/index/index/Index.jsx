import React, { PureComponent } from 'react'

import { Recommend } from '../recommend/'
import { Topic } from '../topic/'
import { Publish } from '../publish/'
import { ProfileContainer } from '../profile/'

import recommend from 'images/recommend.png'
import recommendActive from 'images/recommendActive.png'
import topic from 'images/topic.png'
import topicActive from 'images/topicActive.png'
import publish from 'images/publish.png'
import publishActive from 'images/publishActive.png'
import profile from 'images/profile.png'
import profileActive from 'images/profileActive.png'

import { Route , Link , Switch , Redirect} from 'react-router-dom'

import { IndexContainer } from './styledIndex'

class Index extends PureComponent {
    state = {
        path: this.props.location.pathname
    }

    render() {
        let path = this.props.match.url
        return (
            <IndexContainer>
                <main>
                    <Switch>
                        <Route path={`${path}/recommend`} component={Recommend} />
                        <Route path="/index/topic" component={Topic} />
                        <Route path="/index/publish" component={Publish} />
                        <Route path="/index/profile" component={ProfileContainer} />

                        <Redirect to="/index/recommend" ></Redirect>
                    </Switch>
                </main>
                <footer>
                    <ul className="tabBar">
                        <li>
                            <Link to={`${path}/recommend`}>
                                <img src={this.state.path === '/index/recommend' ? recommendActive : recommend} alt=""/>
                                <p>推荐</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${path}/topic`}>
                                <img src={this.state.path === '/index/topic' ? topicActive : topic} alt=""/>
                                <p>话题讨论</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/publish`}>
                                <img src={this.state.path === '/index/publish' ? publishActive : publish} alt=""/>
                                <p>发布</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${path}/profile`}>
                                <img src={this.state.path === '/index/profile' ? profileActive : profile} alt=""/>
                                <p>我的</p> 
                            </Link>
                        </li>
                    </ul>
                </footer>
            </IndexContainer>
        )
    }

    componentDidUpdate() {
        let path = this.props.location.pathname
        this.setState({
            path
        })        
    }

}

export default Index;