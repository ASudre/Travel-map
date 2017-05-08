import React from 'react';
import PropTypes from 'prop-types';
import LogIn from '../../containers/Authentication/Forms/Login.container';
import LogOut from '../../containers/Authentication/Forms/Logout.container';

class AuthenticationForm extends React.Component {
    render() {
        return (
            <div>
                {this.props.isLoggedIn ? (<LogOut />) : (<LogIn />) }
            </div>
        );
    }

}

AuthenticationForm.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};


/** **********************
 * Exports              *
 ************************
 */
export default AuthenticationForm;
