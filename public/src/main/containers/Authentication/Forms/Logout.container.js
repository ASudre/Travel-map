import { connect } from 'react-redux';
import Logout from '../../../components/Authentication/Forms/LogOut.component';
import userActions from '../../../actions/User/userActions';

const mapDispatchToProps = dispatch =>
({
    onSubmit: () => dispatch(userActions.logOut()),
});

/** **********************
 * Exports              *
 ************************
 */
export default connect(null, mapDispatchToProps)(Logout);
