import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ToolbarComponent from '../../components/Toolbar/Toolbar.component';

const mapStateToProps = state =>
    ({
        isLoggedIn: !!state.user.id,
    });

/** **********************
 * Exports              *
 ************************
 */
export default withRouter(connect(mapStateToProps, null)(ToolbarComponent));
