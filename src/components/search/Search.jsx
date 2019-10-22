import React, { Component } from 'react'

import {
  SearchContainer
} from './StyledSearch'

import { withRouter} from 'react-router-dom'

class Search extends Component {
  render() {
    return (
      <SearchContainer onClick={this.props.onChangeClick} >
        <div >
          <i >&#xe64a;</i>
          <input type="text" placeholder="花砖"/>
        </div>
      </SearchContainer>
    )
  }
}
export default withRouter(Search)
