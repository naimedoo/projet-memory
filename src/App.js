import React from 'react';
import './App.css';
import Game from './components/Game'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="main">
        <Game/>
      </div>
    );
  }
}
export default App;
