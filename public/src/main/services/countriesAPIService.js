import config from '../../../conf/webapp-configuration';
import fetchUrl from './utils';

const getCountries = () => {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };
    return fetchUrl(`${config.server.host}:${config.server.port}/api/countries`, params);
};

/** **********************
 * Exports              *
 ************************
 */
export default {
    getCountries,
};
