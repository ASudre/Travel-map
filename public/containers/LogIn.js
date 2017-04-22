import { connect } from 'react-redux';
import { logIn , createUser} from '../actions';
import LogInForm from '../components/LogInForm';

function mapDispatchToProps(dispatch) {
    return {
        logIn: (email, password) => {
            dispatch(logIn(email, password));
        },
        createUser: (email, password)  => {
            dispatch(createUser(email, password));
        }
    };
}

export default connect(null, mapDispatchToProps)(LogInForm);
