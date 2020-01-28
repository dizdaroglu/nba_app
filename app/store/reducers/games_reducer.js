import * as types from '../types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_GAMES:
            return { ...state, games: action.payload }

        default:
            return state;
    }
}