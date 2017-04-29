import { connect } from 'react-redux';
import { saveCountry, addCountry } from '../actions/User/Countries/countriesActions';
import InputCountry from '../components/Map/InputCountry';

const mapDispatchToProps = dispatch =>
({
    addCountryClick: (country, isLoggedIn) => (
        isLoggedIn ? dispatch(saveCountry(country)) : dispatch(addCountry(country))
    ),
});

const mapStateToProps = state =>
({
    isLoggedIn: !!state.user.id,
});

/** **********************
 * Exports              *
 ************************
 */
export default connect(mapStateToProps, mapDispatchToProps)(InputCountry);
