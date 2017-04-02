const country = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COUNTRY':
            return action.text;
        default:
            return state;
    }
};

const user = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_USER':
            return action.user;
        case 'ADD_COUNTRY':
            return Object.assign({}, state, {
                countries: [
                    ...state.countries,
                    country(undefined, action),
                ]});
        default:
            return state;
    }
};

export default user;