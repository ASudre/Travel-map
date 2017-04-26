import userAPIService from '../../../services/userAPIService';
import state from './countriesStateActions';

/************************
 * Exports              *
 ************************
 */

const saveCountry = (userId, country) => {
    return (dispatch) => {
        dispatch(state.requestSaveCountry(userId, country));
        userAPIService.saveCountry({userId, country})
            .then(data => data.json())
            .then(user => {
                return dispatch(state.receiveSaveCountry(userId, user.countries));
            });
    };
};
export {
    saveCountry,
};
