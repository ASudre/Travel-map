import { connect } from 'react-redux';
import { createUser, logIn } from '../actions/User/userActions';
import LogInForm from '../components/Authentication/LogInForm';

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (email, password) => {
            dispatch(logIn(email, password));
        },
        createUser: (email, password) => {
            dispatch(createUser(email, password));
        },
    };
};

/** **********************
 * Exports              *
 ************************
 */
export default connect(null, mapDispatchToProps)(LogInForm);
