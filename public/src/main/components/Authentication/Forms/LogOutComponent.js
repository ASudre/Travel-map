import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';

const style = {
    marginLeft: 20,
    underlineStyle: {},
};

class LogOut extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (<RaisedButton
            label="Log out"
            primary
            style={style}
            type="submit"
            onClick={handleSubmit}
        />);
    }
}

LogOut.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

/** **********************
* Exports              *
************************
*/
export default reduxForm({
    form: 'logOutForm',
})(LogOut);
