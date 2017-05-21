import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import Logout from '../../components/Authentication/LogOut.component';
import userActions from '../../actions/User/userActions';

const mapDispatchToProps = dispatch =>
    ({
        onSubmit: () => {
            dispatch(userActions.logOut());
            dispatch(push('/'));
        },
    });

/** **********************
 * Exports              *
 ************************
 */
export default withRouter(connect(null, mapDispatchToProps)(Logout));
