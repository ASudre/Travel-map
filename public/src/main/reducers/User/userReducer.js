/* eslint-disable indent */
import states from '../../actions/User/userStates';
import { countries, states as countryStates } from './Country/countryReducer';

const user = (state = {}, action) => {
    switch (action.type) {
        case states.RECEIVE.USER:
            return action.user;
        case states.RECEIVE.LOGIN:
            return action.user;
        case states.RECEIVE.LOGOUT:
            return action.user;
        case states.RECEIVE.CREATE_USER:
            return action.user;
        case states.SAVE_REDIRECT_URL:
            return {
                ...state,
                redirectURL: action.redirectURL,
            };
        case countryStates.RECEIVE.SAVE_COUNTRY:
        case countryStates.REQUEST.SAVE_COUNTRY:
        case countryStates.RECEIVE.REMOVE_COUNTRY:
        case countryStates.ADD_COUNTRY:
            return {
                ...state,
                countries: countries(state.countries, action),
            };
        default:
            return state;
    }
};

/** **********************
 * Exports              *
 ************************
 */
export default user;
