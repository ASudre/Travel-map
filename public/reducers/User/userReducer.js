import states from '../../actions/User/userStates';
import { states as countryStates, countries } from './Country/countryReducer';

const user = (state = {}, action) => {
    switch (action.type) {
        case states.RECEIVE.USER:
            return action.user;
        case states.RECEIVE.LOGIN:
            return action.user;
        case states.RECEIVE.CREATE_USER:
            return action.user;
        case countryStates.RECEIVE.SAVE_COUNTRY:
        case countryStates.REQUEST.SAVE_COUNTRY:
            return {
                ...state,
                countries: countries(state.countries, action),
            };
        default:
            return state;
    }
};

export default user;