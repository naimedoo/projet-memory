import React from 'react'
import Score2 from '../components/Score2'
import Game2 from '../components/Game2'


class Player2 extends React.Component{
    constructor() {
      super();
    }
  
    render() {
      return (
       
        <div className='container'>
        
          <Game2/>
          <Score2 />
          
        </div>
       
      );
    }
  }
  
  export default Player2;