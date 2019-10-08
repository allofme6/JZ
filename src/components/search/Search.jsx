import React, { Component } from 'react'

import {
  SearchContainer
} from './StyledSearch'

export default class Search extends Component {
  render() {
    return (
      <SearchContainer>
        <div>
          <i>&#xe64a;</i>
          <input type="text" placeholder="花砖"/>
        </div>
      </SearchContainer>
    )
  }
}
