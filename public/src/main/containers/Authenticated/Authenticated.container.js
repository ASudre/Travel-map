import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Authenticated from '../../components/Authenticated/Authenticated.component';

/** **********************
 * Exports              *
 ************************
 */
export default withRouter(connect(null, null)(Authenticated));
