import React from 'react';
import './App.css';
// import Router from './router/Router.jsx'
import Game from './components/Game.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
