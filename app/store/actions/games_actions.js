import * as types from '../types';
import axios from '../../utils/axios';
import { convertFirebase, findTeamData } from '../../utils/misc';

export const getGames = () => {
    const promise = new Promise((resolve, reject) => {
        const request = axios.get("/teams.json")
            .then(res => {
                const teams = convertFirebase(res.data);

                axios.get("/games.json")
                    .then(res => {
                        const articles = convertFirebase(res.data);
                        const responseData = [];

                        for (let key in articles) {
                            responseData.push({
                                ...articles[key],
                                awayData: findTeamData(articles[key].away, teams),
                                localData: findTeamData(articles[key].local, teams),
                            })
                        }
                        resolve(responseData)
                    })
            })
            .catch(error => {
                reject(false)
            })
    })
    return {
        type: types.GET_GAMES,
        payload: promise
    }
}