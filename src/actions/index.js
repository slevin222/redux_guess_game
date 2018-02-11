import types from './types';

export function getRanNum() {
    return {
        type: types.GET_RAN_NUMBER,
        payload: Math.floor(Math.random() * 100) + 1
    }
}

export function userInput(event) {
    return {
        type: types.USER_INPUT,
        payload: event.target.value
    }
}

export function makeGuess() {
    return {
        type: types.MAKE_GUESS
    }
}

export function reset() {
    return {
        type: types.RESET,
        payload: Math.floor(Math.random() * 100) + 1


    }
}