import axios from '../../utils/axios';
import * as types from '../types';
import { SIGNIN, SIGNUP, REFRESH } from '../../utils/misc';

export const signUp = (data) => {
    const authData = {
        email: data.email,
        password: data.password,
        returnSecureToken: true
    }
    const request = axios.post(SIGNUP, authData)
        .then(res => {
            console.log("action: ", res.data)
            return res.data
        })
        .catch(error => {
            return false
        })

    return {
        type: types.SIGN_UP,
        payload: request
    }
}

export const signIn = (data) => {
    const authData = {
        email: data.email,
        password: data.password,
        returnSecureToken: true
    }
    const request = axios.post(SIGNIN, authData)
        .then(res => {
            return res.data
        })
        .catch(error => {
            return false
        })
    return {
        type: types.SIGN_IN,
        payload: request
    }
}

export const autoSignIn = (refToken) => {
    const data = 'grant_type=refresh_token&refresh_token=' + refToken;
    const request = axios.post(REFRESH, data)
        .then(res => {
            return res.data
        })
        .catch(error => {
            return false
        })
    return {
        type: types.AUTO_SIGN_IN,
        payload: request
    }
}