import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import style from './Profile.style';

class Profile extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <Card style={style}>
                <CardHeader
                    title={'Leo RASPAUD'}
                />
                <CardText>
                    {user.email}
                </CardText>
            </Card>
        );
    }
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
};

/** **********************
 * Exports              *
 ************************
 */
export default Profile;
