import axios from 'axios';
import * as url from './misc';


const instance = axios.create({
    baseURL: url.FIREBASEURL
})

export default instance