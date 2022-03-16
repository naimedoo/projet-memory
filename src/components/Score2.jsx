import React from 'react';

import './Score.css'

class Score2 extends React.Component{
    constructor(props) {
      super(props);
    }
  
    render() {

      return (
       
            <div className='scoreCard'>
                <h1>Score</h1>
                <h3>Player 1:{this.props.score1}</h3>
                <h3>Player 2: {this.props.score2}</h3>
            </div>
      
         
          
        )
    }
  }
  
  export default Score2;