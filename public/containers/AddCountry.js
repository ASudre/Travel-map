import { connect } from 'react-redux';
import saveCountry from '../actions/User/Countries/countriesActions';
import InputCountry from '../components/Map/InputCountry';

const mapDispatchToProps = dispatch =>
({
    addCountryClick: (country) => {
        dispatch(saveCountry(country));
    },
});

/** **********************
 * Exports              *
 ************************
 */
export default connect(null, mapDispatchToProps)(InputCountry);
