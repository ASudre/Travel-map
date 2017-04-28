import { connect } from 'react-redux';
import InputCountry from '../components/Map/InputCountry';

function mapDispatchToProps(dispatch) {
    return {
        addCountryClick: (country) => {
            dispatch(saveCountry(country));
        },
    };
}

/** **********************
 * Exports              *
 ************************
 */
export default connect(null, mapDispatchToProps)(InputCountry);
