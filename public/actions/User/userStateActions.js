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
        receivedAt: Date.now(),
    };
};

const receiveCreateUser = (user) => {
    return {
        type: userStates.RECEIVE.CREATE_USER,
        user,
        receivedAt: Date.now(),
    };
};

const receiveUser = (user) => {
    return {
        type: userStates.RECEIVE.USER,
        user,
        receivedAt: Date.now(),
    };
};

/************************
 * Exports              *
 ************************
 */
export default {
    receiveCreateUser,
    receiveLogIn,
    requestCreateUser,
    requestLogIn,
    receiveUser,
    requestUser,
};
