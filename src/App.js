import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Home Page
	  <FirstComponent></FirstComponent>
    </div>
  );
}

class FirstComponent extends Component {
  render() {
    return (<div className="FirstComponent">
      First Component
    </div>);
  }
}

export default App;
