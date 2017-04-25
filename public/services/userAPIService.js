import config from '../config/config';
import { fetchUrl } from './utils';

const logIn = ({email, password}) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({
            email,
            password,
        }),
    };

    return fetchUrl(`${config.server.baseUrl}/api/users/login`, params);
};

const saveCountry = ({userId, country}) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return fetchUrl(`${config.server.baseUrl}/api/users/${userId}/countries/${country}`, params);
};

const createUser = ({email, password}) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    };
    return fetchUrl(`${config.server.baseUrl}/api/users`, params);
};

/************************
 * Exports              *
 ************************
 */
export default {
    logIn,
    saveCountry,
    createUser,
};