import React from 'react';
import './App.css';
import Router from './router/Router';
import Button from './components/Button';
import { Link } from 'react-router-dom';


class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/player"></Link>
        <Link to="/player2"></Link>
        <Router />
        <Button />
      </div>
    );
  }
}
export default App;
