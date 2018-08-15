import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to OB lives</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Clock extends React.Component {
    render() {
        return (
            <div className="Clock">
                <h1>Hello, world!</h1>
                <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
            </div>
            );
    }
}

//function tick() {
//   render(){
//        return(
//          <Clock date={new Date()} />,
//          document.getElementById('example')
//        );
//    }
//}

//setInterval(tick, 1000);

export default App;
//export default Clock;
