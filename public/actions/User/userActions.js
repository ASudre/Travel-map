import userAPIService from '../../services/userAPIService';
import state from './userStateActions';

const createUser = (email, password) => (dispatch) => {
    dispatch(state.requestCreateUser(email));
    return userAPIService.createUser({ email, password })
        .then(data => data.json())
        .then(user => dispatch(state.receiveCreateUser(user)));
};

const logIn = (email, password) => (dispatch) => {
    dispatch(state.requestLogIn(email));
    return userAPIService.logIn({ email, password })
        .then(data => data.json())
        .then(user => dispatch(state.receiveLogIn(user)));
};

const logOut = () => (dispatch) => {
    dispatch(state.requestLogOut());
    return userAPIService.logOut()
        .then(data => data.json())
        .then(user => dispatch(state.receiveLogOut(user)));
};

const fetchUser = () => (dispatch) => {
    dispatch(state.requestUser());
    return userAPIService.initUser()
        .then((data) => {
            if (data.status === 200) {
                return data.json();
            }
            return {};
        })
        .then(user => dispatch(state.receiveUser(user)));
};

/** **********************
 * Exports              *
 ************************
 */
export {
    createUser,
    logIn,
    logOut,
    fetchUser,
};
