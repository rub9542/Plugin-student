import React from 'react'
import Routers from './routes'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`

const App = ({ token }) => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routers token={token} />
    </BrowserRouter>
  )
}

export default App
