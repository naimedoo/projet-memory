import React from 'react';


class Score1 extends React.Component {
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
          <h3>Player 1:{this.props.score1}</h3>
        </div>
      </div>
    );
  }
}

export default Score1;