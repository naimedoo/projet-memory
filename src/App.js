import React from 'react';
import './App.css';
import Router from './router/Router';


class App extends React.Component() {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;
