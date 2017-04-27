import { connect } from 'react-redux';
import { logOut } from '../actions/User/userActions';
import LogOutForm from '../components/Authentication/LogOutForm';

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut());
        },
    };
};

export default connect(null, mapDispatchToProps)(LogOutForm);
