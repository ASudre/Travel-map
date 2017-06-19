import countriesAPIService from '../../services/countriesAPIService';
import state from './countryStateActions';

const fetchCountries = () => (dispatch) => {
    dispatch(state.requestCountries());
    return countriesAPIService.getCountries()
    .then(data => (data.status === 200 ? data.json() : {}))
    .then(response => dispatch(state.receiveCountries(response.countries)));
};

/** **********************
 * Exports              *
 ************************
 */
export default {
    fetchCountries,
};
