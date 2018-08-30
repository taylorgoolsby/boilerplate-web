import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: papayawhip;
  color: palevioletred;
`

class App extends React.Component {
  public render() {
    return (
      <StyledApp>
        Hello World!
      </StyledApp>
    )
  }
}

export default hot(module)(App)