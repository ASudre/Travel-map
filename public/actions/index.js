let nextCountryId = 0;

export const addCountry = (text) => {
    return {
        type: 'ADD_COUNTRY',
        id: nextCountryId++,
        text,
    };
};

export const requestUser = (userId) => {
    return {
        type: 'REQUEST_USER',
        userId,
    };
};

export const receiveUser = (user) => {
    return {
        type: 'RECEIVE_USER',
        user,
        receivedAt: Date.now(),
    };
};

export const fetchUser = (userId) => {
    return (dispatch) => {
        dispatch(requestUser(userId));
        return dispatch(receiveUser(getUser(userId)));
    };
};

function getUser(userId) {
    return {
        id: userId,
        countries: [
            'France',
            'Germany',
        ],
    };
}