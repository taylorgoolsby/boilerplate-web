import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  public render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

export default hot(module)(App)