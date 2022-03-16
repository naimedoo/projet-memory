import React from 'react'
import Game from '../components/Game'

class Player extends React.Component{
    constructor() {
      super();
    }
  
    render() {
      return (
        <div>
       <Game />
       </div>
      );
    }
  }
  
  export default Player;