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
                <div className="robot" style={{ backgroundImage: "url(" + robot + ")" }} ></div>
                <div className="game">
                    <h1>Guess Game</h1>
                    {/* <p>Random Number: {this.props.ranNum}</p> */}
                    <input onChange={this.props.userInput} value={this.props.userGuess} placeholder="Enter Guess" type="number" />
                    <p>{this.props.msg}</p>
                    <button onClick={this.props.makeGuess}>Make Guess</button>
                    <br />
                    <button onClick={this.props.reset}>Reset Game</button>
                    <p>Number of guesses: {this.props.numberOfGuesses}</p>
                    {/* <button onClick={this.props.getRanNum}>Get Random Number</button> */}
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
