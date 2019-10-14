import styled from 'styled-components'

import woff from 'assets/icons/iconfontz.woff'
import ttf from 'assets/icons/iconfontz.ttf'

export default (Comp) => {
  return styled(Comp) `
    @font-face {
      font-family: 'iconfont';
      src: url(${woff}) format('woff'), url(${ttf}) format('truetype')
    }
  `
}