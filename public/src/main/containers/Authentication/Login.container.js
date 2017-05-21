import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import LogIn from '../../components/Authentication/LogIn.component';
import userActions from '../../actions/User/userActions';

const mapDispatchToProps = dispatch =>
    ({
        logIn: (values) => {
            const { email, password } = values;
            return dispatch(userActions.logIn(email, password)).then(() => {
                dispatch(push('/home'));
            });
        },
        createUser: (values) => {
            const { email, password } = values;
            return dispatch(userActions.createUser(email, password)).then(() => dispatch(push('/home')));
        },
    });

/** **********************
 * Exports              *
 ************************
 */
export default withRouter(connect(null, mapDispatchToProps)(LogIn));
