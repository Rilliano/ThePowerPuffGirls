// Global stylesheet
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

// Styles
import { lightGrey } from './colors'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};


  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${lightGrey};

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
