import React from 'react';
import './App.css';

import Score1 from'./components/Score1.jsx';
import Score2 from './components/Score2.jsx';

import Router from './router/Router.jsx';
import { Link } from 'react-router-dom';

import WinPlayer from './components/WinPlayer';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h1>Emo-memo</h1>
        <WinPlayer />
        <Router />
        <div>
        <Link to="/player">1-Joueur</Link>  
        <Link to="/player2">2-Joueur</Link> 
        </div>
        
      </div>
    );
  }
}
export default App;
