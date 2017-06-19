/* eslint-disable indent */
import states from '../../actions/Country/countryStates';

const country = (state = {}, action) => {
    switch (action.type) {
        case states.RECEIVE.COUNTRIES:
            return action.countries;
        default:
            return state;
    }
};

/** **********************
 * Exports              *
 ************************
 */
export default country;
