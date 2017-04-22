import config from '../config/config';
import axios from 'axios';

function logIn({ email, password }) {
    return axios({
        url: `${config.server.baseUrl}/api/users/login`,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        //credentials: 'same-origin',
        data: JSON.stringify({
            email,
            password,
        }),
    });
}

function saveCountry({ userId, country }) {
    return fetch(`${config.server.baseUrl}/api/users/${userId}/countries/${country}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export default {
    logIn,
    saveCountry,
};