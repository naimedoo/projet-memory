import React from 'react';


class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <div className='scoreCard'>
          <h1>Score</h1>
          <h2>{100 - this.props.turn}</h2>
        </div>
    );
  }
}

export default Score;