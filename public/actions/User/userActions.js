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

const fetchUser = (userId) => {
    return (dispatch) => {
        dispatch(state.requestUser(userId));
        return dispatch(state.receiveUser(getUser(userId)));
    };
};

/************************
 * Private functions    *
 ************************
 */
const getUser = (userId) => {
    return {
        id: userId,
        countries: [
            'France',
            'Germany',
        ],
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
