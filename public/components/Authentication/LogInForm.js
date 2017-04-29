import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, TextField } from 'material-ui';

const style = {
    marginLeft: 20,
    underlineStyle: {},
};

const FORM_VALUES = {
    EMAIL: 'email',
    PASSWORD: 'password',
};

class LogInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    onChange(key) {
        return (event) => {
            const formElement = {};
            formElement[key] = event.target.value;
            this.setState(formElement);
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.logIn(this.state.email, this.state.password);
    }

    createUser(event) {
        event.preventDefault();
        this.props.createUser(this.state.email, this.state.password);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    onChange={this.onChange(FORM_VALUES.EMAIL)}
                    hintText="email"
                    style={style}
                />
                <TextField
                    onChange={this.onChange(FORM_VALUES.PASSWORD)}
                    hintText="password"
                    style={style}
                    type="password"
                />
                <RaisedButton
                    label="Log in"
                    primary
                    style={style}
                    type="submit"
                />
                <RaisedButton
                    onClick={this.createUser}
                    label="Create"
                    secondary
                    style={style}
                    type="submit"
                />
            </form>
        );
    }

}

LogInForm.propTypes = {
    logIn: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
};

/** **********************
 * Exports              *
 ************************
 */
export default LogInForm;
