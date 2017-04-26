import { connect } from 'react-redux';
import { saveCountry } from '../actions/User/Countries/countriesActions';
import InputCountry from '../components/Map/InputCountry';

function mapDispatchToProps (dispatch) {
    return {
        addCountryClick: (userId, country) => {
            dispatch(saveCountry(userId, country));
        },
    };
}

function mapStateToProps (state) {
    return {
        userId: state.user.id,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputCountry);
