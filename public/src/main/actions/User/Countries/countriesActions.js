import { SubmissionError, reset } from 'redux-form';
import userAPIService from '../../../services/userAPIService';
import state from './countriesStateActions';

const saveCountry = country => (dispatch) => {
    if (!country) {
        throw new SubmissionError({ country: 'Can\'t add empty values !' });
    }
    dispatch(state.requestSaveCountry(country));
    return userAPIService.saveCountry(country)
        .then((data) => {
            if (data.status === 200) {
                return data.json();
            }
            return data.json().then((error) => {
                throw new SubmissionError(error);
            });
        })
        .then((user) => {
            dispatch(reset('addCountryForm'));
            dispatch(state.receiveSaveCountry(user.countries));
        });
};

const removeCountry = country => (dispatch) => {
    dispatch(state.requestRemoveCountry(country));
    return userAPIService.removeCountry(country)
        .then(data => data.json())
        .then(user => dispatch(state.receiveRemoveCountry(user.countries)));
};

const addCountry = country => dispatch => dispatch(state.addCountry(country));

/** *********************
 * Exports              *
 ************************
 */
export default {
    saveCountry,
    addCountry,
    removeCountry,
};
