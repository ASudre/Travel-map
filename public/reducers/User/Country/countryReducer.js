/* eslint-disable indent */
import states from '../../../actions/User/Countries/countriesStates';

const countries = (state = [], action) => {
    switch (action.type) {
        case states.RECEIVE.SAVE_COUNTRY:
            return action.countries;
        case states.REQUEST.SAVE_COUNTRY:
            return state;
        case states.ADD_COUNTRY:
            return [...(state || []), action.country];
        default:
            return state;
    }
};

/** **********************
 * Exports              *
 ************************
 */
export {
    countries,
    states,
};
