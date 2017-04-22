const countries = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COUNTRY':
            return [
                ...state.countries,
                action.country,
            ];
        case 'REFRESH_COUNTRIES':
            return action.countries;
        default:
            return state;
    }
};

const user = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_USER':
            return action.user;
        case 'RECEIVE_LOGIN':
            return action.user;
        case 'RECEIVE_SAVE_COUNTRIES':
            return action.user;
        case 'ADD_COUNTRY':
            return Object.assign({}, state, {
                countries: countries(state, action),
            });
        case 'REFRESH_COUNTRIES':
            return Object.assign({}, state, {
                countries: countries({}, action),
            });
        case 'RECEIVE_CREATE_USER':
            return action.user;
        default:
            return state;
    }
};

export default user;