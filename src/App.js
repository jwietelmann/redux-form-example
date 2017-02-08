import React, { Component } from 'react'
import {Provider} from 'react-redux'
import logo from './logo.svg'
import './App.css'
import Widget from './Widget'
import Form from './Form'
import StateSpy from './StateSpy'

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Widget />
          <Form />
          <StateSpy />
        </div>
      </Provider>
    )
  }
}

export default App
