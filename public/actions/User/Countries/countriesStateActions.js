import states from './countriesStates';

const requestSaveCountry = (country) => {
    return {
        type: states.REQUEST.SAVE_COUNTRY,
        country,
    };
};

const receiveSaveCountry = (countries) => {
    return {
        type: states.RECEIVE.SAVE_COUNTRY,
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
