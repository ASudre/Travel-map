import config from '../../../conf/webapp-configuration';
import fetchUrl from './utils';

const logIn = ({ email, password }) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            email,
            password,
        }),
    };

    return fetchUrl(`${config.server.baseUrl}/api/user/login`, params);
};

const logOut = () => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };

    return fetchUrl(`${config.server.baseUrl}/api/user/logout`, params);
};

const saveCountry = (country) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };
    return fetchUrl(`${config.server.baseUrl}/api/user/countries/${country}`, params);
};

const createUser = ({ email, password }) => {
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
    return fetchUrl(`${config.server.baseUrl}/api/user`, params);
};

const initUser = () => {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };
    return fetchUrl(`${config.server.baseUrl}/api/user`, params);
};

/** **********************
 * Exports              *
 ************************
 */
export default {
    logIn,
    logOut,
    saveCountry,
    createUser,
    initUser,
};
