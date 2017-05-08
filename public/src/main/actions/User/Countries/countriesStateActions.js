import states from './countriesStates';

const requestSaveCountry = country => ({
    type: states.REQUEST.SAVE_COUNTRY,
    country,
});

const requestRemoveCountry = country => ({
    type: states.REQUEST.REMOVE_COUNTRY,
    country,
});

const receiveSaveCountry = countries => ({
    type: states.RECEIVE.SAVE_COUNTRY,
    countries,
    receivedAt: Date.now(),
});

const receiveRemoveCountry = countries => ({
    type: states.RECEIVE.REMOVE_COUNTRY,
    countries,
    receivedAt: Date.now(),
});

const addCountry = country => ({
    type: states.ADD_COUNTRY,
    country,
});

/** **********************
 * Exports              *
 ************************
 */
export default{
    receiveSaveCountry,
    requestSaveCountry,
    requestRemoveCountry,
    receiveRemoveCountry,
    addCountry,
};
