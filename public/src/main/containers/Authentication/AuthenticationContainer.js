import { connect } from 'react-redux';
import AuthenticationForm from '../../components/Authentication/AuthenticationComponent';

const mapStateToProps = state =>
({
    isLoggedIn: !!state.user.id,
});

/** **********************
 * Exports              *
 ************************
 */
export default connect(mapStateToProps, null)(AuthenticationForm);
