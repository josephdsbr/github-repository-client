import { lighten } from 'polished'
import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    &::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.scrollBackground};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => lighten(0.1, props.theme.colors.scroll)};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => lighten(0.2, props.theme.colors.scroll)};
    }

    @media (max-width: 800px) {
      &::-webkit-scrollbar {
        width: 7px;
      }
    }
  }

  body {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    font: 400 16px Roboto, sans-serif;
  }

  body, html, #__next {
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .MuiSnackbar-root {
  }
`
