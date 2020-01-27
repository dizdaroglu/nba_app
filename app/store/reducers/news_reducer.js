import * as types from '../types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_NEWS:
            return { ...state, articles: action.payload }

        default:
            return state;
    }
}