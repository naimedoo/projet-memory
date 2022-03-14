import React from 'react';
import './App.css';

import Score1 from'./components/Score1.jsx'
import Score2 from './components/Score2.jsx';

import Router from './router/Router.jsx';

import Button from './components/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router />
        <Button/>
      </div>
    );
  }
}
export default App;
