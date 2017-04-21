import userAPIService from '../services/userAPIService';

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

export const requestLogIn = (email) => {
    return {
        type: 'REQUEST_LOGIN',
        email,
    };
};

export const receiveLogIn = (user) => {
    return {
        type: 'RECEIVE_LOGIN',
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

export const logIn = (email, password) => {
    return (dispatch) => {
        dispatch(requestLogIn(email));
        userAPIService.logIn({ email, password })
        .then(data => data.json())
        .then(user => {
            return dispatch(receiveLogIn(user));
        });
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