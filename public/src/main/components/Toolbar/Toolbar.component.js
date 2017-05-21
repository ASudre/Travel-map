import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import style from './Toolbar.style';
import ProfileButton from '../../containers/Toolbar/Profile/ProfileButton.container';
import HomeButton from '../../containers/Toolbar/Home/HomeButton.container';

class ToolbarComponent extends React.Component {
    render() {
        const { authenticated } = this.props;
        const navigationButtons = (
            <ToolbarGroup>
                <HomeButton />
                <ProfileButton />
            </ToolbarGroup>
        );

        return (
            <Toolbar style={style.toolbarMain}>
                {authenticated ? navigationButtons : null}
            </Toolbar>
        );
    }
}

ToolbarComponent.propTypes = {
    authenticated: PropTypes.bool.isRequired,
};

/** **********************
 * Exports              *
 ************************
 */
export default ToolbarComponent;
