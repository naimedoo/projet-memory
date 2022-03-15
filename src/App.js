import React from 'react';
import './App.css';

import Score from'./components/Score.jsx'
import Score2 from './components/Score2.jsx';

import Router from './router/Router.jsx';
import { Link } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router />
        <div>
        <Link to="/player">1-Joueur</Link> | 
        <Link to="/player2">2-Joueur</Link> | 
        </div>
        
      </div>
    );
  }
}
export default App;
