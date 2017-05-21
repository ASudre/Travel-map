import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import style from '../Toolbar.style';

class HomeButton extends React.Component {
    render() {
        const { goToHome } = this.props;

        return (
            <IconButton tooltip="Home">
                <FontIcon
                    className="material-icons"
                    hoverColor={style.icons.hoverColor}
                    color={style.icons.color}
                    onClick={goToHome}
                >
                    home
                </FontIcon>
            </IconButton>
        );
    }
}

HomeButton.propTypes = {
    goToHome: PropTypes.func.isRequired,
};

/** **********************
 * Exports              *
 ************************
 */
export default HomeButton;
