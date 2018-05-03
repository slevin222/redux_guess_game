import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRanNum, userInput, makeGuess, numberOfGuesses, reset } from '../actions';
import '../assets/css/game.css';
import robot from '../assets/images/penrobot.png';

class Game extends Component {
    componentDidMount() {
        this.props.getRanNum();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="robot col-lg-5 col-md-12 mt-5" style={{ backgroundImage: "url(" + robot + ")" }} ></div>
                    <div className="game col-lg-7 col-md-12">
                        <h1>Guessing Game</h1>
                        <input className="form-control form-control-lg" onChange={this.props.userInput} value={this.props.userGuess} placeholder="Enter Guess" type="number" />
                        <h3>{this.props.msg}</h3>
                        <button className="btn btn-outline-danger" onClick={this.props.reset}>Reset Game</button>
                        <button className="btn btn-success float-right" onClick={this.props.makeGuess}>Make Guess</button>
                        <h3>Number of guesses: {this.props.numberOfGuesses}</h3>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        ranNum: state.game.randomNumber,
        userGuess: state.game.userGuess,
        msg: state.game.message,
        numberOfGuesses: state.game.numberOfGuesses,
        reset: state.game.reset


    }
}
export default connect(mapStateToProps, { getRanNum, userInput, makeGuess, numberOfGuesses, reset })(Game);
