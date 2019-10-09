import React, { Component } from 'react'

import { Recommend } from '../recommend/'
import { Topic } from '../topic/'
import { Publish } from '../publish/'
import { Profile } from '../profile/'

import recommend from 'images/recommend.png'
import topic from 'images/topic.png'
import publish from 'images/publish.png'
import profile from 'images/profile.png'

import { Route , Link , Switch , Redirect} from 'react-router-dom'

import { IndexContainer } from './styledIndex'

class Index extends Component {
    render() {
        let path = this.props.match.url
        return (
            <IndexContainer>
                <main>
                    <Switch>
                        <Route path={`${path}/recommend`} component={Recommend} />
                        <Route path="/index/topic" component={Topic} />
                        <Route path="/index/publish" component={Publish} />
                        <Route path="/index/profile" component={Profile} />
                        <Redirect to="/index/recommend" ></Redirect>
                    </Switch>
                </main>
                <footer>
                    <ul className="tabBar">
                        <li>
                            <Link to={`${path}/recommend`}>
                                <img src={recommend} alt=""/>
                                <p>推荐</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${path}/topic`}>
                                <img src={topic} alt=""/>
                                <p>话题讨论</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/publish`}>
                                <img src={publish} alt=""/>
                                <p>发布</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${path}/profile`}>
                                <img src={profile} alt=""/>
                                <p>我的</p> 
                            </Link>
                        </li>
                    </ul>
                </footer>
            </IndexContainer>
        )
    }

    componentDidMount() {
        console.log(this)
    }
}

export default Index;