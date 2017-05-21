import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CountryList from '../../components/CountryList/CountryList.component';
import countriesActions from '../../actions/User/Countries/countriesActions';

const buildCountriesArray = countries =>
    (!countries ? [] : countries.map(country => country.name));

const mapStateToProps = state =>
    ({
        countries: buildCountriesArray(state.user.countries),
    });

const mapDispatchToProps = dispatch =>
    ({
        removeCountry: country => dispatch(countriesActions.removeCountry(country)),
    });

/** **********************
 * Exports              *
 ************************
 */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CountryList));
