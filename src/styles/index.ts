// Global stylesheet
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};


  html,
  body {
    margin: 0;
    padding: 0;

    @media all and (-ms-high-contrast:none) {
      overflow-x: hidden;
    }

    img {
      max-width: 100%;
    }

    a {
      text-decoration: none;
    }
  }
`

export default GlobalStyle
