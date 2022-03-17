import React from 'react';
import './App.css';
import Router from './router/Router'
import Button from './components/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="main">
        <div>
          <Router/>
        </div>
        <div>
          <Button/>
        </div>
      </div>
      
    );
  }
}
export default App;
