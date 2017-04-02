import { connect } from 'react-redux';
import { addCountry } from '../actions';
import InputCountry from '../components/Map/InputCountry';

function mapDispatchToProps(dispatch) {
    return {
        addCountryClick: (country) => {
            dispatch(addCountry(country));
        },
    };
}

export default connect(null, mapDispatchToProps)(InputCountry);
