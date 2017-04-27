import userStates from './userStates';

const requestUser = (userId) => {
    return {
        type: userStates.REQUEST.USER,
        userId,
    };
};

const requestLogIn = (email) => {
    return {
        type: userStates.REQUEST.LOGIN,
        email,
    };
};

const requestLogOut = () => {
    return {
        type: userStates.REQUEST.LOGOUT,
    };
};

const requestCreateUser = (email) => {
    return {
        type: userStates.REQUEST.CREATE_USER,
        email,
    };
};

const receiveLogIn = (user) => {
    return {
        type: userStates.RECEIVE.LOGIN,
        user,
    };
};

const receiveLogOut = (user) => {
    return {
        type: userStates.RECEIVE.LOGOUT,
        user: user,
    };
};

const receiveCreateUser = (user) => {
    return {
        type: userStates.RECEIVE.CREATE_USER,
        user,
    };
};

const receiveUser = (user) => {
    return {
        type: userStates.RECEIVE.USER,
        user,
    };
};

/************************
 * Exports              *
 ************************
 */
export default {
    receiveCreateUser,
    receiveLogIn,
    receiveLogOut,
    requestCreateUser,
    requestLogIn,
    requestLogOut,
    receiveUser,
    requestUser,
};
