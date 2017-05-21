import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import App from '../../components/App/App.component';

const mapStateToProps = state =>
    ({
        authenticated: !!state.user.id,
    });

export default withRouter(connect(mapStateToProps, null)(App));
