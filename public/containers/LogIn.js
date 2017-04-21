import { connect } from 'react-redux';
import { logIn } from '../actions';
import LogInForm from '../components/LogInForm';

function mapDispatchToProps(dispatch) {
    return {
        logIn: (email, password) => {
            dispatch(logIn(email, password));
        },
    };
}

export default connect(null, mapDispatchToProps)(LogInForm);
