import userAPIService from '../services/userAPIService';

let nextCountryId = 0;

export const addCountry = (country) => {
    return {
        type: 'ADD_COUNTRY',
        id: nextCountryId++,
        country,
    };
};

export const refreshCountries = (countries) => {
    return {
        type: 'REFRESH_COUNTRIES',
        countries,
    };
};

export const requestSaveCountry = (userId, country) => {
    return {
        type: 'REQUEST_SAVE_COUNTRY',
        userId,
        country,
    };
};

export const receiveSaveCountry = (userId, countries) => {
    return {
        type: 'RECEIVE_SAVE_COUNTRY',
        userId,
        countries,
        receivedAt: Date.now(),
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

export const requestCreateUser = (email) => {
    return {
        type: 'REQUEST_CREATE_USER',
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

export const receiveCreateUser = (user) => {
    return {
        type: 'RECEIVE_CREATE_USER',
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

export const saveCountry = (userId, country) => {
    return (dispatch) => {
        dispatch(requestSaveCountry(userId, country));
        userAPIService.saveCountry({userId, country})
            .then(data => data.json())
            .then(user => {
                dispatch(receiveSaveCountry(userId, user.countries));
                return dispatch(refreshCountries(user.countries));
            });
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

export const createUser = (email, password) => {
    return (dispatch) => {
        dispatch(requestCreateUser(email));
        userAPIService.createUser({ email, password })
            .then(data => data.json())
            .then(user => {
                return dispatch(receiveCreateUser(user));
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