import { connect } from 'react-redux';
import GeoChart from '../components/Map/GeoChart';

function buildCountriesArray(countries) {
    return !countries ? [] :
        countries.map(country => {
            return [country];
        });
}

function mapStateToProps(state) {
    console.log(state);
    return {
        countries: buildCountriesArray(state.user.countries),
    };
}

export default connect(mapStateToProps, null)(GeoChart);
