import userStates from './userStates';

const requestUser = userId => ({
    type: userStates.REQUEST.USER,
    userId,
});

const requestLogIn = email => ({
    type: userStates.REQUEST.LOGIN,
    email,
});

const requestLogOut = () => ({
    type: userStates.REQUEST.LOGOUT,
});

const requestCreateUser = email => ({
    type: userStates.REQUEST.CREATE_USER,
    email,
});

const receiveLogIn = user => ({
    type: userStates.RECEIVE.LOGIN,
    user,
});

const receiveLogOut = user => ({
    type: userStates.RECEIVE.LOGOUT,
    user,
});

const receiveCreateUser = user => ({
    type: userStates.RECEIVE.CREATE_USER,
    user,
});

const receiveUser = user => ({
    type: userStates.RECEIVE.USER,
    user,
});

const saveUserRedirectURL = redirectURL => ({
    type: userStates.SAVE_REDIRECT_URL,
    redirectURL,
});

/** **********************
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
    saveUserRedirectURL,
};
