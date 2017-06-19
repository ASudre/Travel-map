import { reset, SubmissionError } from 'redux-form';
import userAPIService from '../../services/userAPIService';
import userState from './userStateActions';
import countryActions from '../../actions/Country/countryActions';

const createUser = (email, password) => (dispatch) => {
    dispatch(userState.requestCreateUser(email));
    return userAPIService.createUser({ email, password })
    .then((data) => {
        if (data.status === 200) {
            return data.json();
        }
        return data.json().then((error) => {
            throw new SubmissionError(error);
        });
    })
    .then(user => dispatch(userState.receiveCreateUser(user)));
};

const logIn = (email, password) => (dispatch) => {
    dispatch(userState.requestLogIn(email));
    return userAPIService.logIn({ email, password })
    .then((data) => {
        if (data.status === 200) {
            return data.json();
        }
        return data.json().then((json) => {
            throw new SubmissionError(json);
        });
    })
    .then(user => dispatch(userState.receiveLogIn(user)))
    .then(() => dispatch(countryActions.fetchCountries()));
};

const logOut = () => (dispatch) => {
    dispatch(userState.requestLogOut());
    return userAPIService.logOut()
                         .then(data => data.json())
                         .then((user) => {
                             dispatch(reset('addCountryForm'));
                             dispatch(userState.receiveLogOut(user));
                         });
};

const fetchUser = () => (dispatch) => {
    dispatch(userState.requestUser());
    return userAPIService.initUser()
                         .then(data => (data.status === 200 ? data.json() : {}))
                         .then(user => dispatch(userState.receiveUser(user)));
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
