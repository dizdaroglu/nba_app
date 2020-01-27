import * as types from '../types';
import axios from '../../utils/axios';


export const getNews = () => {
    const request = axios.get('/news.json')
        .then(res => {
            const articles = [];

            for (let key in res.data) {
                articles.push({
                    ...res.data[key],
                    id: key
                })
            }
            return articles
        })
        .catch(error => {
            return false
        })
    return {
        type: types.GET_NEWS,
        payload: request
    }
}