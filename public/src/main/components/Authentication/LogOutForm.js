import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';

const style = {
    marginLeft: 20,
    underlineStyle: {},
};

class LogOutForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.logOut();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <RaisedButton
                    label="Log out"
                    primary
                    style={style}
                    type="submit"
                />
            </form>
        );
    }
}

LogOutForm.propTypes = {
    logOut: PropTypes.func.isRequired,
};

/** **********************
 * Exports              *
 ************************
 */
export default LogOutForm;
