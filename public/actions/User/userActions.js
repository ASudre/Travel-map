import userAPIService from '../../services/userAPIService';
import state from './userStateActions';

const createUser = (email, password) => {
    return (dispatch) => {
        dispatch(state.requestCreateUser(email));
        userAPIService.createUser({email, password})
            .then(data => data.json())
            .then(user => {
                return dispatch(state.receiveCreateUser(user));
            });
    };
};

const logIn = (email, password) => {
    return (dispatch) => {
        dispatch(state.requestLogIn(email));
        userAPIService.logIn({email, password})
            .then(data => data.json())
            .then(user => {
                return dispatch(state.receiveLogIn(user));
            });
    };
};

const fetchUser = () => {
    return (dispatch) => {
        dispatch(state.requestUser());
        userAPIService.initUser()
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
    fetchUser,
};
