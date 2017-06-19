import countryStates from './countryStates';

const receiveCountries = countries => ({
    type: countryStates.RECEIVE.COUNTRIES,
    countries,
});

const requestCountries = () => ({
    type: countryStates.REQUEST.COUNTRIES,
});

/** **********************
 * Exports              *
 ************************
 */
export default {
    receiveCountries,
    requestCountries,
};
