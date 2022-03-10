import React from 'react';
import './App.css';
import Score1 from'./components/Score1'
import Score2 from './components/Score2';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Score1/>
        <Score2/>
      </div>
    );
  }
}

export default App;
