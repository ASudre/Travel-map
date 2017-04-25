import states from './countriesStates';

let nextCountryId = 0;

const addCountry = (country) => {
    return {
        type: 'ADD_COUNTRY',
        id: nextCountryId++,
        country,
    };
};

const refreshCountries = (countries) => {
    return {
        type: 'REFRESH_COUNTRIES',
        countries,
    };
};

const requestSaveCountry = (userId, country) => {
    return {
        type: states.REQUEST.SAVE_COUNTRY,
        userId,
        country,
    };
};

const receiveSaveCountry = (userId, countries) => {
    return {
        type: states.RECEIVE.SAVE_COUNTRY,
        userId,
        countries,
        receivedAt: Date.now(),
    };
};

/************************
 * Exports              *
 ************************
 */
export default{
    receiveSaveCountry,
    requestSaveCountry,
    refreshCountries,
    addCountry,
};
