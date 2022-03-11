import React from "react";

class Game2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: ["/images/alien_monster.jpg","/images/anchor.jpg","/images/cherries.jpg","/images/cold_face.jpg",
            "/images/french_fries.jpg","/images/goblin.jpg","/images/lollipop.jpg","/images/panda.jpg","/images/pile_of_poo.jpg",
            "/images/red_heart.jpg","/images/robot.jpg","/images/shamrock.jpg","/images/snowflake.jpg","/images/soccer_ball.jpg",
            "/images/video_game.jpg","/images/zany_face.jpg",],
            image1: false,
            image2: false,
            image3: false,
            image4: false,
            image5: false,
            image6: false,
            image7: false,
            image8: false,
            image9: false,
            image10: false,
            image11: false,
            image12: false,
            image13: false,
            image14: false,
            image15: false,
            image16: false,
        }
    }

    // ComponentDidMount = () =>{
    //     let picture = []

    // }

    ImageAnime = (id) =>{
        let name = 'image' + id
        this.setState({[name]: true})
        // console.log(id)
        setTimeout(() =>{this.setState({[name]: false})}, 5000)
    }

    render() {
        return (
            <div>
                <div className="line" >
                    <div className="card" onClick={() => this.ImageAnime(1)}><img className={this.state.image1? "animIn" : ""} src={this.state.picture[0]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(2)}><img className={this.state.image2? "animIn" : ""} src={this.state.picture[1]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(3)}><img className={this.state.image3? "animIn" : ""} src={this.state.picture[2]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(4)}><img className={this.state.image4? "animIn" : ""} src={this.state.picture[3]}/></div>
                </div>
                <div className="line">
                    <div className="card" onClick={() => this.ImageAnime(5)}><img className={this.state.image5? "animIn" : ""} src={this.state.picture[4]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(6)}><img className={this.state.image6? "animIn" : ""} src={this.state.picture[5]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(7)}><img className={this.state.image7? "animIn" : ""} src={this.state.picture[6]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(8)}><img className={this.state.image8? "animIn" : ""} src={this.state.picture[7]}/></div>
                </div>
                <div className="line">
                    <div className="card" onClick={() => this.ImageAnime(9)}><img className={this.state.image9? "animIn" : ""} src={this.state.picture[0]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(10)}><img className={this.state.image10? "animIn" : ""} src={this.state.picture[7]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(11)}><img className={this.state.image11? "animIn" : ""} src={this.state.picture[1]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(12)}><img className={this.state.image12? "animIn" : ""} src={this.state.picture[2]}/></div>
                </div>
                <div className="line">
                    <div className="card" onClick={() => this.ImageAnime(13)}><img className={this.state.image13? "animIn" : ""} src={this.state.picture[3]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(14)}><img className={this.state.image14? "animIn" : ""} src={this.state.picture[4]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(15)}><img className={this.state.image15? "animIn" : ""} src={this.state.picture[5]}/></div>
                    <div className="card" onClick={() => this.ImageAnime(16)}><img className={this.state.image16? "animIn" : ""} src={this.state.picture[6]}/></div>
                </div>
            </div>
        );
    }
}

export default Game2;