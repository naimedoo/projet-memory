import React from 'react';
import './App.css';
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
