import userAPIService from '../../../services/userAPIService';
import state from './countriesStateActions';

const saveCountry = country => (dispatch) => {
    dispatch(state.requestSaveCountry(country));
    userAPIService.saveCountry(country)
        .then(data => data.json())
        .then(user => dispatch(state.receiveSaveCountry(user.countries)));
};

const addCountry = country => (dispatch) => {
    dispatch(state.addCountry(country));
};

/** *********************
 * Exports              *
 ************************
 */
export {
    saveCountry,
    addCountry,
};
