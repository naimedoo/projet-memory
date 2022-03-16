import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component{
    render(){
        return(
            <div className='flex-end'>
                <Link to="/player">1-Joueur</Link> | 
                <Link to="/player2">2-Joueur</Link> |
            </div>
         
        )

    }
}
export default Button;



