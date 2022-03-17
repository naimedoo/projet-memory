import React from 'react';

class WinPlayer2 extends React.Component {
    constructor(props) {
        super(props)
      
    }
    render() {
        return (
            <>
            <p>{`${this.props.player} as gagné avec ${this.props.scoreWin} points`}</p>
            <button onClick= {() => window.location.reload()}>Restart</button>
            </>
        )
    }
} 
export default WinPlayer2