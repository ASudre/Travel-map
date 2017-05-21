import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import HomeButton from '../../../components/Toolbar/Home/HomeButton.component';

const mapDispatchToProps = dispatch =>
    ({
        goToHome: () => {
            dispatch(push('/home'));
        },
    });

/** **********************
 * Exports              *
 ************************
 */
export default withRouter(connect(null, mapDispatchToProps)(HomeButton));
