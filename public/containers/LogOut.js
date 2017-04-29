import { connect } from 'react-redux';
import { logOut } from '../actions/User/userActions';
import LogOutForm from '../components/Authentication/LogOutForm';

const mapDispatchToProps = dispatch =>
({
    logOut: () => {
        dispatch(logOut());
    },
});

/** **********************
 * Exports              *
 ************************
 */
export default connect(null, mapDispatchToProps)(LogOutForm);
