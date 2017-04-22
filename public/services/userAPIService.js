import config from '../config/config';

function logIn({ email, password }) {
    return fetch(`${config.server.baseUrl}/api/users/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'same-origin',
        body: JSON.stringify({
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


function createUser({email, password}){
    return fetch(`${config.server.baseUrl}/api/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
}

export default {
    logIn,
    saveCountry,
    createUser,
};