import types from '../actions/types';

const DEFAULT_STATE = {
    randomNumber: null,
    userGuess: '',
    numberOfGuesses: 0,
    message: 'Enter a Number between 1 -10'
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_RAN_NUMBER:
            return { ...state, randomNumber: action.payload };
        case types.USER_INPUT:
            return { ...state, userGuess: action.payload };
        case types.MAKE_GUESS:
            let message = 'You got it!!';
            if (state.randomNumber > state.userGuess) {
                message = "Too Low";
            } else if (state.randomNumber < state.userGuess) {
                message = "Too High";
            }
            return { ...state, userGuess: '', message, numberOfGuesses: state.numberOfGuesses + 1 };
        default:
            return state;
    }
}