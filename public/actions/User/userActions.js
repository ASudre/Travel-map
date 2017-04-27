import userAPIService from '../../services/userAPIService';
import state from './userStateActions';

const createUser = (email, password) => {
    return (dispatch) => {
        dispatch(state.requestCreateUser(email));
        return userAPIService.createUser({email, password})
            .then(data => data.json())
            .then(user => {
                return dispatch(state.receiveCreateUser(user));
            });
    };
};

const logIn = (email, password) => {
    return (dispatch) => {
        dispatch(state.requestLogIn(email));
        return userAPIService.logIn({email, password})
            .then(data => data.json())
            .then(user => {
                return dispatch(state.receiveLogIn(user));
            });
    };
};

const logOut = () => {
    return (dispatch) => {
        dispatch(state.requestLogOut());
        return userAPIService.logOut()
            .then(data => data.json())
            .then(user => {
                return dispatch(state.receiveLogOut(user));
            });
    };
};

const fetchUser = () => {
    return (dispatch) => {
        dispatch(state.requestUser());
        return userAPIService.initUser()
            .then(data => {
                return data.status === 200 ? data.json() : {};
            })
            .then(user => {
                return dispatch(state.receiveUser(user));
            });
    };
};

/************************
 * Exports              *
 ************************
 */
export {
    createUser,
    logIn,
    logOut,
    fetchUser,
};
