import { connect } from 'react-redux';
import GeoChart from '../components/Map/GeoChart';

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
export default connect(mapStateToProps, null)(GeoChart);
