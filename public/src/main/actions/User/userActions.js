import { SubmissionError, reset } from 'redux-form';
import userAPIService from '../../services/userAPIService';
import state from './userStateActions';

const createUser = (email, password) => (dispatch) => {
    dispatch(state.requestCreateUser(email));
    return userAPIService.createUser({ email, password })
        .then((data) => {
            if (data.status === 200) {
                return data.json();
            }
            return data.json().then((error) => {
                throw new SubmissionError(error);
            });
        })
        .then(user => dispatch(state.receiveCreateUser(user)));
};

const logIn = (email, password) => (dispatch) => {
    dispatch(state.requestLogIn(email));
    return userAPIService.logIn({ email, password })
        .then((data) => {
            if (data.status === 200) {
                return data.json();
            }
            return data.json().then((json) => {
                throw new SubmissionError(json);
            });
        })
        .then(user => dispatch(state.receiveLogIn(user)));
};

const logOut = () => (dispatch) => {
    dispatch(state.requestLogOut());
    return userAPIService.logOut()
        .then(data => data.json())
        .then((user) => {
            dispatch(reset('addCountryForm'));
            dispatch(state.receiveLogOut(user));
        });
};

const fetchUser = () => (dispatch) => {
    dispatch(state.requestUser());
    return userAPIService.initUser()
        .then(data => (data.status === 200 ? data.json() : {}))
        .then(user => dispatch(state.receiveUser(user)));
};

/** **********************
 * Exports              *
 ************************
 */
export default {
    createUser,
    logIn,
    logOut,
    fetchUser,
};
