import states from './countriesStates';

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
};
