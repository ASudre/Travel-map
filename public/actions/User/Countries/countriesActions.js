import userAPIService from '../../../services/userAPIService';
import state from './countriesStateActions';

/************************
 * Exports              *
 ************************
 */

const saveCountry = (country) => {
    return (dispatch) => {
        dispatch(state.requestSaveCountry(country));
        userAPIService.saveCountry(country)
            .then(data => data.json())
            .then(user => {
                return dispatch(state.receiveSaveCountry(user.countries));
            });
    };
};
export {
    saveCountry,
};
