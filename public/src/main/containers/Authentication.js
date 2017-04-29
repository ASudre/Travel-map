import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogOut from './LogOut';
import LogIn from './LogIn';

const Authentication = ({ isLoggedIn }) => (isLoggedIn ? <LogOut /> : <LogIn />);

Authentication.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state =>
({
    isLoggedIn: !!state.user.id,
});

/** **********************
 * Exports              *
 ************************
 */
export default connect(mapStateToProps, null)(Authentication);
