import { connect } from 'react-redux';
import LogIn from '../../../components/Authentication/Forms/LogIn.component';
import userActions from '../../../actions/User/userActions';

const mapDispatchToProps = dispatch =>
({
    logIn: (values) => {
        const { email, password } = values;
        return dispatch(userActions.logIn(email, password));
    },
    createUser: (values) => {
        const { email, password } = values;
        return dispatch(userActions.createUser(email, password));
    },
});

/** **********************
 * Exports              *
 ************************
 */
export default connect(null, mapDispatchToProps)(LogIn);
