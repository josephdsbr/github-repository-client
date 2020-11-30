import React from 'react'
import Router from 'next/router'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import NProgress from 'nprogress'
import { SnackbarProvider } from 'nextjs-toast'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
        <Component {...pageProps} />
        <GlobalStyle />
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default MyApp
