import { connect } from 'react-redux';
import AddCountry from '../../components/AddCountry/AddCountry.component';
import countriesActions from '../../actions/User/Countries/countriesActions';

const mapDispatchToProps = dispatch =>
({
    addCountry: (country, isLoggedIn) => {
        if (isLoggedIn) {
            return dispatch(countriesActions.saveCountry(country));
        }
        return dispatch(countriesActions.addCountry(country));
    },
});

const mapStateToProps = state =>
({
    isLoggedIn: !!state.user.id,
});

/** **********************
 * Exports              *
 ************************
 */
export default connect(mapStateToProps, mapDispatchToProps)(AddCountry);
