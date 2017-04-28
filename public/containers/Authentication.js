import React from 'react';
import { connect } from 'react-redux';
import LogOut from './LogOut';
import LogIn from './LogIn';

const Authentication = ({ isLoggedIn }) => {
    return (isLoggedIn ? <LogOut /> : <LogIn />);
};

function mapStateToProps(state) {
    return {
        isLoggedIn: !!state.user.id,
    };
}

/** **********************
 * Exports              *
 ************************
 */
export default connect(mapStateToProps, null)(Authentication);
