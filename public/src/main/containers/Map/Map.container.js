import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Map from '../../components/Map/Map.component';

const buildCountriesArray = countries =>
    (!countries ? [] : countries.map(country => [country.name]));

const mapStateToProps = state =>
    ({
        countries: buildCountriesArray(state.user.countries),
    });

/** **********************
 * Exports              *
 ************************
 */
export default withRouter(connect(mapStateToProps, null)(Map));
