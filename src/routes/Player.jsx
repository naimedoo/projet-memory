import React from 'react'
import Score from '../components/Score1.jsx'
import Game from '../components/Game'
import Score1 from '../components/Score1.jsx';


class Player extends React.Component{
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className='container'>
          <Game />
       </div>
      );
    }
  }
  
export default Player;