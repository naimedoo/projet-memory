import React from 'react';


class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Score</h1>
        <h3>Player 1:{this.props.score1}</h3>
      </div>
    );
  }
}

export default Score;