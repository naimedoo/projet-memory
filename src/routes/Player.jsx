import React from 'react'
import Score from '../components/Score1.jsx'
import Game from '../components/Game'


class Player extends React.Component{
    constructor() {
      super();
    }
  
    render() {
      return (
        <div>
       <Score />
       <Game />
       </div>
      );
    }
  }
  
  export default Player;