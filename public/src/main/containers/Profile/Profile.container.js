import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from '../../components/Profile/Profile.component';

const mapStateToProps = state =>
    ({
        user: state.user,
    });

/** **********************
 * Exports              *
 ************************
 */
export default withRouter(connect(mapStateToProps, null)(Profile));
