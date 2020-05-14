import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './App'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    text-decoration: none;
  }
  
  html {
    scroll-behavior: smooth;
  }
  html {
  font-size: 16px;
  }

  @media (max-width: 900px) {
    html { font-size: 14px; }
  }

  @media (max-width: 400px) {
    html { font-size: 12px; }
  }

  a:visited {
    color: inherit;
  }

  button {
    outline: none;
    color: inherit;
  }

`
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
