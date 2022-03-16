import React from 'react';


class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='end'>
        <div className='scoreCard'>
          <h1>Score</h1>
          <h3>Player 1: <b>{this.props.score1}</b></h3>
          <h4>Turn: {this.props.turn}</h4>
        </div>
      </div>
    );
  }
}

export default Score;