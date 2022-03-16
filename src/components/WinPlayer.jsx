import React from 'react';

class WinPlayer extends React.Component {
    constructor(props) {
        super(props)
      
    }
    render() {
        return (
            <>
            <p>{`${this.props.WinPlay} à gagné avec ${this.props.scoreWin} points`}</p>
            <button onClick= {() => window.location.reload()}>Restart</button>
            </>
        )
    }
} 
export default WinPlayer