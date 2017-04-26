import states from '../../../actions/User/Countries/countriesStates';

const countries = (state = {}, action) => {
    switch (action.type) {
        case states.RECEIVE.SAVE_COUNTRY:
            return {...state, countries: action.countries};
        case states.REQUEST.SAVE_COUNTRY :
            return action.user;
        default:
            return state;
    }
};

export default countries;