import userAPIService from '../../services/userAPIService';
import state from './countriesStateActions';

const saveCountry = (userId, country) => {
    return (dispatch) => {
        dispatch(state.requestSaveCountry(userId, country));
        userAPIService.saveCountry({userId, country})
            .then(data => data.json())
            .then(user => {
                dispatch(state.receiveSaveCountry(userId, user.countries));
                return dispatch(state.refreshCountries(user.countries));
            });
    };
};

/************************
 * Exports              *
 ************************
 */
export {
    saveCountry,
};
