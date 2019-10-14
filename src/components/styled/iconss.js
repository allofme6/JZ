import styled from 'styled-components'

import woff from 'assets/icons/iconfonts.woff'
import ttf from 'assets/icons/iconfonts.ttf'

export default (Comp) => {
  return styled(Comp) `
    @font-face {
      font-family: 'iconfont';
      src: url(${woff}) format('woff'), url(${ttf}) format('truetype')
    }
  `
}