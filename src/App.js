import React from 'react';
import './App.css';

import Score1 from'./components/Score1'
import Score2 from './components/Score2';

import Router from './router/Router';
import Button from './components/Button';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Score1 />
        <Score2 />
        <Link to="/player"></Link>
        <Link to="/player2"></Link>
        <Router />
        <Button />
      </div>
    );
  }
}
export default App;
