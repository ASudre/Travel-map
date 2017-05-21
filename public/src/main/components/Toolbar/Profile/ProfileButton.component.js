import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import style from '../Toolbar.style';

class ProfileButton extends React.Component {
    render() {
        const { goToProfile } = this.props;

        return (
            <IconButton tooltip="Profile">
                <FontIcon
                    className="material-icons"
                    hoverColor={style.icons.hoverColor}
                    color={style.icons.color}
                    onClick={goToProfile}
                >
                    account_circle
                </FontIcon>
            </IconButton>
        );
    }
}

ProfileButton.propTypes = {
    goToProfile: PropTypes.func.isRequired,
};

/** **********************
 * Exports              *
 ************************
 */
export default ProfileButton;
