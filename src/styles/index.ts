import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

// Styles
import { lightGrey } from './colors'

// Global stylesheet
const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${lightGrey};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

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
