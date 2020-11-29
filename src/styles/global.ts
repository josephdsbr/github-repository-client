import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: ${props => props.theme.colors.text};
    background: #13c586;
    font: 400 16px Roboto, sans-serif;
  }

  body, html, #__next {
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }
`
