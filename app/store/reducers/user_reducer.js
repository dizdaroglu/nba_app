import * as types from '../types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return {
                ...state,
                auth: {
                    uid: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refToken: action.payload.refreshToken || false
                }
            }
        case types.SIGN_UP:
            return {
                ...state,
                auth: {
                    uid: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refToken: action.payload.refreshToken || false
                }
            }
        case types.AUTO_SIGN_IN:
            return {
                ...state,
                auth: {
                    uid: action.payload.user_id || false,
                    token: action.payload.id_token || false,
                    refToken: action.payload.refresh_token || false
                }
            }
        default:
            return state;
    }
}