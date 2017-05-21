import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import ProfileButton from '../../../components/Toolbar/Profile/ProfileButton.component';

const mapDispatchToProps = dispatch =>
    ({
        goToProfile: () => {
            dispatch(push('/profile'));
        },
    });

/** **********************
 * Exports              *
 ************************
 */
export default withRouter(connect(null, mapDispatchToProps)(ProfileButton));
